const SupplierInput = ( {className, formData, setFormData} ) => {
  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value
      });
  };
  
  let addClassName = className
  return (
    <div className={`m-4 p-4 bg-amber-200/30 rounded-xl flex flex-col ${addClassName}`}>
      <div className="m-4">
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
              required
          />
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        <div className="m-4 grow">
            <label className="text-sm font-medium text-gray-700">Contact Number</label>
            <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
                required
            />
        </div>
        <div className="m-4 grow">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
                required
            />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        <div className="m-4 grow">
            <label className="text-sm font-medium text-gray-700">Province</label>
            <input
                type="text"
                name="province"
                value={formData.province}
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
                required
            />
        </div>
        <div className="m-4 grow">
            <label className="text-sm font-medium text-gray-700">City</label>
            <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
                required
            />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        <div className="m-4">
            <label className="text-sm font-medium text-gray-700">District</label>
            <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
                required
            />
        </div>
        <div className="m-4 grow">
            <label className="text-sm font-medium text-gray-700">Barangay</label>
            <input
                type="text"
                name="barangay"
                value={formData.barangay}
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
                required
            />
        </div>
        <div className="m-4 grow">
            <label className="text-sm font-medium text-gray-700">Street</label>
            <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
                required
            />
        </div>
      </div>
    </div>
  );
}

export default SupplierInput;
