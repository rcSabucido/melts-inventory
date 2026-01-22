import Sidebar from "../components/Sidebar";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, QrCodeIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";

const TransactionChoice = () => {
    const navigate = useNavigate();
    const handleQRCode = () => {
        navigate('/qr_transaction', {state: { isDesktop: false }});
    }
    const handleTransactionDetails = () => {
        navigate('/transaction_details', {state: { isDesktop: true }});
    }
    const handleBack = () => {
        navigate('/transaction');
    }

    useEffect(() => {
        document.title = "Transaction Details";
    }, []);

    return (
        <>
            <div className='flex'>
                <Sidebar />
                <main className="p-4 flex-col bg-[#ffffdb] w-full">
                    <div className="flex gap-4 p-4 items-center">
                        <ArrowLeftIcon className="h-6 w-6 cursor-pointer" onClick={handleBack} />
                        <p className="text-2xl font-bold">Transaction Details</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="flex-col m-6 w-[24vw] justify-center align-center bg-amber-200/30  p-20 rounded-2xl shadow-xl hover:bg-amber-200/60" onClick={handleQRCode}>
                            <p className="text-3xl font-bold">QR Code</p>
                            <QrCodeIcon className="w-full" />
                        </button>
                        <button className="flex flex-col m-6 w-[24vw] justify-center align-center p-20 bg-amber-200/30 rounded-2xl shadow-xl hover:bg-amber-200/60" onClick={handleTransactionDetails}>
                            <p className="text-3xl font-bold">Manual Input</p>
                            <ComputerDesktopIcon className="w-full" />
                        </button>
                    </div>
                </main>
            </div>
        </>
    );
}

export default TransactionChoice;