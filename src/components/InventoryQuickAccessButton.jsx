import { createPortal } from "react-dom";
import { ChevronLeftIcon } from '@heroicons/react/20/solid';

import Button from '../components/Button';

const InventoryQuickAccessButton = ({onClick}) => {
    return <>
        <div className="fixed pointer-events-auto right-4 top-1/2 flex rounded-xl justify-center items-center"> 
            <Button disablePadding={true} className="bg-amber-500 py-6 px-0 m-px rounded-lg" onClick={onClick} >
            	<ChevronLeftIcon className="my-7 w-10 h-10 text-black" />
            </Button>
        </div>
    </>;
}

export default InventoryQuickAccessButton;