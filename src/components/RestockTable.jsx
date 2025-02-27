const RestockTable = ({ columns, data }) => {
    return (
      <div className="relative overflow-x-auto rounded-xl m-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-orange-200/70">
            <tr>
              {columns.map((column, index) => (
                <th key={index} scope="col" className="px-6 py-3">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-amber-100 border-b border-gray-200 text-gray-900">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-6 py-4">{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default RestockTable;