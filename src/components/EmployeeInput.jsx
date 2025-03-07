const EmployeeInput = ({ employeeData, formData, setFormData }) => {
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
                            defaultValue={employeeData?.Name?.split(' ')[0] || ''}
                            required
                        />
                    </div>
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                        <input
                            type='text'
                            name='middleName'
                            className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                            defaultValue={employeeData?.Name?.split(' ')[1] || ''}
                            required 
                        />
                    </div>
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type='text'
                            name='lastName'
                            className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                            defaultValue={employeeData?.Name?.split(' ')[2] || ''}
                            required 
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type='email'
                            name='email'
                            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
                            defaultValue={employeeData?.Email?.split(' ')[0] || ''}
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
                        <select className="mt-1 block w-full p-2.5 border border-gray-300 bg-white rounded-md" defaultValue={employeeData?.Gender || ''}>
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
                <div className="flex items-center gap-2 m-4 grow">
                    <input
                        type="checkbox"
                        name='isAdmin' 
                        className="h-4 w-4 border-gray-300 rounded"
                    />
                    <label className="block text-sm font-medium text-gray-700">Administrator</label>
                </div>
            </div>

            <div className="flex flex-row justify-end mt-10 mr-4">
                <button className="font-bold rounded-lg text-medium text-orange-400/70 hover:text-orange-500 mb-2 px-4">Clear</button>
                <button className="text-white bg-orange-400/70 hover:bg-orange-400/90 font-bold rounded-lg text-medium px-5 py-2.5 me-2 mb-2">Save</button>
            </div>
        </>
        
    );
}

export default EmployeeInput;