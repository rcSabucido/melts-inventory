import Sidebar from '../components/Sidebar.jsx';
import Button from '../components/Button.jsx';
import Transactiontable from '../components/TransactionsTable.jsx';
import { FunnelIcon, PlusIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/solid';

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
        <main className="flex-col p-4 bg-[#ffffdb] w-full">
          <div className='flex justify-end mx-5 my-3 gap-2'>
            <Button>
              <FunnelIcon className="h-6 w-6" />
            </Button>
            <Button>
              <PlusIcon className="h-6 w-6" />
              Add Transaction
            </Button>
          </div>
          <div className="p-1 text-2xl font-bold text-gray-800">
            <p className='ml-3'>Transactions</p>
          </div>
          <Transactiontable columns={columns} data={tableData} className="shadow-md"/>
        </main>
      </div>
    </>
  );
}

export default TransactionPage;
