import React, { ReactElement } from 'react';
import shinImg from "../../assets/images/shinhan_logo.jpeg";

const home: React.FC = (): ReactElement => {

    return (
        <div>
            <h1>My React and TypeScript App!</h1>
            <img src={`${shinImg}`} alt="" />
        </div>
    )
};

export default home;