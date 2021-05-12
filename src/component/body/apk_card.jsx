import { useEffect, useState} from "react";
import { ApkList } from "./apk_list";

export const ApkCard = () => {

    const [apks, setApks] = useState([])

    useEffect( () => {
        const getApks = async () => {
            const result = await fetch('http://localhost:5000/api/apk');
            const data = await result.json();
            setApks(data.apks);
        }
        getApks();
    }, [])

    return (
        <div className="card h-100">
            <div className="card-header">
                APK
            </div>
            <div className="card-body overflow-auto">
                { apks.length === 0 ?
                    <img src='nothingness.gif' alt='Nothing to see here' /> :
                    <ApkList apks={apks} />
                }
            </div>
        </div>
    );
}
