import Sidebar from '../components/Sidebar.jsx';
import Button from '../components/Button.jsx';
import { PlusIcon } from '@heroicons/react/24/solid';

const EmployeePage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="p-4 flex-col bg-amber-100 w-full">
          <div className='flex justify-end mx-5 my-3'>
            <Button>
              <PlusIcon className="h-6 w-6" />
              Add Employee
            </Button>
          </div>
          
        </main>
      </div>
    </>
  );
}

export default EmployeePage;