import Sidebar from '../components/Sidebar.jsx';

const RestockPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="p-4 bg-amber-100 w-full">
          <h2>This is an restock page!</h2>
        </main>
      </div>
    </>
  );
}

export default RestockPage;