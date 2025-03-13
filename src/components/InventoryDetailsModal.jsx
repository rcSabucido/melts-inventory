import InventoryTable from "./InventoryTable.jsx";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const InventoryDetailsModal = ({columns, data, onClose}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 6;
  
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const handleNextPage = () => {
      if (currentPage  < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      } 
    };

    return (
        <div className="fixed inset-0 bg-gray-800/40 flex justify-center items-center z-50">
            <div className="bg-[#FDEFB2] p-6 rounded-lg w-3/4 h-9/11">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Inventory</h2>
                    <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={onClose}/>
                </div>
                <InventoryTable columns={columns} data={currentRows} />
            </div>
            <div className='flex justify-center gap-4 absolute bottom-25 left-12 right-15'>
            <button className='text-orange-500 hover:text-orange-700 font-medium' onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
            <button className='text-orange-500 hover:text-orange-700 font-medium' onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next {currentPage < totalPages && '→'}
              </button>
          </div>
        </div>
    )
}

export default InventoryDetailsModal;