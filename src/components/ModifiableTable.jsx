import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

const ModifiableTable = ({ columns, data, className, onEditClick, onDeleteClick }) => {
    let addClassName = className;
    return (
      <div className={`relative overflow-x-auto rounded-xl m-5 ${addClassName}`}>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-[#ffe1b7]">
            <tr>
              <th className="px-3"></th>
              {columns.map((column, index) => (
                <th key={index} scope="col" className="px-6 py-2">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-[#fff2bf] border-b border-gray-200 text-gray-900">
                <td key="0" className="w-25 px-5">
                  <div className='flex gap-8 justify-center items-center'>
                    <PencilIcon className='h-5 w-5' onClick={() => onEditClick(row)} />
                    <TrashIcon className='h-5 w-5' onClick={() => onDeleteClick(row)} />
                  </div>
                </td>
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
  
  export default ModifiableTable;