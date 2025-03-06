import Sidebar from "../components/Sidebar";
import EmployeeInput from "../components/EmployeeInput";
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
                    <EmployeeInput />
                </main>
            </div>
        </>
    );
}

export default AddEmployee;