import { useEffect, useState } from 'react';

const usePackage = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch('https://howling-monster-36925.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])
    return [packages]
};

export default usePackage;