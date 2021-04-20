import React, { ReactElement, useEffect } from 'react';
import shinImg from "../assets/images/shinhan_logo.jpeg";
import './index.scss';
import 'normalize.css';

import axios from 'axios';

interface User {
    model?: string;
    pk?: string;
    fields?: UserInfo;
}
interface UserInfo {
    username: string;
    password: string;
    register_date: string;
}

const getUsers = () => {
    axios.get<User[]>("http://localhost:8000/api/user/", {
        headers: {
            "Content-Type": "application/json"
        },
    }).then(response => {
        console.log(response.data);
    });
}



const App: React.FC = (): ReactElement => {

    useEffect(() => {
        getUsers();
        return () => {

        };
    }, []);

    return (
        <div>
            <h1>My React and TypeScript App!</h1>
            <img src={`${shinImg}`} alt="" />
        </div>
    )
};

export default App;