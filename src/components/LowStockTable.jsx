
const LowStockTable = () => {
  return (
    <div className="border border-solid border-orange-400/40 border-2 rounded-md w-full">
    <table className="text-left rtl:text-right w-full">
      <thead className="text-gray-600 bg-orange-300/30">
        <tr>
          <th className="px-6 py-3">
            Product
          </th>
          <th className="px-6 py-3">
            Items
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="px-6 py-5 border-solid border-orange-400/40 border-t-2">Durian Candy</th>
          <th className="px-6 py-5 border-solid border-orange-400/40 border-t-2">10</th>
        </tr>
        <tr>
          <th className="px-6 py-5 border-solid border-gray-400/20 border-t-2">Mango Chip</th>
          <th className="px-6 py-5 border-solid border-gray-400/20 border-t-2">59</th>
        </tr>
        <tr>
          <th className="px-6 py-5 border-solid border-gray-400/20 border-t-2">Banana Split</th>
          <th className="px-6 py-5 border-solid border-gray-400/20 border-t-2">12</th>
        </tr>
        <tr>
          <th className="px-6 py-5 border-solid border-gray-400/20 border-t-2">Lorem Liquorice</th>
          <th className="px-6 py-5 border-solid border-gray-400/20 border-t-2">15</th>
        </tr>
        <tr>
          <th className="px-6 py-5 border-solid border-gray-400/20 border-t-2">Ipsum Candy</th>
          <th className="px-6 py-5 border-solid border-gray-400/20 border-t-2">25</th>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default LowStockTable;
