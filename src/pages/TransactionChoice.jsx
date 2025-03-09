import Sidebar from "../components/Sidebar";
import { ArrowLeftIcon, QrCodeIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";

const TransactionChoice = () => {
    return (
        <>
            <div class='flex'>
                <Sidebar />
                <main className="p-4 flex-col bg-[#ffffdb] w-full">
                    <div className="flex gap-4 p-4 items-center">
                        <ArrowLeftIcon className="h-6 w-6" />
                        <p className="text-2xl font-bold">Transaction Details</p>
                    </div>
                    <div className="flex gap-15 p-5 mt-15 justify-center items-center">
                        <button className="flex-col justify-center align-center bg-amber-200/30  p-20 rounded-2xl shadow-xl hover:bg-amber-200/60">
                            <p className="text-3xl font-bold">QR Code</p>
                            <QrCodeIcon className="w-full" />
                        </button>
                        <button className="flex flex-col justify-center align-center p-20 bg-amber-200/30 rounded-2xl shadow-xl hover:bg-amber-200/60">
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