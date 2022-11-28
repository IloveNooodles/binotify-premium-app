import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import ArtistMenu from '../artistMenu';
import { connect } from "react-redux";
import Login from '../login';
import Register from '../register';
import InsertSong from '../insertSong';
import { getUser, logout } from '../common/auth/action';
import AdminMenu from '../adminMenu';

class Home extends React.Component {

    componentDidMount() {
        this.props.getUserFunction()
    }

    render() {
        if (this.props.loading === true) {
            return (
                <h2>Loading...</h2>
            )
        } else {
            if (this.props.user !== null && this.props.user.isAdmin === false) {
                return (
                    <BrowserRouter>
                        <Routes>
                            <Route path="/addsong" element={<InsertSong />} />
                            <Route path='*' element={<ArtistMenu />} />
                        </Routes>
                    </BrowserRouter>
                )
            } else if (this.props.user !== null && this.props.user.isAdmin === true) {
                return (
                    <BrowserRouter>
                        <Routes>
                            <Route path='*' element={<AdminMenu />} />
                        </Routes>
                    </BrowserRouter>
                )
            }
            return (
                <BrowserRouter>
                    <Routes>
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            )
        }
    }
}

const mapStateToProps = (state) => {
	return {
        user: state.auth.user,
        loading: state.auth.loading
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserFunction: () => dispatch(getUser()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)