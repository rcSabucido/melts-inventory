const RestockTable = ({ columns, data }) => {
    const formatDate = (datestr) => {
      if (datestr === null || datestr === undefined || datestr == "") {
        return ""
      }
      const pad = (num, size) => {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
      }

      let date = new Date(datestr)
      return `${pad(date.getMonth() + 1, 2)}-${pad(date.getDate(), 2)}-${date.getFullYear()}`
    }

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
                  <td key={colIndex} className="px-6 py-4">{
                    colIndex == 4 ? formatDate(row[column]) : row[column]
                  }</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default RestockTable;