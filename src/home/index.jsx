import React from 'react';

import SidebarMenu from '../common/components/sidebar'; 
import ArtistMenu from '../artistMenu';

class Home extends React.Component {
    render() {
        return (
            <div>
                <SidebarMenu/>
                <ArtistMenu/>
            </div>
        )
    }
}

export default Home