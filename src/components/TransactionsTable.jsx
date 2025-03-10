const TransactionTable = ({ columns, data, className }) => {
  const addClassName = className;
  return (
    <>
      <div className={`relative overflow-x-auto rounded-xl m-5 ${addClassName}`}>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-orange-200/70">
            <tr>
              <th className="px-3">ID</th>
              {columns.map((column, index) => (
                <th key={index} scope="col" className="px-5 py-2">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-amber-100 border-b border-gray-200 text-gray-900">
                <td key="0" className="px-4">{row.id}</td>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-6 py-5">
                    {column === 'Total Price' ? `₱${parseFloat(row[column]).toFixed(2)}` : row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TransactionTable;