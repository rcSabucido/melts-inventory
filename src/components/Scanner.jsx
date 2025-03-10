import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
const Scanner = () => {
    const [scanResult, setScanResult] = useState(null);

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
            setScanResult(result);
            console.log(result);
        }
    
        const error = (err) => {
            console.warn(err);
        }

        scanner.render(success, error);
    },[]);

    return (
        <>
            {scanResult
                ? <div>Success: {scanResult}</div>
                : <div id='reader' className="w-1/2"></div>
            }
        </>
    );


}

export default Scanner;