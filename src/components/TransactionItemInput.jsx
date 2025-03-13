import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const TransactionItemInput = ({ initialProduct, index, updateParent, removeItem }) => {
    index = index || 0;
    const [product, setProduct] = useState(initialProduct);
    const productNameChange = (e) => {
        const {_, value} = e.target;
        console.log("Product name changed!")
        console.log(value);
        setProduct(value);
        updateParent(index, product);
    }
    
    const handleRemove = () => {
        removeItem(index);
    };


    console.log("Product: ", product, " Index: ", index);

    return (
        <div className='flex flex-wrap justify-between'>
                    <div className="m-4 grow-[3] flex items-center gap-2">
                        <button className="bg-transparent border-2 border-solid border-[#CB3F3F] hover:bg-[#CB3F3F] text-[#CB3F3F] hover:text-white h-auto w-4.5"><XMarkIcon/></button>
                        <input 
                            type='text'
                            name='product'
                            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
                            defaultValue={initialProduct}
                            onChange={productNameChange}
                            required
                        />
                    </div>
                    <div className="flex ml-auto">
                        <div className="m-4 grow">
                            
                            <input
                                type='number'
                                name='quantity'
                                className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                                required 
                            />
                        </div>
                        <div className="m-4 grow">
                            
                            <input
                                type='number'
                                name='price'
                                className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                                required 
                            />
                        </div>
                    </div>
                </div>
    );
}

export default TransactionItemInput;