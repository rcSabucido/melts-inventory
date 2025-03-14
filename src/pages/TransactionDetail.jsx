import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ConfirmationModal from '../components/ConfirmationModal';
import Sidebar from '../components/Sidebar';
import TransactionInput from '../components/TransactionInput';

const TransactionDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [leaveModal, setLeaveModal] = useState(false);
    const [firstTime, setFirstTime] = useState(true);

    const handleSubmit = () => {
        e.preventDefault();
        navigate('/transaction');
    }
    return (
        <>
            <div className="flex">
                <Sidebar />
                <form className='p-4 flex-col bg-[#ffffdb] w-full' onSubmit={handleSubmit}>
                    <div className="flex gap-4 p-4 items-center">
                        <ArrowLeftIcon className="h-6 w-6 cursor-pointer" onClick={() => setLeaveModal(true)} />
                        <p className="text-2xl font-bold">Transaction Details</p>
                    </div>
                    <TransactionInput
                    firstTime={firstTime}
                    setFirstTime={setFirstTime}
                    currentItems={location.state?.currentItems}
                    isDesktop={location.state?.isDesktop ?? true}
                    scannedProduct={location.state?.scannedProduct} />
                </form>
            </div>
            {leaveModal && <ConfirmationModal 
                noButton={'Cancel'}
                yesButton={'Leave'}
                message='You have unsaved changes. Are you sure you want to leave this page?' 
                    onYes={() => navigate('/transaction')}
                    onNo={() => setLeaveModal(false)}
                />}
        </>
    );
}

export default TransactionDetail;