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
                    
                </div>
            </div>
        </>
        
    );
}

export default EmployeeInput;