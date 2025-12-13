import { createPortal } from "react-dom";
import { ChevronLeftIcon } from '@heroicons/react/20/solid';

const InventoryQuickAccessButton = () => {
    return <>
        <div className="fixed pointer-events-none right-4 top-1/2 flex rounded-xl justify-center items-center"> 
            <div className="bg-amber-500 py-6 px-0 m-px rounded-lg">
            	<ChevronLeftIcon className="my-7 w-10 h-10" />
            </div>
        </div>,
    </>;
}

export default InventoryQuickAccessButton;