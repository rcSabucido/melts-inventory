const TransactionItemInput = () => {
    return (
        <div className='flex flex-wrap justify-between'>
                    <div className="m-4 grow-[3]">
                        <label className="block text-sm font-medium text-gray-700">Product</label>
                        <input 
                            type='text'
                            name='product'
                            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
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