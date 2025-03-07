import { useState } from "react";
import { DocumentArrowDownIcon } from '@heroicons/react/24/solid';
import DownloadModal from './DownloadModal';

const TransactionTable = ({ columns, data, className }) => {
  const addClassName = className;
  const [showDownload, setShowDownload] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDownload = (product) => {
    setSelectedProduct(product);
    setShowDownload(true);
  };

  const closeDownloadModal = () => {
    setShowDownload(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className={`relative overflow-x-auto rounded-xl m-5 ${addClassName}`}>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-orange-200/70">
            <tr>
              <th className="px-3">ID</th>
              <th className="px-3"></th>
              {columns.map((column, index) => (
                <th key={index} scope="col" className="px-5 py-2">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-amber-100 border-b border-gray-200 text-gray-900">
                <td key="0" className="px-4">{row.id}</td>
                <td key="0" onClick={() => handleDownload(row)} className="text-orange-400/70 h-4 
                w-5"><DocumentArrowDownIcon /></td>
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
      {showDownload && <DownloadModal onClose={closeDownloadModal} product={selectedProduct} />}
    </>
  )
}

export default TransactionTable;