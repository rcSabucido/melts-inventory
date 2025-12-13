import { createPortal } from "react-dom";

import Button from "../components/Button";

const InventoryQuickAccess = () => {
    return createPortal(
        <div className="fixed inset-0 flex w-3/4 h-7/8 m-auto border border-gray-300 rounded-xl shadow-xl"> 
            <main className="bg-[#ffffdb] w-full h-full rounded-l-xl">
                
            </main>

            <aside className="h-full sticky top-0 bg-[#FFB64F] min-w-3xs overflow-y-auto overflow-x-hidden rounded-r-xl">
                <div className="flex flex-col h-full p-10 justify-between items-center w-full">
                    <Button className="">ALL</Button>
                    <Button>Cake</Button>
                    <Button>Drinks</Button>
                    <Button>Sweets</Button>
                    <Button>Snacks</Button>
                    <Button>Back</Button>
                </div>
            </aside>
        </div>,
        document.body
    );
}

export default InventoryQuickAccess;