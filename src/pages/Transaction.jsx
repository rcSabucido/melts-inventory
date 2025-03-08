import Sidebar from '../components/Sidebar.jsx';
import Transactiontable from '../components/TransactionsTable.jsx';

const TransactionPage = () => {
  const columns = ['Date', 'Products', 'Recorded By', 'Items', 'Total Price'];
  const tableData = [
      {
          id: 1,
          'Date': '25 Dec 2020',
          'Products': 'Pat Black',
          'Recorded By': 'John Doe',
          'Items': '25',
          'Total Price': 450
      },
      {
          id: 2,
          'Date': '26 Dec 2020',
          'Products': 'Angel Jones',
          'Recorded By': 'John Doe',
          'Items': '66',
          'Total Price': 325
      },
      {
          id: 3,
          'Date': '26 Dec 2020',
          'Products': 'Max Edwards',
          'Recorded By': 'Eimma H. Acker',
          'Items': '3',
          'Total Price': 25
      },
      {
          id: 4,
          'Date': '26 Dec 2020',
          'Products': 'Bruce Fox',
          'Recorded By': 'Beau Rica',
          'Items': '120',
          'Total Price': 1500
      },
      {
          id: 5,
          'Date': '27 Dec 2020',
          'Products': 'Devon Fisher',
          'Recorded By': 'John Doe',
          'Items': '15',
          'Total Price': 999
      }
  ];
  
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="p-15 bg-amber-100 w-full">
          <div className="p-1 text-2xl font-bold text-gray-800">
            <p>Transactions</p>
          </div>
          <Transactiontable columns={columns} data={tableData} className="shadow-[-4px_4px_4px_#888888]"/>
        </main>
      </div>
    </>
  );
}

export default TransactionPage;
