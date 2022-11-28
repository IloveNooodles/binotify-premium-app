import React from 'react';
import { connect } from "react-redux";
import { getUser, logout } from '../auth/action';

import { MenuBar, MenuBarHeader, MenuBarLinks, UserButton, UserMenu, UserMenuItem } from './style';

class SidebarMenu extends React.Component {
    showUserMenu = () => {
        document.getElementById("user-menu").classList.toggle("show");
        document.getElementById("user-button-arrow").classList.toggle("up");
        document.getElementById("user-button-arrow").classList.toggle("down");
    }

    componentDidMount() {
        if (this.props.user !== null && this.props.user.isAdmin === false) {
            if (window.location.pathname === "/") {
                document.getElementById("home-link").classList.add("active");
                document.getElementById("home-link").style.pointerEvents = "none";
            }
            else if (window.location.pathname === "/addsong") {
                document.getElementById("addsong-link").classList.add("active");
                document.getElementById("addsong-link").style.pointerEvents = "none";
            }
        } else if (this.props.user !== null && this.props.user.isAdmin === true) {
            if (window.location.pathname === "/") {
                document.getElementById("home-link").classList.add("active");
                document.getElementById("home-link").style.pointerEvents = "none";
            }
        }
    }

    render() {
        if (this.props.user !== null && this.props.user.isAdmin === false) {
            return (
                <MenuBar style={{width: '15rem'}}>
                    <MenuBarHeader>Binotify Premium</MenuBarHeader>
                    <MenuBarLinks id='home-link' href='/'>Your Songs</MenuBarLinks>
                    <MenuBarLinks disabled id='addsong-link' href='/addsong'>Add Song</MenuBarLinks>
                    <UserButton onClick={this.showUserMenu}>
                        <img src="/images/avatar-template.jpeg" alt="user"/>
                        <p>{this.props.user.username}</p>
                        <i id='user-button-arrow' className="arrow up"></i>
                    </UserButton>
                    <UserMenu id='user-menu'>
                        <UserMenuItem onClick={this.props.logoutFunction}>Log Out</UserMenuItem>
                    </UserMenu>
                </MenuBar>
            )
        } else if (this.props.user !== null && this.props.user.isAdmin === true) {
            return (
                <MenuBar style={{width: '15rem'}}>
                    <MenuBarHeader>Binotify Premium</MenuBarHeader>
                    <MenuBarLinks id='home-link' href='/'>Subscription Requests</MenuBarLinks>
                    <UserButton onClick={this.showUserMenu}>
                        <img src="/images/avatar-template.jpeg" alt="user"/>
                        <p>{this.props.user.username}</p>
                        <i id='user-button-arrow' className="arrow up"></i>
                    </UserButton>
                    <UserMenu id='user-menu'>
                        <UserMenuItem onClick={this.props.logoutFunction}>Log Out</UserMenuItem>
                    </UserMenu>
                </MenuBar>
            )
        }
    }
}

const mapStateToProps = (state) => {
	return {
        user: state.auth.user
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutFunction: () => dispatch(logout()),
        getUserFunction: () => dispatch(getUser())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SidebarMenu);