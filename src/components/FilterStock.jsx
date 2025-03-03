import Accordion from "./Accordion";
import { useState } from "react";

const FilterStock = () => {
    const [columns, setColumns] = useState({
        product: false,
        category: false,
        addedItems: false,
        supplier: false,
        expiryDate: false,
    });
    const [addedDate, setAddedDate] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const handleClearAll = () => {
        setColumns({
            product: false,
            category: false,
            addedItems: false,
            supplier: false,
            expiryDate: false,
        });
        setAddedDate('');
        setExpiryDate('');
    }
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 w-64">
            <Accordion title='Columns'>
                <div className="space-y-2">
                    <label className="flex items-center gap-2">
                        <input type='checkbox' checked={columns.product} onChange={() => setColumns({...columns, product: !columns.product})} /> Product
                    </label>
                    <label className="flex items-center gap-2">
                        <input type='checkbox' checked={columns.category} onChange={() => setColumns({...columns, category: !columns.category})} /> Category
                    </label>
                    <label className="flex items-center gap-2">
                        <input type='checkbox' checked={columns.addedItems} onChange={() => setColumns({...columns, addedItems: !columns.addedItems})} /> Added Items
                    </label>
                    <label className="flex items-center gap-2">
                        <input type='checkbox' checked={columns.supplier} onChange={() => setColumns({...columns, supplier: !columns.supplier})} /> Supplier
                    </label>
                    <label className="flex items-center gap-2">
                        <input type='checkbox' checked={columns.expiryDate} onChange={() => setColumns({...columns, expiryDate: !columns.expiryDate})} /> Expiry Date
                    </label>
                </div>
            </Accordion>
            <Accordion title='Added Date'>
                <input type='date' className="w-full border border-gray-300 rounded p-2" value={addedDate} onChange={(e) => setAddedDate(e.target.value)}/>
            </Accordion>
            <Accordion title='Expiry Date'>
                <input type='date' className="w-full border-gray-300 rounded p-2" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
            </Accordion>
            <div className="flex-col justify-center mt-6 space-y-2 w-full">
                        <button type="submit" className="bg-orange-400/70 hover:bg-orange-400/90 text-white p-2 w-full font-bold rounded">Apply</button>
                        <button type="button" className="bg-[#CB3F3F] hover:bg-[#BA3030] text-white p-2 w-full  font-bold rounded" onClick={handleClearAll}>Clear All</button>

            </div>
        </div>
    );
}

export default FilterStock;