import { PlusIcon, QrCodeIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TransactionItemInput from "./TransactionItemInput";
import Switch from "./Switch";

const TransactionInput = ({ isDesktop: initialIsDesktop }) => {
    const [items, setItems] = useState([<TransactionItemInput key={0} />]);
    const [isDesktop, setIsDesktop] = useState(initialIsDesktop);
    const navigate = useNavigate();

    useEffect(() => {
        setIsDesktop(initialIsDesktop);
    }, [initialIsDesktop]);

    const handleAddItem = () => {
        if (isDesktop) {
            setItems([...items, <TransactionItemInput key={items.length} />]);
        } else {
            navigate('/qr_transaction', { state: { addItem: true } });
        }
    };

    return (
        <>
            <div className="m-4 p-4 p-auto bg-amber-200/30 rounded-xl flex flex-col shadow-md h-150">
                <div className='flex-grow overflow-y-auto'>
                    {items}
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex mr-auto">
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