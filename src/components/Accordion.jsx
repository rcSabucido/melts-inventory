import { useState } from 'react';
const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='border-b border-gray-200'>
            <div className='flex justify-between items-center p-4 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <h3 className='font-semibold'>{title}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className=''>{children}</div>}
        </div>
    );
}

export default Accordion;