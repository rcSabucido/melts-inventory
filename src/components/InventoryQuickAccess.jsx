import { useState } from 'react';
import { createPortal } from "react-dom";

import Cake from "../assets/dessert_icons/cake.png"
import Sweets from "../assets/dessert_icons/jelly.png"
import Drink from "../assets/dessert_icons/juice.png"
import Snack from "../assets/dessert_icons/cookie.png"

import Button from "../components/Button";

const InventoryQuickAccess = ({onBack, productList, categoryList}) => {
    const CategoryButton = ({text, children, onClick, className }) => {
        return <>
            <Button className={`flex flex-col min-w-40 min-h-13.5 text-l ${className}`} isInstant={true} onClick={onClick}>{children} {text}</Button>
        </>;
    }
    const iconClassName = "fill-white w-6 h-6";

    const [categoryId, setCategoryId] = useState(0);

    const categoryIconUrls = [null, Cake, Drink, Sweets, Snack]

    return createPortal(
        <div className="fixed inset-0 flex w-3/4 h-9/10 m-auto border border-gray-300 rounded-xl shadow-xl"> 
            <main className="bg-[#ffffdb] w-full h-full rounded-l-xl overflow-y-auto overflow-x-hidden"> 
                <div className={`bg-[#ffeedd] relative overflow-x-auto rounded-xl m-5`}>
                    <div className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <div className="text-xs text-gray-700 uppercase bg-orange-200/70 min-h-8 content-center">
                        <tr>
                          <th className="px-3">{`${categoryList[categoryId] || "All"} Products`}</th>
                        </tr>
                        </div>
                        <div className="flex flex-row flex-wrap place-content-center pt-3">
                        {
                            Object.keys(productList).map((productName)=> (
                                <Button className="">
                                  <p className="text-l">{productName}</p>
                                </Button>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </main>

            <aside className="h-full sticky top-0 bg-[#FFB64F] min-w-3xs overflow-y-auto overflow-x-hidden rounded-r-xl">
                <div className="flex flex-col h-full p-5 justify-between items-center w-full">
                    <CategoryButton onClick={onBack} text="Back" className="mb-8" />

                    {
                    categoryIconUrls.map((productId, index)=> (
                    <CategoryButton onClick={() => setCategoryId(index)} text={index > 0 ? categoryList[index] : "All"}>
                        { index !== 0 && 
                        <img src={categoryIconUrls[index]} className={iconClassName}/>
                        }
                    </CategoryButton>
                    ))
                }
                </div>
            </aside>
        </div>,
        document.body
    );
}

export default InventoryQuickAccess;