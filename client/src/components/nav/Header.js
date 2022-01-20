import React, { useState } from "react";
import {Menu} from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import "../../App.css"

const {Item,SubMenu,ItemGroup} = Menu

const Header = () => {

    const [current,setCurrent] = useState('')

    const handleClick = () => {

    }

    return(
        <>
        <Menu onClick={handleClick} selectedKeys={current} mode="horizontal" style={{backgroundColor:'black'}} >
            <Item key="mail" icon={<MailOutlined style={{fontSize:'20px',display: 'inline-block', verticalAlign: 'middle'}} />} className="header-custom" >
           
              
               Home
               
                      
                
            </Item>
            <Item key="app" disabled icon={<AppstoreOutlined />} className="me-auto" >
            Navigation Two
            </Item>
            <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
            <ItemGroup title="Item 1">
                <Item key="setting:1">Option 1</Item>
                <Item key="setting:2">Option 2</Item>
            </ItemGroup>
            <ItemGroup title="Item 2">
                <Item key="setting:3">Option 3</Item>
                <Item key="setting:4">Option 4</Item>
            </ItemGroup>
            </SubMenu>
            <Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
            </Item>
      </Menu>
        </>
    )
}

export default Header