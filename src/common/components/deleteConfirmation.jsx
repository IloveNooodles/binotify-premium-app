import React from "react"
import { DeleteConfirmationModal } from "./style"

class DeleteConfirmation extends React.Component {
    constructor(props) {
        super(props)
    }

    cancelOnClick = () => {
        document.getElementById("delete-confirmation-background").classList.toggle("show");
        document.getElementById("delete-confirmation-box").classList.toggle("show");
    }

    deleteOnClick = () => {
        console.log(this.props.songid);
    }

    render() {
        return (
        <DeleteConfirmationModal id="delete-confirmation-background">
            <div className="confirmation-box" id="delete-confirmation-box">
                <p className="confirmation-text">Are you sure you want to delete this?</p>
                <div className="footer">
                    <button className="btn btn-cancel" onClick={this.cancelOnClick}>Cancel</button>
                    <button className="btn btn-danger" onClick={this.deleteOnClick}>Delete</button>
                </div>
            </div>
        </DeleteConfirmationModal>
        )
    }
}

export default DeleteConfirmation