import React from "react";
import { InsertSongForm } from "./style";

class SongForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            message: null,
        }
    }

    submit = () => {
        if (this.props.title === 'Insert New Song') {
            if (document.getElementById("judul").value === '' || document.getElementById('song').files.length === 0) {
                this.setState({error: '1'})
                this.setState({message: 'Please fill all the fields'})
            }
        }
        else if (this.props.title === 'Edit Song') {
        }
    }

    render() {
        if (this.state.error) {
            return (
                <InsertSongForm id="insert-song-form" encType="multipart/form-data">
                    <h3>{this.props.title}</h3>
                    <input type="text" placeholder="Title" id="judul" name="judul"/>
                    <h4>Song Audio</h4>
                    <input type="file" id="song" name="song" accept="audio/*"/>
                    <label className="sumbit-failure">{this.state.message}</label>
                    <button type="button" className="btn primary submit-btn" onClick={this.submit}>{this.props.buttontext}</button>
                </InsertSongForm>
            )
        }
        return (
            <InsertSongForm id="insert-song-form" encType="multipart/form-data">
                <h3>{this.props.title}</h3>
                <input type="text" placeholder="Title" id="judul" name="judul"/>
                <h4>Song Audio</h4>
                <input type="file" id="song" name="song" accept="audio/*"/>
                <button type="button" className="btn primary submit-btn" onClick={this.submit}>{this.props.buttontext}</button>
            </InsertSongForm>
        )
    }
}

export default SongForm