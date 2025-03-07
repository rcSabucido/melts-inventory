import Sidebar from "../components/Sidebar";
import EmployeeInput from "../components/EmployeeInput";
import ConfirmationModal from "../components/ConfirmationModal";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";
import { useEffect, useState, navigate } from "react";

const AddEmployee = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [employeeData, setEmployeeData] = useState(location.state?.employeeData || {});
    const [leaveModal, setLeaveModal] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        password: '',
        gender: '',
        province: '',
        city: '',
        district: '',
        barangay: '',
        street: ''
    }) 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/employee');
    }
    const clearForm = () => {
        document.querySelectorAll('input').forEach(e => {
            e.value = ""
        });

        setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            password: '',
            gender: '',
            province: '',
            city: '',
            district: '',
            barangay: '',
            street: ''
        })
    }

    useEffect(() => {
        if (location.state?.employeeData) {
            setEmployeeData(location.state.employeeData);
        }
    }, [location.state]);

    return (
        <>
            <div className="flex">
                <Sidebar />
                <form className="p-4 flex-col bg-[#ffffdb] w-full" onSubmit={handleSubmit}>
                    <div className="flex gap-4 p-4 items-center">
                        <ArrowLeftIcon className="h-6 w-6" />
                        <p className="text-2xl font-bold">Employee Details</p>
                    </div>
                    <EmployeeInput employeeData={employeeData} />
                </form>
            </div>
        </>
    );
}

export default AddEmployee;