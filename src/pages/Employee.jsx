import Sidebar from '../components/Sidebar.jsx';
import Button from '../components/Button.jsx';
import ModifiableTable from '../components/ModifiableTable.jsx';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const EmployeePage = () => {
  const navigate = useNavigate();
  const handleAddEmployee = () => {
    navigate('/add_employee');
  }
  const columns = ['Name', 'Gender', 'Email', 'Age'];
  const tableData = [
      {
          'Name': 'Yerin Arelius',
          'Gender': 'Female',
          'Email': 'yerin@gmail.com',
          'Age': 21
      },
      {
          'Name': 'Wei Shi Lindon',
          'Gender': 'Male',
          'Email': 'lindon@gmail.com',
          'Age': 22
      },
      {
          'Name': 'Eithan Arelius',
          'Gender': 'Male',
          'Email': 'ozriel@gmail.com',
          'Age': 31
      },
      {
        'Name': 'Akura Mercy',
        'Gender': 'Female',
        'Email': 'aMercy@gmail.com',
        'Age': 20
      }
  ];
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="p-4 flex-col bg-[#ffffdb] w-full">
          <div className='flex justify-end mx-5 my-3'>
            <Button onClick={handleAddEmployee}>
              <PlusIcon className="h-6 w-6" />
              Add Employee
            </Button>
          </div>
          <p className='px-4 pt-4 text-xl font-bold'>Employees</p>
          <ModifiableTable columns={columns} data={tableData} />
        </main>
      </div>
    </>
  );
}

export default EmployeePage;