import { createPortal } from "react-dom";

const InventoryQuickAccess = () => {
    return createPortal(
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800/40"> 
            <div className="bg-amber-100 p-6 rounded-lg w-1/4">
            	<p>Test</p>
            </div>
        </div>,
        document.body
    );
}

export default InventoryQuickAccess;