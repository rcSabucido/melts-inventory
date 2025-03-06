import { useState } from "react";
import { PencilSquareIcon,TrashIcon } from "@heroicons/react/24/outline";
import EditItems from "./EditModal"; 
import DeleteModal from "./DeleteModal";

const InventoryTable = () => {
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
      <div class="border-solid border-orange-400/40 border-2 rounded-md w-full">
      <table class="table-auto text-left rtl:text-right w-full">
        <thead class="text-gray-600 bg-orange-300/30">
          <tr>
          <th class="px-6 py-3">
            </th>
            <th class="px-6 py-3">
              Product
            </th>
            <th class="px-6 py-3">
              Items
            </th>
            <th class="px-6 py-3">
              Category
            </th>
            <th class="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* inset-y-[+16]*/}
            <TrashIcon 
              stroke-width="2"  
              class="h-6 absolute inset-y-61 inset-x-96 right-133" 
              onClick={() => handleDelete("Mango Chip")} 
            />
            <PencilSquareIcon 
            strokeWidth="2" 
            className="h-6 absolute inset-y-61 inset-x-84 right-133" 
            onClick={() => handleEdit("Mango Chip")}/>


            <th class="px-6 py-5 border-solid border-t-0">Mango Chip</th>
            <th class="px-6 py-5 border-solid border-t-0">59</th>  
            <th class="px-6 py-5 border-solid border-t-0">Mango Chip</th>
            <th class="px-6 py-5 border-solid border-t-0">59</th>
          </tr>
          <tr>
            <TrashIcon 
              stroke-width="2"  
              class="h-6 absolute inset-y-77 inset-x-96 right-133" 
              onClick={() => handleDelete("Mango Chip")} 
            />
            <PencilSquareIcon 
            strokeWidth="2" 
            className="h-6 absolute inset-y-77 inset-x-84 right-133" 
            onClick={() => handleEdit(true)}/>

            <th class="px-6 py-5 border-solid border-t-0">Mango Chip</th>
            <th class="px-6 py-5 border-solid border-t-0">59</th>
            <th class="px-6 py-5 border-solid border-t-0">Mango Chip</th>
            <th class="px-6 py-5 border-solid border-t-0">59</th>
          </tr>
          <tr>
            <TrashIcon 
              stroke-width="2"  
              class="h-6 absolute inset-y-93 inset-x-96 right-133" 
              onClick={() => handleDelete("Banana Split")} 
            />
            <PencilSquareIcon 
            strokeWidth="2" 
            className="h-6 absolute inset-y-93 inset-x-84 right-133" 
            onClick={() => handleEdit(true)}/>
            

            <th class="px-6 py-5 border-solid border-t-0">Banana Split</th>
            <th class="px-6 py-5 border-solid border-t-0">12</th>
            <th class="px-6 py-5 border-solid border-t-0">Mango Chip</th>
            <th class="px-6 py-5 border-solid border-t-0">59</th>
          </tr>
          <tr>
            <TrashIcon 
              stroke-width="2"  
              class="h-6 absolute inset-y-109 inset-x-96 right-133" 
              onClick={() => handleDelete("Lorem Liquorice")} 
            />
            <PencilSquareIcon 
            strokeWidth="2" 
            className="h-6 absolute inset-y-109 inset-x-84 right-133" 
            onClick={() => handleEdit(true)}/>
            


            <th class="px-6 py-5 border-solid border-t-0">Lorem Liquorice</th>
            <th class="px-6 py-5 border-solid border-t-0">15</th>
            <th class="px-6 py-5 border-solid border-t-0">Mango Chip</th>
            <th class="px-6 py-5 border-solid border-t-0">59</th>
          </tr>
          <tr>
            <TrashIcon 
              stroke-width="2"  
              class="h-6 absolute inset-y-125 inset-x-96 right-133" 
              onClick={() => handleDelete("Ipsum Candy")} 
            />
            <PencilSquareIcon 
            strokeWidth="2" 
            className="h-6 absolute inset-y-125 inset-x-84 right-133" 
            onClick={() => handleEdit(true)}/>

            <th class="px-6 py-5 border-solid border-t-0">Ipsum Candy</th>
            <th class="px-6 py-5 border-solid border-t-0">25</th>
            <th class="px-6 py-5 border-solid border-t-0">Mango Chip</th>
            <th class="px-6 py-5 border-solid border-t-0">59</th>
          </tr>
        </tbody>
      </table>
      </div>
      {showDeleteModal && <DeleteModal onClose={closeEditModal} />} {/* Render the delete modal if editing */}
      {isEditing && <EditItems onClose={closeEditModal} />} {/* Render the edit modal if editing */}
      </>
    )
  }
  
  export default InventoryTable;
