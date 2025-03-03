import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

const SupplierTable = ({ columns, data }) => {
    return (
      <div className="relative overflow-x-auto rounded-xl m-5 shadow-[-4px_4px_4px_#888888]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-orange-200/70">
            <tr>
              <th className="px-3"></th>
              <th className="px-6"></th>
              <th className="px-6"></th>
              {columns.map((column, index) => (
                <th key={index} scope="col" className="px-6 py-2">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-amber-100 border-b border-gray-200 text-gray-900">
                <td key="0" className="px-2 py-5"></td>
                <td key="0" className="px-2 py-5 max-w-md"><PencilIcon /></td>
                <td key="0" className="px-2 py-5 max-w-md"><TrashIcon /></td>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-6 py-5">{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default SupplierTable;