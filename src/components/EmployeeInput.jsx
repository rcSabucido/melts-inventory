const EmployeeInput = ({formData, setFormData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(name);
        console.log(value);
    }

    const clearForm = () => {
        document.querySelectorAll('input').forEach(e => {
            e.value = ""
        });
        
        setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            password: '',
            gender: '',
            province: '',
            city: '',
            district: '',
            barangay: '',
            street: '',
            isAdmin: false
        })
    }

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
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                        <input
                            type='text'
                            name='middleName'
                            className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                            value={formData.middleName}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type='text'
                            name='lastName'
                            className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                            value={formData.lastName}
                            onChange={handleChange}
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
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type='password'
                            name='password'
                            className='mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md'
                            value={formData.password}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Gender</label>
                        <select className="mt-1 block w-full p-2.5 border border-gray-300 bg-white rounded-md" name='gender' value={formData.gender} onChange={handleChange}>
                            <option value="male">Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Province</label>
                        <select className="mt-1 block w-full p-2.5 border border-gray-300 bg-white rounded-md" name='province' value={formData.province} onChange={handleChange}>
                            <option value='davao del sur'>Davao Del Sur</option>
                            <option value='davao de oro'>Davao De Oro</option>
                        </select>
                    </div>
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <select className="mt-1 block w-full p-2.5 border border-gray-300 bg-white rounded-md" name='city' value={formData.city} onChange={handleChange}>
                            <option value='davao city'>Davao City</option>
                            <option value='tagum city'>Tagum City</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">District</label>
                        <select className="mt-1 block w-full p-2.5 border border-gray-300 bg-white rounded-md" name='district' value={formData.district} onChange={handleChange}>
                            <option value='first'>1st</option>
                            <option value='second'>2nd</option>
                        </select>
                    </div>
                    <div className="m-4 grow">
                        <label className="block text-sm font-medium text-gray-700">Barangay</label>
                        <select className="mt-1 block w-full p-2.5 border border-gray-300 bg-white rounded-md" name='barangay' value={formData.barangay} onChange={handleChange}>
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
                            value={formData.street}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2 m-4 grow">
                    <input
                        type="checkbox"
                        name='isAdmin' 
                        checked={formData.isAdmin}
                        onChange={(e) => setFormData({...formData, isAdmin: e.target.checked})}
                        className="h-4 w-4 border-gray-300 rounded"
                    />
                    <label className="block text-sm font-medium text-gray-700">Administrator</label>
                </div>
            </div>

            <div className="flex flex-row justify-end mt-10 mr-4">
                <button type='button' onClick={clearForm} className="font-bold rounded-lg text-medium text-orange-400/70 hover:text-orange-500 mb-2 px-4">Clear</button>
                <button type='submit' className="text-white bg-orange-400/70 hover:bg-orange-400/90 font-bold rounded-lg text-medium px-5 py-2.5 me-2 mb-2">Save</button>
            </div>
        </>
        
    );
}

export default EmployeeInput;