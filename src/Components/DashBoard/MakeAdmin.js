import React, { useEffect, useState } from 'react';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
    const [makeAdmins, setMakeAdmins] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            // .then(data=>setReviews(data))
            .then(data => setMakeAdmins(data))
    }, [makeAdmins])
    return (
        <div>
         
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            makeAdmins.map(makeAdmin => <MakeAdminRow
                                key={makeAdmin._id}
                                makeAdmin={makeAdmin}
                                
                            ></MakeAdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;