import Button from '../components/Button.jsx';
import Sidebar from '../components/Sidebar.jsx';
import { FunnelIcon, PlusIcon } from '@heroicons/react/24/solid';


const RestockPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-col p-4 bg-amber-100 w-full">
          <div className='mx-5 my-3 flex justify-end gap-2'>
            <Button>
              <FunnelIcon className='h-6 w-6' />
              </Button>
            <Button>
              <PlusIcon className='h-6 w-6'/>
              Add Stock
              </Button>
          </div>
          <div className='mx-7 w-auto h-80 bg-amber-200/30 rounded-xl'>
            <p className='mx-3 font-medium'>Month-Day-Year</p>
          </div>
        </main>
      </div>
    </>
  );
}

export default RestockPage;