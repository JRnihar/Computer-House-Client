import { useEffect, useState } from 'react';

const useParts = (ShowPArtsId) => {
    const [service, setService] = useState([]);

    useEffect(() => {
        const url = `https://hidden-waters-77384.herokuapp.com/part/${ShowPArtsId}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [service]);
    return [service,setService]
};

export default useParts;