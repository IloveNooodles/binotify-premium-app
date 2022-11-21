import React from 'react';

import { SongList } from './style';
import SidebarMenu from '../common/components/sidebar';

class ArtistMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: null,
            loading: true,
            error: null,
        };
    }

    // componentDidMount() {
    //     this.fetchArtist();
    // }

    // componentDidUpdate(prevProps) {
    //     if (this.props.artistId !== prevProps.artistId) {
    //     this.fetchArtist();
    //     }
    // }

    // fetchArtist() {
    //     this.setState({ loading: true });
    //     fetch(`/api/artists/${this.props.artistId}`)
    //     .then(response => response.json())
    //     .then(artist => this.setState({ artist, loading: false }))
    //     .catch(error => this.setState({ error, loading: false }));
    // }

    render() {
        const { loading, error } = this.state;
        // if (loading) {
        //     return <div>Loading...</div>;
        // } else if (error) {
        //     return <div>{error.message}</div>;
        // } else {
            return (
                <div>
                    <div style={{  
                        margin: '50px 100px',
                        marginLeft: '20rem',
                        }}>
                        <SongList>
                            <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>TITLE</th>
                                    <th>RELEASED</th>
                                    <th>MANAGE</th>
                                </tr>
                                <tr className="content" name="$id">
                                    <td>1</td>
                                    <td>Cukup Siti Khodijah</td>
                                    <td>10/10/2000</td>
                                    <td name="/album/delete_song?song_id=$id" className="remove-song-from-album-button">
                                        Edit
                                        Delete
                                    </td>
                                </tr>
                            </tbody>
                        </SongList>
                    </div>
                </div>
            );
        // }
    }
}

export default ArtistMenu;