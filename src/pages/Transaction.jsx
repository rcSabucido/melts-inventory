import Sidebar from '../components/Sidebar.jsx';
import Button from '../components/Button.jsx';
import Transactiontable from '../components/TransactionsTable.jsx';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY)

const TransactionPage = () => {
  const navigate = useNavigate();
  const handleTransactionChoice = () => {
    navigate('/transaction_choice');
  }
  const columns = ['Date', 'Products', 'Items', 'Total Price'];

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    async function fetchTransactions() {
      const { data, error } = await supabase
        .from('SalesFull')
        .select("sales_id, total, purchase_date, sales_details")
      console.log("Full sales data:")
      console.log(data)

      let tableData = []
      for (let i = 0; i < data.length; i++) {
        let data_row = data[i]
        let table_row = {}
        let products = []
        for (let j = 0; j < data_row["sales_details"].length; j++) {
          let sale_detail = data_row["sales_details"][j]
          console.log(sale_detail)
          products += sale_detail["product_name"]
          if (j < data_row["sales_details"].length - 1) {
            products += ", "
          }
        }
        table_row.id = data_row.sales_id
        table_row['Date'] = data_row.purchase_date
        table_row['Products'] = products
        table_row['Items'] = data_row["sales_details"].length
        table_row['Total Price'] = data_row["total"]
        tableData.push(table_row)
      }
      setTableData(tableData)
    }
    fetchTransactions()
  }, [tableData])

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 9;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  const handleNextPage = () => {
    if (currentPage  < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } 
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-col p-4 bg-[#ffffdb] w-full relative">
          <div className='flex justify-end mx-5 my-3 gap-2'>
            <Button onClick={handleTransactionChoice}>
              <PlusIcon className="h-6 w-6" />
              Add Transaction
            </Button>
          </div>
          <div className="p-1 text-2xl font-bold text-gray-800">
            <p className='ml-3'>Transactions</p>
          </div>
          <Transactiontable columns={columns} data={currentRows} className="shadow-md"/>
          <div className='flex justify-center gap-4 absolute bottom-9 left-0 right-0'>
            <button className='text-orange-500 hover:text-orange-700 font-medium' onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
            <button className='text-orange-500 hover:text-orange-700 font-medium' onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next {currentPage < totalPages && '→'}
              </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default TransactionPage;
