import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
    return (
    <div className="flex justify-center min-w-7/10 absolute left-72">
        <input
        className=" h-11 w-full bg-orange-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Search a product" 
        />
        <button
        className="h-9 absolute top-1 right-1 flex items-center rounded bg-orange-400 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-orange-400  focus:shadow-none active:hover:bg-orange-400/90 hover:hover:bg-orange-400/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        >
        <MagnifyingGlassIcon className="w-4 h-4 mr-2" />
        Search
        </button> 
        </div>
    );
}

export default SearchBar;