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
    const [firstLoad, setFirstLoad] = useState(true);
    const [quickAccess, setQuickAccess] = useState(false);
    const [productList, setProductList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [totalSales, setTotalSales] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            if (!firstLoad) {
                return;
            }

            let result = await supabase
                .from('InventoryFull')
                .select("product_name, price, quantity, product_id, category_name")
                .eq('is_active', true)

            if (result.error) {
                console.error("Unable to get the list of products!")
                console.error(result.error)
               return
            }
            setProductList(
                result.data
                    .filter((item) => item.quantity > 0)
                    .sort((a, b) => a.category_name.localeCompare(b.category_name))
                    .reduce((acc, obj) => {
                        acc[obj.product_name] = {price: obj.price, product_id: obj.product_id, quantity: obj.quantity, category_name: obj.category_name};
                        return acc;
                    }, {})
            );

            result = await supabase
                .from('ProductCategory')
                .select("category_id, name");

            if (result.error) {
                console.error("Unable to get the list of product categories!")
                console.error(result.error)
                return
            }
            setCategoryList(Object.fromEntries(
                result.data.map(({ category_id, name }) => [category_id, name])
            ));

            result = await supabase
                .from('TotalActiveProductSales')
                .select("product_id, category_id, product_name, total_sales");

            if (result.error) {
                console.error("Unable to get the list of total sales!")
                console.error(result.error)
                return
            }
            setTotalSales(
                result.data
                    .sort((a, b) => a.total_sales - b.total_sales)
                    .reduce((acc, obj) => {
                        acc[obj.product_id] = {category_id: obj.category_id, product_name: obj.product_name, total_sales: obj.total_sales};
                        return acc;
                    }, {})
            );

            setFirstLoad(false);
        }
        fetchProducts()
    }, [productList, categoryList])

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
            {quickAccess ?
                <InventoryQuickAccess productList={productList} totalSales={totalSales} categoryList={categoryList} onBack={() => {setQuickAccess(false); console.log("Closing quick access.")}} /> :
                <InventoryQuickAccessButton onClick={() => setQuickAccess(true)} />}
        </>
    );
}

export default TransactionDetail;