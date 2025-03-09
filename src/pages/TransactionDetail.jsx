import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import Sidebar from '../components/Sidebar';

const TransactionDetail = () => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                    <main className="p-4 flex-col bg-[#ffffdb] w-full">
                        <div className="flex gap-4 p-4 items-center">
                            <ArrowLeftIcon className="h-6 w-6" />
                            <p className="text-2xl font-bold">Transaction Details</p>
                        </div>
                    </main>
            </div>
        </>
    );
}

export default TransactionDetail;