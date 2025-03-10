import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Scanner from "../components/Scanner";

const TransactionQR = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/transaction');
    }

    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="p-4 flex-col  bg-[#ffffdb] w-full">
                    <div className="flex gap-4 p-4 items-center">
                        <ArrowLeftIcon className="h-6 w-6 cursor-pointer" onClick={handleBack} />
                        <p className="text-2xl font-bold">Transaction Details</p>
                    </div>
                    <Scanner />                 
                </main>
            </div>
        </>
    );
}

export default TransactionQR;