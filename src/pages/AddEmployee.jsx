import Sidebar from "../components/Sidebar";
import EmployeeInput from "../components/EmployeeInput";
import ConfirmationModal from "../components/ConfirmationModal";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
    const location = useLocation();
    const navigate = useNavigate();
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
        street: '',
        isAdmin: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/employee');
    }
    
    useEffect(() => {
        if (location.state?.employeeData) {
            const { Name, Gender, Email } = location.state.employeeData;
            const [firstName, middleName, lastName] = Name.split(' ');
            setFormData({
                firstName,
                middleName,
                lastName,
                email: Email,
                password: '',
                gender: Gender,
                province: '',
                city: '',
                district: '',
                barangay: '',
                street: '',
                isAdmin: false
            });
        }
    }, [location.state]);

    return (
        <>
            <div className="flex">
                <Sidebar />
                <form className="p-4 flex-col bg-[#ffffdb] w-full" onSubmit={handleSubmit}>
                    <div className="flex gap-4 p-4 items-center">
                        <ArrowLeftIcon className="h-6 w-6" onClick={() => setLeaveModal(true)}/>
                        <p className="text-2xl font-bold">Employee Details</p>
                    </div>
                    <EmployeeInput formData={formData} setFormData={setFormData}/>
                </form>
            </div>
            {leaveModal && (
                <ConfirmationModal
                    noButton='Cancel'
                    yesButton='Leave'
                    message='You have unsaved changes. Are you sure you want to leave this page?' 
                    onYes={() => navigate('/employee')}
                    onNo={() => setLeaveModal(false)}
                />
            )}
        </>
    );
}

export default AddEmployee;