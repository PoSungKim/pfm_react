import { Router, Route, Switch, Redirect } from "react-router-dom";
import React, { ReactElement, useEffect } from 'react';

import axios from 'axios';
import AppRouter from "../utils/routers/AppRouter";

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
    axios<User[]>("http://localhost:8080/api/user/1", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json;charset=UTF-8;"
        },
    }).then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });
}

interface User2 {
    value?: string;
}

const getUsers2 = async () => {
    let response = await fetch<User2[]>("http://localhost:8080/api/user/", {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            value: "value"
        })
    });

    let jsonData = await response.json();
    console.log(jsonData)
};



const App: React.FC = (): ReactElement => {

    useEffect(() => {
        getUsers();
        getUsers2();
        return () => {

        };
    }, []);

    return (
        <AppRouter />
    )
};

export default App;