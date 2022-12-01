import React from "react"
import { connect } from "react-redux";

import Sidebar from "../common/components/sidebar"
import SongForm from "../common/components/songForm"
import { addSong } from "./action"

class InsertSong extends React.Component {
    componentDidMount() {
        document.getElementById("insert-song-form").classList.add("show");
    }

    render() {
        return (
            <div>
                <Sidebar/>
                <SongForm
                    title='Insert New Song'
                    buttontext='Submit Song'
                    acceptfunction={(songData) => this.props.addSongFunction(songData)}
                    error={{message: this.props.message, error_code: this.props.error_code}}
                />
            </div>
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
        addSongFunction: (songData) => dispatch(addSong(songData)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InsertSong)