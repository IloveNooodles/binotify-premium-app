import React from "react"
import Sidebar from "../common/components/sidebar"
import SongForm from "../common/components/songForm"

class InsertSong extends React.Component {
    componentDidMount() {
        document.getElementById("insert-song-form").classList.add("show");
    }

    render( ) {
        return (
            <div>
                <Sidebar/>
                <SongForm title='Insert New Song' buttontext='Submit Song'/>
            </div>
        )
    }
}

export default InsertSong