import { createPortal } from "react-dom";

import Cake from "../assets/dessert_icons/cake.png"
import Jelly from "../assets/dessert_icons/jelly.png"
import Juice from "../assets/dessert_icons/juice.png"
import Cookie from "../assets/dessert_icons/cookie.png"

import Button from "../components/Button";

const InventoryQuickAccess = ({onBack}) => {
    const CategoryButton = ({text, children, onClick, className }) => {
        return <>
            <Button className={`flex flex-col min-w-40 min-h-18 text-l ${className}`} isInstant={true} onClick={onClick}>{children} {text}</Button>
        </>;
    }
    const iconClassName = "fill-white w-7.5";

    return createPortal(
        <div className="fixed inset-0 flex w-3/4 h-9/10 m-auto border border-gray-300 rounded-xl shadow-xl"> 
            <main className="bg-[#ffffdb] w-full h-full rounded-l-xl">
                
            </main>

            <aside className="h-full sticky top-0 bg-[#FFB64F] min-w-3xs overflow-y-auto overflow-x-hidden rounded-r-xl">
                <div className="flex flex-col h-full p-10 justify-between items-center w-full">
                    <CategoryButton onClick={onBack} text="Back" className="mb-8" />
                    <CategoryButton text="All" />
                    <CategoryButton text="Cake">
                        <img src={Cake} className={iconClassName}/>
                    </CategoryButton>
                    <CategoryButton text="Drinks">
                        <img src={Juice} className={iconClassName}/>
                    </CategoryButton>
                    <CategoryButton text="Sweets">
                        <img src={Jelly} className={iconClassName}/>
                    </CategoryButton>
                    <CategoryButton text="Snacks">
                        <img src={Cookie} className={iconClassName}/>
                    </CategoryButton>
                </div>
            </aside>
        </div>,
        document.body
    );
}

export default InventoryQuickAccess;