import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import Sidebar from '../components/Sidebar';
import TransactionInput from '../components/TransactionInput';

const TransactionDetail = () => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <form className='p-4 flex-col bg-[#ffffdb] w-full'>
                    <div className="flex gap-4 p-4 items-center">
                        <ArrowLeftIcon className="h-6 w-6" />
                        <p className="text-2xl font-bold">Transaction Details</p>
                    </div>
                    <TransactionInput />
                </form>
            </div>
        </>
    );
}

export default TransactionDetail;