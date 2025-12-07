import { useState } from 'react';

const Button = ({ children, className, onClick, type }) => {
    const [ripple, setRipple] = useState(null);

    const clickEvent = async (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        setRipple({ x, y, size });

        setTimeout(() => setRipple(null), 600);
        setTimeout(() => onClick(e), 250);
    }

    return (
        <button type={type} className={`${className} ripple-container flex justify-center items-center gap-2 text-white bg-orange-400/70 hover:bg-orange-400/90 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer`} onClick={clickEvent}>
            {children}
            {ripple && (
                <span
                    className="ripple-effect"
                    style={{
                        width: ripple.size,
                        height: ripple.size,
                        left: ripple.x,
                        top: ripple.y,
                    }}
                />
            )}
        </button>
    );
}

export default Button;
