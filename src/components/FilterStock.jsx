import Accordion from "./Accordion";

const FilterStock = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 w-64">
            <Accordion title='Columns'>
                <div className="space-y-2">
                    <label className="flex items-center"><input type='checkbox' /> Product</label>
                    <label className="flex items-center"><input type='checkbox' /> Category</label>
                    <label className="flex items-center"><input type='checkbox' /> Added Items</label>
                    <label className="flex items-center"><input type='checkbox' /> Supplier</label>
                    <label className="flex items-center"><input type='checkbox' /> Expiry Date</label>
                </div>
            </Accordion>
            <Accordion title='Added Date'>
                <input type='date' className="w-full border border-gray-300 rounded p-2" />
            </Accordion>
            <Accordion title='Expiry Date'>
                <input type='date' className="w-full border-gray-300 rounded p-2" />
            </Accordion>
        </div>
    );
}

export default FilterStock;