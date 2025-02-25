const Button = ({ children }) => {
    return (
        <button type='button' className="flex justify-center items-center gap-2 text-white bg-orange-400/70 hover:bg-orange-400/90 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            {children}
        </button>
    );
}

export default Button;