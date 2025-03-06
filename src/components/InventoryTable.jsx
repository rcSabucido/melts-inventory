import { useState } from "react";
import { PencilIcon,TrashIcon } from "@heroicons/react/24/solid";
import EditItems from "./EditModal"; 
import DeleteModal from "./DeleteModal";

const InventoryTable = ({ columns, data }) => {
  const [isEditing, setIsEditing,] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = (item) => {
    setShowDeleteModal(item, true);
  };

  const handleEdit = (product) => {
      setCurrentProduct(product);
      setIsEditing(true);
  };

  const closeEditModal = () => {
      setIsEditing(false);
      setShowDeleteModal(null);
      setCurrentProduct(null);
  };

    
  
    return (
      <>
      <div className="border-solid border-orange-400/40 border-2 rounded-md w-full font-bold">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-[#ffe1b7]">
            <tr>
              <th className="px-6 py-5 border-solid border-gray-400/20 border-t-2"></th>
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
                    <PencilIcon onClick={handleEdit}  className='h-5 w-5 cursor-pointer'/>
                    <TrashIcon onClick={handleDelete}  className='h-5 w-5 cursor-pointer'/>
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
      {showDeleteModal && <DeleteModal onClose={closeEditModal} />} {/* Render the delete modal if editing */}
      {isEditing && <EditItems onClose={closeEditModal} />} {/* Render the edit modal if editing */}
      </>
    )
  }
  
  export default InventoryTable;
