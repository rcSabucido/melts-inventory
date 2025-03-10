const NearExpiry = ({ columns, data }) => {

  
    return (
      <div className="border-solid border-orange-400/40 border-2 rounded-md w-full">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-[#ffe1b7]">
            <tr>
              {columns.map((column, index) => (
                <th key={index} scope="col" className="px-6 py-2">{column}</th>
              ))}
            </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (  
            <tr key={rowIndex} className="bg-[#fff2bf] border-b border-gray-200 text-gray-900">
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="px-6 py-5">{row[column]}</td>
            ))}
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}
  
export default NearExpiry;
