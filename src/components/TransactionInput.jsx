import { PlusIcon, QrCodeIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
import { useEffect, useState, cloneElement } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TransactionItemInput from "./TransactionItemInput";
import Switch from "./Switch";

import { v4 as uuidv4 } from 'uuid';

const TransactionInput = ({ isDesktop: initialIsDesktop, transactionDate, currentItems, scannedProduct, firstTime, setFirstTime, productList }) => {
    let initialItems = []
    let [date, setDate] = useState(transactionDate || new Date().toISOString().substring(0, 10))
    let initialPrice = 0
    
    if (firstTime) {
        console.log("I've come from a different page... Current items: ", currentItems);

        if (currentItems) {
            for (let i = 0; i < initialItems.length; i++) {
                if (!initialItems["uuid"]) {
                    initialItems["uuid"] = uuidv4();
                }
            }
            initialItems = currentItems;
        }

        console.log("checking scanned product ")
        if (scannedProduct) {
            let newProduct = true;
            for (let i = 0; i < initialItems.length; i++) {
                if (initialItems[i]["product"] === scannedProduct) {
                    initialItems[i]["quantity"] += 1
                    newProduct = false
                    break
                }
            }
            if (newProduct) {
                let item = {
                    "product": scannedProduct,
                    "quantity": 1,
                    "price": 0,
                    "uuid": uuidv4()
                }
                console.log("Scanned a product!")
                console.log(item)
                initialItems.push(item)
            }
        }
        initialPrice = initialItems.reduce((acc, item) => acc + (item["price"] * item["quantity"]), 0)
        setFirstTime(false)
    }
    let [totalPrice, setTotalPrice] = useState(initialPrice)

    const [items, setItems] = useState(initialItems);
    const [isDesktop, setIsDesktop] = useState(initialIsDesktop);
    const navigate = useNavigate();

    function updateTotalPrice(newItems) {
        setTotalPrice((newItems ? newItems : items).reduce((acc, item) => acc + (item["price"] * item["quantity"]), 0))
    }

    function updateItemData(index, part, data) {
        items[index][part] = data;
        console.log("Item are now: ", items);

        if (part === "product") {
            if (productList.hasOwnProperty(data)) {
                items[index]["price"] = productList[data].price
            } else {
                items[index]["price"] = 0
            }
            setItems(items)
        }

        updateTotalPrice()

    }
    function deleteItem(index) {
        let key = items[index]["uuid"]
        let filteredItems = items.filter((_, i) => i !== index)
        setItems(filteredItems)
        updateTotalPrice(filteredItems)
    };

    const handleAddItem = () => {
        if (isDesktop) {
            console.log(deleteItem)
            let item = {
                product: '',
                quantity: 1,
                price: 0,
                uuid: uuidv4()
            }
            setItems(prevItems => [...prevItems, item])
        } else {
            navigate('/qr_transaction', { 
                state: { 
                    addItem: true,
                    currentItems: items,
                    transactionDate: date
                } 
            });
        }
    };

    const clearItems = () => {
        setItems([])
    }

    const saveData = () =>{
        if (items.length == 0) {
            alert("Please input at least one product!")
            return
        }
        console.log("Saving data to database: ")
        console.log(items)
        for (let i = 0; i < items.length; i++) {
            if (items[i]["price"] <= 0) {
                alert("Please type in a valid price.")
                return
            }
            if (items[i]["quantity"] <= 0 || items[i]["quantity"] % 1 != 0) {
                alert("Please type in a valid quantity.")
                return
            }
            if (!items[i]["product"].trim()) {
                alert("Please type in a valid product name.")
                return
            }
            if (!productList.hasOwnProperty(items[i]["product"])) {
                alert(`${items[i]["product"]} is not a valid product.`)
                return
            }
        }
        console.log(date)
        console.log(totalPrice)
    }

    return (
        <>
            <div className="m-4 p-4 p-auto bg-amber-200/30 rounded-xl flex flex-col shadow-md h-150">
                <div className='flex-grow overflow-y-auto'>
                     <div className='relative flex mb-1'>
                        <div className="absolute left-10 text-sm font-medium text-gray-700">Product</div>
                        <div className="absolute right-98 text-sm font-medium text-gray-700">Quantity</div>
                        <div className="absolute right-46 text-sm font-medium text-gray-700">Price</div>
                    </div>
                    {items.map((item, index) => (
                        <TransactionItemInput
                            key={item.uuid}
                            index={index}
                            initialProduct={item}
                            updateParent={updateItemData}
                            deleteItem={() => deleteItem(index)}
                        />
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex mr-auto">
                        <div className="m-4 grow">
                            <label className="block text-sm font-medium text-gray-700">Date</label>
                            <input
                                type='date'
                                name='date'
                                className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                                defaultValue={date}
                                onChange={(e) => {
                                    const {_, value} = e.target
                                    setDate(value)
                                }}
                            />
                        </div>
                    </div>
                    <div className="mt-5 mr-10">
                        <p className="text-3xl font-bold ">{`Total: ₱${totalPrice}`}</p>
                        </div>
                </div>
            </div>
            <div className="flex justify-between mt-10 ml-4 mr-4">
            <Switch onChange={setIsDesktop} checked={isDesktop}>
                    {[<QrCodeIcon className="h-6 w-6"/>, <ComputerDesktopIcon className="h-6 w-6" />]}
            </Switch>
            <div className="flex">
                <button type='button' onClick={clearItems}
                    className="font-bold rounded-lg text-medium text-orange-400/70 hover:text-orange-500 mb-2 px-4">Clear</button>
                <Button type='button' onClick={handleAddItem}>
                    <PlusIcon className="h-6 w-6" />
                    Add Item
                </Button>
                <Button type='button' onClick={saveData}>
                    Save
                </Button>
            </div>   
            </div>
        </>
    );
}

export default TransactionInput;