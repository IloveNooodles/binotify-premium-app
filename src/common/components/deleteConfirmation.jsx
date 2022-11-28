import React from "react"
import { DeleteConfirmationModal } from "./style"

class ConfirmationModal extends React.Component {
    constructor(props) {
        super(props)
    }

    cancelOnClick = () => {
        document.getElementById("delete-confirmation-background").classList.toggle("show");
        document.getElementById("delete-confirmation-box").classList.toggle("show");
    }

    render() {
        return (
        <DeleteConfirmationModal id="delete-confirmation-background">
            <div className="confirmation-box" id="delete-confirmation-box">
                <p className="confirmation-text">Are you sure you want to {this.props.type} this?</p>
                <div className="footer">
                    { this.props.type === 'delete' ?
                    <div>
                        <button className="btn btn-cancel" onClick={this.cancelOnClick}>Cancel</button>
                        <button className="btn btn-danger" onClick={this.props.acceptfunction}>Delete</button>
                    </div> 
                    :
                    <div>
                        <button className="btn btn-danger" onClick={this.cancelOnClick}>Cancel</button>
                        <button className="btn btn-cancel" onClick={this.props.acceptfunction}>Yes</button> 
                    </div>
                    }
                </div>
            </div>
        </DeleteConfirmationModal>
        )
    }
}

export default ConfirmationModal