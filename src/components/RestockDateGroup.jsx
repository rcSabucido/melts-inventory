import RestockTable from "./RestockTable";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/solid";

import { formatDate } from "../Utils"

const RestockDateGroup = ({ date, data, columns, onExpand}) => {
    let displayData = data.map(raw => ({
        'Product': raw["product_name"],
        'Category': raw["category_name"],
        'Added Items': raw["quantity"],
        'Supplier': raw["supplier_name"],
        'Expiry Date': raw["expiration_date"]
      }));
      const limitedData = displayData.slice(0, 4);
      
    return(
        <div className='mx-7 w-auto pb-0.5 bg-amber-200/30 rounded-xl mb-4'>
        <div className='flex justify-between'>
          <p className='px-4 pt-4 text-xl font-bold'>{formatDate(date)}</p>
          {data.length >= 4 && (
            <ArrowsPointingOutIcon 
              className='h-6 w-6 mr-6 mt-4 cursor-pointer' 
              onClick={() => onExpand(date, displayData)}
            />
          )}
        </div>
        <RestockTable columns={columns} data={limitedData} />
      </div>
    );
}

export default RestockDateGroup;