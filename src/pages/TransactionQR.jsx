import Sidebar from "../components/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Scanner from "../components/Scanner";
import { useEffect, useState } from "react";

const TransactionQR = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scanResult, setScanResult] = useState(null);
    const handleBack = () => {
        navigate('/transaction');
    }

    useEffect(() => {
        if (scanResult) {
            navigate('/transaction_details', {
                state: {
                    isDesktop: false,
                    scannedProduct: scanResult,
                    existingItems: location.state?.existingItems ?? [],
                    addingNewItem: location.state?.addItem || false
                }
            })
        } 
    }, [scanResult])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="p-4 flex-col bg-[#ffffdb] w-full">
                    <div className="flex gap-4 p-4 items-center">
                        <ArrowLeftIcon className="h-6 w-6 cursor-pointer" onClick={handleBack} />
                        <p className="text-2xl font-bold">Transaction Details</p>
                    </div>
                    <div className="flex justify-center mt-20">
                        <Scanner onScanSuccess={setScanResult} /> 
                    </div>                
                </main>
            </div>
        </>
    );
}

export default TransactionQR;