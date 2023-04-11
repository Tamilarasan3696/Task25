import React, { useState } from 'react';

let UserContext = React.createContext();

export default UserContext;

const INITIAL_USERS = [
    {
        userName: "Person 1",
        position: "Senior Architect",
        office: 'Las Vegas',
        age: 28,
        startDate: '2020-04-03',
        salary: '280000'
    },
    {
        userName: "Person 2",
        position: "Senior Accountant",
        office: 'Cuba',
        age: 30,
        startDate: '2020-06-03',
        salary: '250000'
    },
    {
        userName: "Tamilarasan",
        position: "Senior Accountant",
        office: 'Cuba',
        age: 30,
        startDate: '2020-06-03',
        salary: '250000'
    },
    {
        userName: "Vaishuraj",
        position: "Senior Accountant",
        office: 'Cuba',
        age: 30,
        startDate: '2020-06-03',
        salary: '300000'
    }
]

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(INITIAL_USERS)
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}