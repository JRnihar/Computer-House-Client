import React, { useEffect, useState } from 'react';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
    const [makeAdmins, setMakeAdmins] = useState([])
    useEffect(() => {
        fetch('https://hidden-waters-77384.herokuapp.com/user')
            .then(res => res.json())
            // .then(data=>setReviews(data))
            .then(data => setMakeAdmins(data))
    }, [makeAdmins])
    return (
        <div>
         
            <div class="overflow-x-auto px-12 mt-6 ">
                <table class="table md:table-fixed  w-full">
                    <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
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