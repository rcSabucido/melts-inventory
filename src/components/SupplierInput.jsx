import Button from '../components/Button.jsx';

const SupplierInput = ( {className} ) => {
  let addClassName = className
  return (
    <form className={`m-4 p-4 bg-amber-200/30 rounded-xl flex flex-col ${addClassName}`}>
      <div className="m-4">
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
              type="text"
              name="companyName"
              className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
              required
          />
      </div>
      <div className="flex-row flex-wrap justify-between">
        <div className="m-4 grow">
            <label className="text-sm font-medium text-gray-700">Contact Number</label>
            <input
                type="text"
                name="contactNumber"
                className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
                required
            />
        </div>
        <div className="m-4 grow">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
                type="text"
                name="email"
                className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
                required
            />
        </div>
      </div>
      <div className="flex-row flex-wrap justify-between">
        <div className="m-4 grow">
            <label className="text-sm font-medium text-gray-700">Province</label>
            <input
                type="text"
                name="province"
                className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
                required
            />
        </div>
        <div className="m-4 grow">
            <label className="text-sm font-medium text-gray-700">City</label>
            <input
                type="text"
                name="city"
                className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
                required
            />
        </div>
      </div>
      <div className="flex-row flex-wrap justify-between">
        <div className="m-4">
            <label className="text-sm font-medium text-gray-700">District</label>
            <input
                type="text"
                name="district"
                className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
                required
            />
        </div>
        <div className="m-4 grow">
            <label className="text-sm font-medium text-gray-700">Barangay</label>
            <input
                type="text"
                name="barangay"
                className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
                required
            />
        </div>
        <div className="m-4 grow">
            <label className="text-sm font-medium text-gray-700">Street</label>
            <input
                type="text"
                name="street"
                className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
                required
            />
        </div>
      </div>

      <div className="flex-row justify-end">
        <Button>
            Clear
        </Button>
        <button className="font-bold rounded-lg text-sm text-orange-400/70 mb-2 px-4">
            Save
        </button>
      </div>
    </form>
  );
}

export default SupplierInput;
