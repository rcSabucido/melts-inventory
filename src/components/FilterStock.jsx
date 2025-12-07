import Accordion from "./Accordion";
import { useState } from "react";

import Button from '../components/Button.jsx';

const FilterStock = ({ onApplyFilters }) => {
    const [addedDate, setAddedDate] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const handleClearAll = () => {
        setAddedDate('');
        setExpiryDate('');
        onApplyFilters(null, null, {});
    }

    const handleApply = (e) => {
        e.preventDefault();
        onApplyFilters(addedDate, expiryDate);
    }
    return (
        <div className="bg-[#FFF2BF] shadow-lg rounded-lg p-4 w-64">
            <Accordion title='Added Date'>
                <input type='date' className="w-full border border-black rounded p-2" value={addedDate} onChange={(e) => setAddedDate(e.target.value)}/>
            </Accordion>
            <Accordion title='Expiry Date'>
                <input type='date' className="w-full border border-black rounded p-2" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
            </Accordion>
            <div className="flex-col justify-center mt-6 space-y-2 w-full">
                        <Button type="button" onClick={handleApply} className="bg-orange-400/70 hover:bg-orange-400/90 text-white p-2 w-full font-bold rounded cursor-pointer">Apply</Button>
                        <Button type="button" className="bg-[#CB3F3F] hover:bg-[#BA3030] text-white p-2 w-full font-bold rounded cursor-pointer" onClick={handleClearAll}>Clear All</Button>

            </div>
        </div>
    );
}

export default FilterStock;