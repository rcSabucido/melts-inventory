import { useEffect} from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
const Scanner = ({ onScanSuccess }) => {
    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5,
        })
        const success = (result) => {
            scanner.clear();
            onScanSuccess(result);
            console.log(result);
        }
    
        const error = (err) => {
            console.warn(err);
        }

        scanner.render(success, error);
    },[onScanSuccess]);

    return (
        <div id='reader' className="w-3/5"></div>
    );


}

export default Scanner;