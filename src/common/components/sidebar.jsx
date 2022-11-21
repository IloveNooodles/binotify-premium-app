import React from 'react';

import { MenuBar, MenuBarHeader, MenuBarLinks, UserButton } from './style';

class SidebarMenu extends React.Component {
    render() {
        return (
            <MenuBar style={{width: '15rem'}}>
                <MenuBarHeader>Binotify Premium</MenuBarHeader>
                <MenuBarLinks href='#'>Your Songs</MenuBarLinks>
                <MenuBarLinks href='#'>Add Song</MenuBarLinks>
                <UserButton>
                    <img class="profile-img" src="/images/avatar-template.jpeg" alt="user"/>
                    <p>User</p>
                    <i class="arrow up"></i>
                </UserButton>
            </MenuBar>
        )
    }
}

export default SidebarMenu;