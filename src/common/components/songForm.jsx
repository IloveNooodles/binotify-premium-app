import React from "react";
import { connect } from "react-redux";
import { failedUpdateSong } from "../../artistMenu/action";

import { failedAddSong } from "../../insertSong/action";
import { InsertSongForm } from "./style";

class SongForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error_code: this.props.error.error_code ? this.props.error.error_code : null,
            message: this.props.error.message ? this.props.error.message : null,
            title: this.props.value ? this.props.value : ''
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            this.setState({title: this.props.value})
        }
        if (this.props.error.error_code !== prevProps.error.error_code) {
            this.setState({error_code: this.props.error.error_code, message: this.props.error.message})
        }
    }

    submit = () => {
        if (this.props.title === 'Insert New Song') {
            if (document.getElementById("judul").value === '' || document.getElementById('song').files.length === 0) {
                this.props.failedAddSongFunction('Please fill all the fields', '1');
            }
            else {
                let songData = new FormData();
                songData.append('title', this.state.title);
                songData.append('audio_file', document.getElementById('song').files[0]);
                this.props.acceptfunction(songData);
            }
        }
        else {
            if (document.getElementById("judul").value === '') {
                this.props.failedUpdateSongFunction('Please fill all the fields', '1');
            }
            else {
                let songData = new FormData();
                songData.append('title', this.state.title);
                if (document.getElementById('song').files.length !== 0) {
                    songData.append('audio_file', document.getElementById('song').files[0]);
                }
                this.props.acceptfunction(songData);
            }
        }
    }

    render() {
        if (this.state.error_code) {
            return (
                <InsertSongForm id="insert-song-form" encType="multipart/form-data">
                    <h3>{this.props.title}</h3>
                    <input type="text" placeholder="Title" id="judul" name="judul" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
                    <h4>Song Audio</h4>
                    <input type="file" id="song" name="song" accept="audio/*"/>
                    {this.state.error_code === '-1' ? <label className="sumbit-success">{this.state.message}</label> : <label className="sumbit-failure">{this.state.message}</label>}
                    <button type="button" className="btn primary submit-btn" onClick={this.submit}>{this.props.buttontext}</button>
                </InsertSongForm>
            )
        }
        return (
            <InsertSongForm id="insert-song-form" encType="multipart/form-data">
                <h3>{this.props.title}</h3>
                <input type="text" placeholder="Title" id="judul" name="judul" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
                <h4>Song Audio</h4>
                <input type="file" id="song" name="song" accept="audio/*"/>
                <button type="button" className="btn primary submit-btn" onClick={this.submit}>{this.props.buttontext}</button>
            </InsertSongForm>
        )
    }
}


const mapStateToProps = (state) => {
	return {
        error_code: state.insertSong.error_code,
        message: state.insertSong.message,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        failedAddSongFunction: (message, error_code) => dispatch(failedAddSong(message, error_code)),
        failedUpdateSongFunction: (message, error_code) => dispatch(failedUpdateSong(message, error_code)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SongForm)