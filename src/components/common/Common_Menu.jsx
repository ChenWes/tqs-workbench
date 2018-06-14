import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class Common_Menu extends React.Component {
    render() {
        return (
            <Menu theme="dark" defaultSelectedKeys={['sub1-1']} mode="inline">
                <SubMenu key="sub1" title={<span><Icon type="user" /><span>用户管理</span></span>}
                >
                    <Menu.Item key="sub1-1">用户管理</Menu.Item>
                    <Menu.Item key="sub1-2">权限管理</Menu.Item>
                    <Menu.Item key="sub1-3">权限注销</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="setting" /><span>部位(配置信息)</span></span>}
                >
                    <Menu.Item key="sub2-1">款式检查</Menu.Item>
                    <Menu.Item key="sub2-2">手工检查</Menu.Item>
                    <Menu.Item key="sub2-3">手工检查</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="setting" /><span>疵点(配置信息)</span></span>}
                >
                    <Menu.Item key="sub3-1">款式检查</Menu.Item>
                    <Menu.Item key="sub3-2">手工检查</Menu.Item>
                    <Menu.Item key="sub3-3">手工检查</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>疵点部门(配置信息)</span></span>}
                >
                    <Menu.Item key="sub4-1">款式检查</Menu.Item>
                    <Menu.Item key="sub4-2">手工检查</Menu.Item>
                    <Menu.Item key="sub4-3">手工检查</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title={<span><Icon type="setting" /><span>QA评语(配置信息)</span></span>}
                >
                    <Menu.Item key="sub5-1">款式检查</Menu.Item>
                    <Menu.Item key="sub5-2">手工检查</Menu.Item>
                    <Menu.Item key="sub5-3">手工检查</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}