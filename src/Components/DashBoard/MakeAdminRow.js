import React from 'react';

const MakeAdminRow = ({makeAdmin}) => {
    const { email ,role ,index} = makeAdmin;
    const makeAdmins=()=>{
        // const url = `https://hidden-waters-77384.herokuapp.com/user/admin/${email}`
        fetch(`https://hidden-waters-77384.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            // body: JSON.stringify(makeAdmin),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    }
    return (
   
            <tr>
                
                <td>{email}</td>
            <td> {role !== 'admin' && <button onClick={makeAdmins} class="btn btn-xs">Make Admin</button>}</td>
                
            </tr>
        
    );
};

export default MakeAdminRow;