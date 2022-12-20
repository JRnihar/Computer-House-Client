import { useEffect, useState } from 'react';

const useParts = (ShowPArtsId) => {
    const [service, setService] = useState([]);

    useEffect(() => {
        const url = `https://final-project-7jsd.onrender.com/part/${ShowPArtsId}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [service]);
    return [service,setService]
};

export default useParts;