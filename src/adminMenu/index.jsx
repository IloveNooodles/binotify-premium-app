import React from "react"
import { Pagination } from "semantic-ui-react"

import Sidebar from "../common/components/sidebar"
import ConfirmationModal from "../common/components/deleteConfirmation"
import { SubscriptionList } from "./style"

class AdminMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            modalMessage: null,
            clickedMemberId: null,
            clickedCreatorId: null
        }
    }

    acceptSubscriptionModal = (memberid, creatorid) => {
        this.setState({clickedMemberId: memberid});
        this.setState({clickedCreatorId: creatorid});
        document.getElementById("delete-confirmation-background").classList.toggle("show");
        document.getElementById("delete-confirmation-box").classList.toggle("show");
        this.setState({modalMessage: "accept"})
    }

    rejectSubscriptionModal = (memberid, creatorid) => {
        this.setState({clickedMemberId: memberid});
        this.setState({clickedCreatorId: creatorid});
        document.getElementById("delete-confirmation-background").classList.toggle("show");
        document.getElementById("delete-confirmation-box").classList.toggle("show");
        this.setState({modalMessage: "reject"})
    }

    render() {
        return (
            <div>
                <ConfirmationModal type={this.state.modalMessage} acceptfunction={
                    this.state.modalMessage === "accept" ?
                    () => this.props.acceptSubscriptionFunction(this.state.clickedMemberId, this.state.clickedCreatorId) :
                    () => this.props.rejectSubscriptionFunction(this.state.clickedMemberId, this.state.clickedCreatorId)
                    }/>
                <Sidebar/>
                <div style={{  
                    margin: '50px 100px',
                    marginLeft: '20rem',
                    width: 'auto',
                    }}>
                    <h1>Admin Menu</h1>
                    <h3>Requested Subscriptions</h3>
                    <SubscriptionList>
                        <tbody>
                            <tr>
                                <th>#</th>
                                <th>Subscriber</th>
                                <th>Artist</th>
                                <th>MANAGE</th>
                            </tr>
                            <tr className="content" name="$id">
                                <td>1</td>
                                <td>Arik Rayi</td>
                                <td>Rahman</td>
                                <td className="manage">
                                    <p memberid={"0"} creatorid={"0"} style={{marginRight:"1rem"}} onClick={(e) => this.acceptSubscriptionModal(e.target.getAttribute('memberid'), e.target.getAttribute('creatorid'))}>Accept</p>
                                    <p memberid={"0"} creatorid={"0"} onClick={(e) => this.rejectSubscriptionModal(e.target.getAttribute('memberid'), e.target.getAttribute('creatorid'))}>Reject</p>
                                </td>
                            </tr>
                        </tbody>
                    </SubscriptionList>
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
        )
    }
}

export default AdminMenu