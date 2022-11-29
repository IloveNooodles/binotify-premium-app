import React from 'react';
import { Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux';

import { SongList } from './style';
import ConfirmationModal from '../common/components/deleteConfirmation';
import SongForm from '../common/components/songForm';
import { DarkBackground } from '../common/components/style';
import Sidebar from '../common/components/sidebar';
import { getSongs } from './action';

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

    componentDidUpdate(_, prevState) {
        if (this.state.page !== prevState.page) {
            this.props.getSongsFunction(10,this.state.page)
        }
    }

    deleteSongModal = (url) => {
        this.setState({deleteId: url}, () => {
            document.getElementById("delete-confirmation-background").classList.toggle("show");
            document.getElementById("delete-confirmation-box").classList.toggle("show");
        })
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

    render() {
        if (this.props.loading) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Sidebar/>
                    <ConfirmationModal type='delete' acceptfunction={() => this.props.deleteSongFunction}/>
                    <DarkBackground id='dark-background' onClick={this.closeEditSongModal}/>
                    <SongForm id='song-form-component' title='Edit Song Details' buttontext='Update Song' value={this.state.editSongName}/>
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
        loading: state.artistMenu.loading
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSongsFunction: (limit, page) => dispatch(getSongs(limit, page))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ArtistMenu);