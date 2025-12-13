import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ConfirmationModal from '../components/ConfirmationModal';
import Sidebar from '../components/Sidebar';
import TransactionInput from '../components/TransactionInput';
import InventoryQuickAccessButton from '../components/InventoryQuickAccessButton';
import InventoryQuickAccess from '../components/InventoryQuickAccess';

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY)

const TransactionDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [leaveModal, setLeaveModal] = useState(false);
    const [firstTime, setFirstTime] = useState(true);
    const [quickAccess, setQuickAccess] = useState(false);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const { data, error } = await supabase
                .from('InventoryFull')
                .select("product_name, price, quantity, product_id")
                .eq('is_active', true)

            if (error) {
                console.error("Unable to get the list of products!")
                return
            }
            setProductList(data.filter((item) => item.quantity > 0).reduce((acc, obj) => {
                acc[obj.product_name] = {price: obj.price, product_id: obj.product_id, quantity: obj.quantity};
                return acc;
            }, {}));
        }
        fetchProducts()
    }, [productList])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <form className='p-4 flex-col bg-[#ffffdb] w-full'>
                    <div className="flex gap-4 p-4 items-center">
                        <ArrowLeftIcon className="h-6 w-6 cursor-pointer" onClick={() => setLeaveModal(true)} />
                        <p className="text-2xl font-bold">Transaction Details</p>
                    </div>
                    {(
                        productList.length != 0 ?
                        <TransactionInput
                            firstTime={firstTime}
                            setFirstTime={setFirstTime}
                            currentItems={location.state?.currentItems}
                            isDesktop={location.state?.isDesktop ?? true}
                            transactionDate={location.state?.transactionDate}
                            scannedProduct={location.state?.scannedProduct}
                            productList={productList}
                            supabase={supabase}
                        />  :
                        (
                            <div className="place-self-center">
                            <br/>
                              <p className="text-xl">Loading the list of products...</p>
                            </div>
                        )
                    )}
                </form>
            </div>
            {leaveModal && <ConfirmationModal 
                noButton={'Cancel'}
                yesButton={'Leave'}
                message='You have unsaved changes. Are you sure you want to leave this page?' 
                    onYes={() => navigate('/transaction')}
                    onNo={() => setLeaveModal(false)}
                />}
            {quickAccess ? <InventoryQuickAccess /> : <InventoryQuickAccessButton onClick={() => setQuickAccess(true)} />}
        </>
    );
}

export default TransactionDetail;