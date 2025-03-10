import { useState } from "react";

const TransactionItemInput = ({ initialProduct, index, updateParent }) => {
    index = index || 0;
    const [product, setProduct] = useState(initialProduct);
    const productNameChange = (e) => {
        const {_, value} = e.target;
        console.log("Product name changed!")
        console.log(value);
        setProduct(value);
        updateParent(index, product);
    }

    console.log("Product: ", product, " Index: ", index);

    return (
        <div className='flex flex-wrap justify-between'>
                    <div className="m-4 grow-[3]">
                        <label className="block text-sm font-medium text-gray-700">Product</label>
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
                            <label className="block text-sm font-medium text-gray-700">Quantity</label>
                            <input
                                type='number'
                                name='quantity'
                                className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                                required 
                            />
                        </div>
                        <div className="m-4 grow">
                            <label className="block text-sm font-medium text-gray-700">Price</label>
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