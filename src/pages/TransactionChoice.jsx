import Sidebar from "../components/Sidebar";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

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
                        <button className="p-60 bg-amber-100 rounded-2xl shadow-xl">btn1</button>
                        <butotn className="p-60 bg-amber-100 rounded-2xl shadow-xl">btn2</butotn>
                    </div>
                </main>
            </div>
        </>
    );
}

export default TransactionChoice;