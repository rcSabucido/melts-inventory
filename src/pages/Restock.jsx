import Button from '../components/Button.jsx';
import Sidebar from '../components/Sidebar.jsx';
import { FunnelIcon, PlusIcon } from '@heroicons/react/24/solid';


const RestockPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="relative p-4 bg-amber-100 w-full">
          <div className='absolute top-0 right-0 mx-13 my-6 flex gap-2'>
            <Button>
              <FunnelIcon className='h-6 w-6' />
              </Button>
            <Button>
              <PlusIcon className='h-6 w-6'/>
              Add Stock
              </Button>
          </div>
        </main>
      </div>
    </>
  );
}

export default RestockPage;