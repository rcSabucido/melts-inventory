import { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

const QuickAccessRedirect = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        navigate("/transaction_details", {
            state: {
                ...location.state,
            },
        })
    }, [])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className='p-4 flex-col bg-[#ffffdb] w-full'>
                    <p>Adding product to transaction list...</p>
                </div>
            </div>
        </>
    );
}

export default QuickAccessRedirect;