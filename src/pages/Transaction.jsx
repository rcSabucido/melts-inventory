import Sidebar from '../components/Sidebar.jsx';

const TransactionPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="p-4 bg-amber-100 w-full">
          <h2>This is an transaction page!</h2>
        </main>
      </div>
    </>
  );
}

export default TransactionPage;