import React from 'react';
import { Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux';

import { SongList } from './style';
import ConfirmationModal from '../common/components/deleteConfirmation';
import SongForm from '../common/components/songForm';
import { DarkBackground } from '../common/components/style';
import Sidebar from '../common/components/sidebar';
import { getSongs, deleteSong, updateSong, resetUpdateSongError } from './action';

class ArtistMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            page: 1,
            deleteId: null,
            editSongId: null,
            editSongName: ''
        };
    }

    componentDidMount = () => {
        this.props.getSongsFunction(10,this.state.page)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.page !== prevState.page) {
            this.props.getSongsFunction(10,this.state.page)
        }
        if (this.props.error_code !== prevProps.error_code) {
            if (this.props.error_code === '-1') {
                this.closeEditSongModal()
                this.props.resetUpdateSongErrorFunction()
            }
        }
    }

    deleteSongModal = (url) => {
        this.setState({deleteId: url}, () => {
            document.getElementById("delete-confirmation-background").classList.toggle("show");
            document.getElementById("delete-confirmation-box").classList.toggle("show");
        })
    }

    deleteSongOnClick = () => {
        this.props.deleteSongFunction(this.state.deleteId)
    }

    editSongModal = (id, title) => {
        this.setState({editSongId: id, editSongName: title}, () => {
            document.getElementById("insert-song-form").classList.toggle("show");
            document.getElementById("dark-background").classList.toggle("show");
        })
    }

    closeEditSongModal = () => {
        this.setState({editSongId: null, editSongName: ''});
        document.getElementById("insert-song-form").classList.toggle("show");
        document.getElementById("dark-background").classList.toggle("show");
    }

    editSongOnClick = (songData) => {
        let song = {
            songId: this.state.editSongId,
            songData
        }
        this.props.editSongFunction(song)
        document.getElementById('song').value = ''
    }

    render() {
        if (this.props.loading) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Sidebar/>
                    <ConfirmationModal type='delete' acceptfunction={this.deleteSongOnClick}/>
                    <DarkBackground id='dark-background' onClick={this.closeEditSongModal}/>
                    <SongForm
                        id='song-form-component'
                        title='Edit Song Details'
                        buttontext='Update Song'
                        value={this.state.editSongName}
                        acceptfunction={(songData) => this.editSongOnClick(songData)}
                        error={{message: this.props.message, error_code: this.props.error_code}}
                    />
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
                                    <th>MANAGE</th>
                                </tr>
                                {this.props.songs.premium_song.map((song, index) => (
                                <tr key={song.id} className="content" name="$id">
                                    <td>{index+1}</td>
                                    <td className='songTitle'>{song.title}</td>
                                    <td className="manage">
                                        <p style={{marginRight:"1rem", marginBottom: "0"}} onClick={(_) => this.editSongModal(song.id, song.title)}>Edit</p>
                                        <p onClick={(_) => this.deleteSongModal(song.id, song.title)}>Delete</p>
                                    </td>
                                </tr>
                                ))
                                }
                            </tbody>
                        </SongList>
                        <Pagination
                            activePage={this.state.page}
                            firstItem={null}
                            lastItem={null}
                            pointing
                            secondary
                            totalPages={this.props.songs.maximum_page}
                            onPageChange={(e, { activePage }) => this.setState({ page: activePage })}
                        />
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
	return {
        songs: state.artistMenu.songs,
        loading: state.artistMenu.loading,
        error_code: state.artistMenu.error_code,
        message: state.artistMenu.message
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSongsFunction: (limit, page) => dispatch(getSongs(limit, page)),
        deleteSongFunction: (songId) => dispatch(deleteSong(songId)),
        editSongFunction: (songData) => dispatch(updateSong(songData)),
        resetUpdateSongErrorFunction: () => dispatch(resetUpdateSongError())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ArtistMenu);