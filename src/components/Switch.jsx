const Switch = ({ children, onChange, checked }) => {
    const handleSwitchChange = (e) => {
        onChange(e.target.checked);
    }
    return (
        <>
           <label className="group w-1/10 py-2.5 h-full bg-gray-200 relative rounded-md select-none cursor-pointer flex items-center">
            <input type='checkbox' className="peer appearance-none hidden" onChange={handleSwitchChange} checked={checked}/>
            <div className="w-1/2 h-full bg-orange-400/70 rounded-md transition-all shadow-orange-400/30 absolute left-0 group-hover:shadow-xl peer-checked:left-1/2"></div>
            {children.map((child, index) => (
                <span
                    key={index}
                    className={`transition relative w-1/2 h-full flex items-center justify-center font-bold ${
                        index === 0 ? 'text-white peer-checked:text-black' : 'text-black peer-checked:text-white'
                    }`}
                >
                    {child}
                </span>
            ))}
        </label>
        </>
    );
}

export default Switch;