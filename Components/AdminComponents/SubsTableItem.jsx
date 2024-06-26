import React from 'react'

const SubsTableItem = ({email, mongoId, deleteEmail, date}) => {

    const emailDate = new Date(date);

    return (
        <tr className='border-b bg-white text-left'>
            <th scope='row' className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                {email ? email : "No Email"}
            </th>
            <td className='hidden px-6 py-4 sm:block'>{emailDate.toDateString()}</td>
            <td className='cursor-pointer px-6 py-4' onClick={() => deleteEmail(mongoId)}>x</td>
        </tr>
    )
}

export default SubsTableItem
