import Accordion from "./Accordion";

const FilterStock = () => {
    return (
        <div className="">
            <Accordion title='Columns'>
                <div>
                    <label><input type='checkbox' /> Product</label>
                    <label><input type='checkbox' /> Category</label>
                    <label><input type='checkbox' /> Added Items</label>
                    <label><input type='checkbox' /> Supplier</label>
                    <label><input type='checkbox' /> Expiry Date</label>
                </div>
            </Accordion>
            <Accordion title='Added Date'>
                <input type='date' />
            </Accordion>
            <Accordion title='Expiry Date'>
                <input type='date' />
            </Accordion>
        </div>
    );
}

export default FilterStock;