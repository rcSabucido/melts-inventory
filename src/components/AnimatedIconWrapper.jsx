import React, { useState } from 'react';

const AnimatedIconWrapper = ({ className, size, onClick, children }) => {
    const [ripple, setRipple] = useState(null);
    const child = React.Children.only(children);

    const clickEvent = async (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        setRipple({ x, y, size });

        setTimeout(() => setRipple(null), 600);
        setTimeout(() => onClick(e), 250);

        console.log("Icon click!");
    }

    const icon = React.cloneElement(child, {
        ...child.props,
        className: `${child.props.className ?? ""}`,
    });

    return (
        <>
        <button className={`ripple-container w-${size} h-${size}`} onClick={clickEvent}>
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
            {icon}
        </button>
        </>
    );
}

export default AnimatedIconWrapper;