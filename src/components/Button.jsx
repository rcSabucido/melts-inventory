const Button = ({ children }) => {
    return (
        <button type='button' className="text-white bg-orange-400/70 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            {children}
        </button>
    );
}

export default Button;