import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <h3>登录页内容</h3>
                <Link to="/home">go to home page</Link>
                <br />
                <Link to="/other">go to other page</Link>                
            </div>
        )
    }
}