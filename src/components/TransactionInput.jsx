import { PlusIcon, QrCodeIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
import { useEffect, useState, cloneElement } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TransactionItemInput from "./TransactionItemInput";
import Switch from "./Switch";

import { v4 as uuidv4 } from 'uuid';

const TransactionInput = ({ isDesktop: initialIsDesktop, currentItems, scannedProduct, firstTime, setFirstTime }) => {
    let initialItems = []
    
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
            let item = {
                "product": scannedProduct,
                "quantity": 0,
                "price": 0,
                "uuid": uuidv4()
            }
            console.log("Scanned a product!")
            console.log(item)
            initialItems.push(item)
        }
        setFirstTime(false)
    }

    const [items, setItems] = useState(initialItems);
    const [isDesktop, setIsDesktop] = useState(initialIsDesktop);
    const navigate = useNavigate();

    function updateItemData(index, part, data) {
        items[index][part] = data;
        console.log("Item are now: ", items);
    }
    function deleteItem(index) {
        let key = items[index]["uuid"]
        let filteredItems = items.filter((_, i) => i !== index)
        setItems(filteredItems)
    };

    const handleAddItem = () => {
        if (isDesktop) {
            console.log(deleteItem)
            let item = {
                product: '',
                quantity: 0,
                price: 0,
                uuid: uuidv4()
            }
            setItems(prevItems => [...prevItems, item])
        } else {
            navigate('/qr_transaction', { 
                state: { 
                    addItem: true,
                    currentItems: items
                } 
            });
        }
    };

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
            
                            />
                        </div>
                    </div>
                    <div className="mt-5 mr-10">
                        <p className="text-3xl font-bold ">Total: $0000</p>
                        </div>
                </div>
            </div>
            <div className="flex justify-between mt-10 ml-4 mr-4">
            <Switch onChange={setIsDesktop} checked={isDesktop}>
                    {[<QrCodeIcon className="h-6 w-6"/>, <ComputerDesktopIcon className="h-6 w-6" />]}
            </Switch>
            <div className="flex">
                <button type='button' className="font-bold rounded-lg text-medium text-orange-400/70 hover:text-orange-500 mb-2 px-4">Clear</button>
                <Button type='button' onClick={handleAddItem}>
                    <PlusIcon className="h-6 w-6" />
                    Add Item
                </Button>
                <Button type='submit'>
                    Save
                </Button>
            </div>   
            </div>
        </>
    );
}

export default TransactionInput;