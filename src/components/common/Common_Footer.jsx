import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export default class Common_Footer extends React.Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                Esquel Group TQS Project
            </Footer>
        )
    }
}