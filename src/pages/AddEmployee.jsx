import Sidebar from "../components/Sidebar";
import EmployeeInput from "../components/EmployeeInput";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const AddEmployee = () => {
    const location = useLocation();
    const [employeeData, setEmployeeData] = useState(location.state?.employeeData || {});

    useEffect(() => {
        if (location.state?.employeeData) {
            setEmployeeData(location.state.employeeData);
        }
    }, [location.state]);

    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="p-4 flex-col bg-[#ffffdb] w-full">
                    <div className="flex gap-4 p-4 items-center">
                        <ArrowLeftIcon className="h-6 w-6" />
                        <p className="text-2xl font-bold">Employee Details</p>
                    </div>
                    <EmployeeInput employeeData={employeeData} />
                </main>
            </div>
        </>
    );
}

export default AddEmployee;