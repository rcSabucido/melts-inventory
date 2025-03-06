import Sidebar from "../components/Sidebar";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const AddEmployee = () => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="p-4 flex-col bg-[#ffffdb] w-full">
                    <div className="flex gap-4 p-4 items-center">
                        <ArrowLeftIcon className="h-6 w-6" />
                        <p className="text-2xl font-bold">Employee Details</p>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <div className="bg-amber-100 flex flex-col p-5 rounded-lg w-5/6">
                            <form>
                                <div className="flex gap-4">
                                    <label>First Name</label>
                                    <input type="text" name="firstName" className="mt-1 block w-full p-2 border-gray-300 bg-white rounded"/>
                                    <label>Last Name</label>
                                    
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    
                </main>
            </div>
        </>
    );
}

export default AddEmployee;