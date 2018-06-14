import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
// import HomeStyle from './css/Home.less';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import Common_Breadcrumb from './common/Common_Breadcrumb';
import Common_Menu from './common/Common_Menu';
import Common_Footer from './common/Common_Footer';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }
    _onCollapse(collapsed) {
        this.setState({
            collapsed: collapsed
        })
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={(isCollapsed) => this._onCollapse(isCollapsed)}
                >
                    <Common_Menu />
                </Sider>
                <Layout>
                    <Content style={{ margin: '0 16px' }}>
                        <Common_Breadcrumb />
                        <div style={{ padding: 24, background: '#fff', minHeight: 700 }}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Common_Footer />
                </Layout>
            </Layout>
        )
    }
}