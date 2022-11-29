import React from "react"
import { DeleteConfirmationModal } from "./style"

class ConfirmationModal extends React.Component {
    constructor(props) {
        super(props)
    }

    closeModal = () => {
        document.getElementById("delete-confirmation-background").classList.toggle("show");
        document.getElementById("delete-confirmation-box").classList.toggle("show");
    }

    acceptFunction = () => {
        this.props.acceptfunction()
        this.closeModal()
    }

    render() {
        return (
        <DeleteConfirmationModal id="delete-confirmation-background">
            <div className="confirmation-box" id="delete-confirmation-box">
                <p className="confirmation-text">Are you sure you want to {this.props.type} this?</p>
                <div className="footer">
                    { this.props.type === 'delete' ?
                    <div>
                        <button className="btn btn-cancel" onClick={this.closeModal}>Cancel</button>
                        <button className="btn btn-danger" onClick={this.acceptFunction}>Delete</button>
                    </div> 
                    :
                    <div>
                        <button className="btn btn-danger" onClick={this.closeModal}>Cancel</button>
                        <button className="btn btn-cancel" onClick={this.acceptFunction}>Yes</button> 
                    </div>
                    }
                </div>
            </div>
        </DeleteConfirmationModal>
        )
    }
}

export default ConfirmationModal