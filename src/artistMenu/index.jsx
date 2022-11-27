import React from 'react';
import { Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

import { SongList } from './style';
import DeleteConfirmation from '../common/components/deleteConfirmation';
import SongForm from '../common/components/songForm';
import { DarkBackground } from '../common/components/style';

class ArtistMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: null,
            loading: true,
            error: null,
            page: 1,
            deleteId: null,
            editSong: null,
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

    deleteSong = (url) => {
        this.setState({deleteId: url});
        document.getElementById("delete-confirmation-background").classList.toggle("show");
        document.getElementById("delete-confirmation-box").classList.toggle("show");
    }

    editSong = (url) => {
        this.setState({editSong: url});
        document.getElementById("insert-song-form").classList.toggle("show");
        document.getElementById("dark-background").classList.toggle("show");
    }

    closeEditSong = () => {
        this.setState({editSong: null});
        document.getElementById("insert-song-form").classList.toggle("show");
        document.getElementById("dark-background").classList.toggle("show");
    }

    render() {
        const { loading, error } = this.state;
        // if (loading) {
        //     return <div>Loading...</div>;
        // } else if (error) {
        //     return <div>{error.message}</div>;
        // } else {
            return (
                <div>
                    <DeleteConfirmation songid={this.state.deleteId}/>
                    <DarkBackground id='dark-background' onClick={this.closeEditSong}/>
                    <SongForm title='Edit Song Details' buttontext='Update Song'/>
                    <div style={{  
                        margin: '50px 100px',
                        marginLeft: '20rem',
                        width: 'auto',
                        }}>
                        <h1>Artist Menu</h1>
                        <h3>Here are songs made by you</h3>
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
                                    <td className='songTitle'>Cukup Siti Khodijah</td>
                                    <td>10/10/2000</td>
                                    <td className="manage">
                                        <p songid={"0"} style={{marginRight:"1rem"}} onClick={(e) => this.editSong(e.target.getAttribute('songid'))}>Edit</p>
                                        <p songid={"0"} onClick={(e) => this.deleteSong(e.target.getAttribute('songid'))}>Delete</p>
                                    </td>
                                </tr>
                            </tbody>
                        </SongList>
                        <Pagination
                            activePage={this.state.page}
                            firstItem={null}
                            lastItem={null}
                            pointing
                            secondary
                            totalPages={10}
                            onPageChange={(e, { activePage }) => this.setState({ page: activePage })}
                        />
                    </div>
                </div>
            );
        // }
    }
}

export default ArtistMenu;