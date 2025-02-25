import Button from '../components/Button.jsx';
import Sidebar from '../components/Sidebar.jsx';


const RestockPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="relative p-4 bg-amber-100 w-full">
          <div className='absolute top-0 right-0 mx-13 my-6 flex gap-2'>
            <Button>bob</Button>
            <Button>phil</Button>
          </div>
        </main>
      </div>
    </>
  );
}

export default RestockPage;