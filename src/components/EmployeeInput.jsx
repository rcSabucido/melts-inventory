const EmployeeInput = () => {
    return (
        <>
            <div className="m-4 p-4 bg-amber-200/30 rounded-xl flex flex-col shadow-[-4px_4px_4px_#888888]">
                <div className="flex flex-wrap justify-between">
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input 
                            type='text'
                            name='firstName'
                            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
                            required
                        />
                    </div>
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                        <input
                            type='text'
                            name='middleName'
                            className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                            required 
                        />
                    </div>
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type='text'
                            name='lastName'
                            className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                            required 
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input 
                            type='text'
                            name='username'
                            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
                            required
                        />
                    </div>
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type='password'
                            name='password'
                            className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                            required 
                        />
                    </div>
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Gender</label>
                        <select className="mt-1 block w-full p-2.5 border border-gray-300 bg-white rounded-md">
                            <option value="male">Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Province</label>
                        <select className="mt-1 block w-full p-2.5 border border-gray-300 bg-white rounded-md">
                            <option value='davao del sur'>Davao Del Sur</option>
                            <option value='davao de oro'>Davao De Oro</option>
                        </select>
                    </div>
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <select className="mt-1 block w-full p-2.5 border border-gray-300 bg-white rounded-md">
                            <option value='davao city'>Davao City</option>
                            <option value='tagum city'>Tagum City</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">District</label>
                        <select className="mt-1 block w-full p-2.5 border border-gray-300 bg-white rounded-md">
                            <option value='first'>1st</option>
                            <option value='second'>2nd</option>
                        </select>
                    </div>
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Barangay</label>
                        <select className="mt-1 block w-full p-2.5 border border-gray-300 bg-white rounded-md">
                            <option value='cabantian'>Cabantian</option>
                            <option value='indangan'>Indangan</option>
                            <option value='nabunturan'>Nabunturan</option>
                        </select>
                    </div>
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Street</label>
                        <input
                            type='text'
                            name='street'
                            className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                            required 
                        />
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default EmployeeInput;