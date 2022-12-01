import React from "react"
import { Pagination } from "semantic-ui-react"
import { connect } from "react-redux"

import Sidebar from "../common/components/sidebar"
import ConfirmationModal from "../common/components/deleteConfirmation"
import { SubscriptionList } from "./style"
import { getRequests } from "./action"

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

    componentDidMount = () => {
        this.props.getRequestsFunction(10, this.state.page)
    }

    componentDidUpdate(_, prevState) {
        if (this.state.page !== prevState.page) {
            this.props.getRequestsFunction(10, this.state.page)
        } else if (this.props.requests.page !== this.state.page) {
            this.setState({ page: this.props.requests.page })
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
        if (this.props.loading) {
            return <div>Loading...</div>
        } else {
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
                                    <th>Subscriber Id</th>
                                    <th>Artist Id</th>
                                    <th>MANAGE</th>
                                </tr>
                                {this.props.requests.pending_subscription_list.map((request, index) => (
                                <tr key={index} className="content">
                                    <td>{index+1}</td>
                                    <td className="tableTitle">{request.subscriber_id}</td>
                                    <td className="tableTitle">{request.creator_id}</td>
                                    <td className="manage">
                                        <p style={{marginRight:"1rem", marginBottom:"0"}} onClick={(_) => this.acceptSubscriptionModal(request.subscriber_id, request.creator_id)}>Accept</p>
                                        <p onClick={(_) => this.rejectSubscriptionModal(request.subscriber_id, request.creator_id)}>Reject</p>
                                    </td>
                                </tr>
                                ))
                                }
                            </tbody>
                        </SubscriptionList>
                        <Pagination
                            activePage={this.state.page}
                            firstItem={null}
                            lastItem={null}
                            pointing
                            secondary
                            totalPages={this.props.requests.maximum_page}
                            onPageChange={(e, { activePage }) => this.setState({ page: activePage })}
                        />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
	return {
        requests: state.adminMenu.requests,
        loading: state.adminMenu.loading,
        error_code: state.adminMenu.error_code,
        message: state.adminMenu.message
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRequestsFunction: (limit, page) => dispatch(getRequests(limit, page))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminMenu);