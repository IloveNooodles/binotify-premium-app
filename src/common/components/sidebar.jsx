import React from 'react';
import { connect } from "react-redux";
import { logout } from '../../login/action';

import { MenuBar, MenuBarHeader, MenuBarLinks, UserButton, UserMenu, UserMenuItem } from './style';

class SidebarMenu extends React.Component {
    showUserMenu = () => {
        document.getElementById("user-menu").classList.toggle("show");
        document.getElementById("user-button-arrow").classList.toggle("up");
        document.getElementById("user-button-arrow").classList.toggle("down");
    }

    render() {
        return (
            <MenuBar style={{width: '15rem'}}>
                <MenuBarHeader>Binotify Premium</MenuBarHeader>
                <MenuBarLinks href='#'>Your Songs</MenuBarLinks>
                <MenuBarLinks href='#'>Add Song</MenuBarLinks>
                <UserButton onClick={this.showUserMenu}>
                    <img src="/images/avatar-template.jpeg" alt="user"/>
                    <p>User</p>
                    <i id='user-button-arrow' className="arrow up"></i>
                </UserButton>
                <UserMenu id='user-menu'>
                    <UserMenuItem onClick={this.props.logoutFunction}>Log Out</UserMenuItem>
                </UserMenu>
            </MenuBar>
        )
    }
}

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutFunction: () => dispatch(logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SidebarMenu);