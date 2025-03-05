import Sidebar from '../components/Sidebar.jsx';
import Transactiontable from '../components/TransactionsTable.jsx';


const TransactionPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="p-15 bg-amber-100 w-full">
        <div className="p-1 text-2xl font-bold text-gray-800">
        <p>Transactions</p>
        </div>
          <Transactiontable />
        </main>
      </div>
    </>
  );
}

export default TransactionPage;