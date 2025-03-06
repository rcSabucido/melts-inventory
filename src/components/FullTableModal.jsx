import RestockTable from "./RestockTable";
import { XMarkIcon } from "@heroicons/react/24/solid";

const FullTableModal = ({columns, data, onClose}) => {
    return (
        <div className="fixed inset-0 bg-gray-800/40 flex justify-center items-center z-50">
            <div className="bg-[#FDEFB2] p-6 rounded-lg w-3/4 h-3/4 overflow-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Full Table View</h2>
                    <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={onClose}/>
                </div>
                <RestockTable columns={columns} data={data} />
            </div>
        </div>
    )
}

export default FullTableModal;