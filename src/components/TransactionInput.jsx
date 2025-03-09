import { useState } from "react";
import TransactionItemInput from "./TransactionItemInput";

const TransactionInput = () => {
    return (
        <>
            <div className="m-4 p-4 p-auto bg-amber-200/30 rounded-xl flex flex-col shadow-md h-150">
                <div className='flex-grow overflow-y-auto'>
                    <TransactionItemInput />
                    <TransactionItemInput />
                    <TransactionItemInput />
                    <TransactionItemInput />
                    <TransactionItemInput />
                </div>
                <div className="flex justify-between mt-4">
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Recorded by</label>
                        <input
                            type='text'
                            name='recordedBy'
                            className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                            required 
                        />
                    </div>
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <input
                            type='date'
                            name='date'
                            className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                            required 
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TransactionInput;