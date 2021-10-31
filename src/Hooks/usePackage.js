import { useEffect, useState } from 'react';

const usePackage = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])
    return [packages]
};

export default usePackage;