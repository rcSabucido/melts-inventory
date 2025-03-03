import { useState } from 'react';
const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=''>
            <div className='' onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className=''>{children}</div>}
        </div>
    );
}

export default Accordion;