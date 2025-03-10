const NearExpiry  = () => {
    return (
      <div className="border-solid border-orange-400/40 border-2 rounded-md w-full">
      <table className="w-full text-sm text-left rtl:text-right text-black">
        <thead className="text-xs text-gray-700 uppercase bg-[#ffe1b7]">
          <tr>
            <th className="px-6 py-3">Product</th>
            <th className="px-6 py-3">Items</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Days Left</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">Mango Chip</td>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">59</td>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">Mango Chip</td>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">59</td>
          </tr>
          <tr>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">Mango Chip</td>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">59</td>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">Mango Chip</td>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">59</td>
          </tr>
          <tr>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">Banana Split</td>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">12</td>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">Mango Chip</td>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">59</td>
          </tr>
          <tr>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">Lorem Liquorice</td>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">15</td>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">Mango Chip</td>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">59</td>
          </tr>
          <tr>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">Ipsum Candy</td>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">25</td>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">Mango Chip</td>
            <td className="px-6 py-5 border-solid border-gray-400/20 border-t-2">59</td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
  
  export default NearExpiry;
