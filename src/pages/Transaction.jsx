import Sidebar from '../components/Sidebar.jsx';
import Transactiontable from '../components/TransactionsTable.jsx';


const TransactionPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="p-15 bg-amber-100 w-full">
        <div className="p-1   text-2xl font-bold text-gray-800">
        <a href="#">Transactions</a>
        </div>
          <Transactiontable />
        </main>
      </div>
    </>
  );
}

export default TransactionPage;