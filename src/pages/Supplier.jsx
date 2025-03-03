import Button from '../components/Button.jsx';
import Sidebar from '../components/Sidebar.jsx';
import SupplierTable from '../components/SupplierTable.jsx';
import { PlusIcon } from '@heroicons/react/24/solid';

const SupplierPage = () => {
    const columns = ['Name', 'Email', 'Contact Number', 'Street', 'Barangay', 'District', 'City', 'Province'];
    const tableData = [
        {
            'Name': 'Eimma H. Acker',
            'Email': 'eimma.acker@example.com',
            'Contact Number': '099132384782',
            'Street': '###',
            'Barangay': '###',
            'District': '###',
            'City': '###',
            'Province': '###'
        }
    ];
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-col p-4 bg-amber-100 w-full">
          <div className='mx-5 my-3 flex justify-end gap-2'>
            <a href="/add_supplier">
              <Button>
                <PlusIcon className='h-6 w-6'/>
                Add Supplier
              </Button>
            </a>
          </div>
          <div>
            <p className='px-4 pt-4 text-xl font-bold'>Suppliers</p>
            <SupplierTable columns={columns} data={tableData} />
          </div>
        </main>
      </div>
    </>
  );
}

export default SupplierPage;