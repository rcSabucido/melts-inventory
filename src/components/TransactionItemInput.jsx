import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const TransactionItemInput = ({ initialProduct, index, updateParent, removeItem }) => {
    
    const [product, setProduct] = useState(initialProduct);
    const productNameChange = (e) => {
        const {_, value} = e.target;
        console.log("Product name changed!")
        console.log(value);
        setProduct(value);
        updateParent(index, product);
    }

    const handleRemove = () => {
        if (typeof removeItem === 'function') {
            removeItem(index);
        } else {
            console.error('removeItem is not a function');
        }
    };

    return (
        <div className='flex flex-wrap justify-between'>
            <div className="m-4 grow-[3] flex items-center gap-2">
                <button type="button" className="bg-transparent border-2 border-solid border-[#CB3F3F] hover:bg-[#CB3F3F] text-[#CB3F3F] hover:text-white h-auto w-4.5" onClick={handleRemove}>
                    <XMarkIcon />
                </button>
                <input 
                    type='text'
                    name='product'
                    className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
                    defaultValue={initialProduct}
                    onChange={productNameChange}
                />
            </div>
            <div className="flex ml-auto">
                <div className="m-4 grow">
                    <input
                        type='number'
                        name='quantity'
                        className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                    />
                </div>
                <div className="m-4 grow">
                    <input
                        type='number'
                        name='price'
                        className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                    />
                </div>
            </div>
        </div>
    );
}

export default TransactionItemInput;