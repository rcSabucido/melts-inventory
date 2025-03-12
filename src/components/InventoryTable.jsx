import { useState } from "react";
import { PencilIcon,TrashIcon } from "@heroicons/react/24/solid";
import EditItems from "./EditModal"; 
import DeleteModal from "./DeleteModal";
import { createClient } from '@supabase/supabase-js';

const supabase =  createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY);

const InventoryTable = ({ columns, data, refreshData }) => {
  const [isEditing, setIsEditing,] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

  const handleDelete = (item) => {
    setDeleteItem(item);
    setShowDeleteModal(item, true);
  };

  const confirmDelete = async () => {
    if (deleteItem) {
      const { error } = await supabase 
        .from('Product')
        .update({ is_active: false })
        .eq('product_id', deleteItem.product_id)
      
        if (error) {
          console.error('Error deactivating item:', error);
        } else {
          console.log('Item deactivated successfully');
          await refreshData();
        }

        setShowDeleteModal(false);
        setDeleteItem(null);
    }
  }

  const handleEdit = (product) => {
      setCurrentProduct(product);
      setIsEditing(true);
  };

  const closeEditModal = () => {
      setIsEditing(false);
      setShowDeleteModal(false);
      setCurrentProduct(null);
  };

    
  
    return (
      <>
      <div className="border-solid border-orange-400/40 border-2 rounded-md w-full">
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
                    <PencilIcon onClick={() => handleEdit(row)}  className='h-5 w-5 cursor-pointer'/>
                    <TrashIcon onClick={() => handleDelete(row)}  className='h-5 w-5 cursor-pointer'/>
                  </div>
                </td>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-6 py-5">
                  {column === 'Price' ? `₱${parseFloat(row[column]).toFixed(2)}` : row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showDeleteModal && <DeleteModal onClose={closeEditModal} onConfirm={confirmDelete} />} 
      {isEditing && <EditItems onClose={closeEditModal} refreshData={refreshData} currentProduct={currentProduct} />} 
      </>
    )
  }
  
  export default InventoryTable;
