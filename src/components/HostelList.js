import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import '../style/style.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { addHostel } from '../redux/actions/registerHostelAction';

library.add(fab, fas);

class HostelList extends Component {
    CancelToken = axios.CancelToken;
    source = this.CancelToken.source();
    state = {
        hts: [],
        loading: true
    }

    async getData() {
        try {
            const response = await axios.get('https://6d777be4-93ea-4ec2-8335-ffd0777cd339.mock.pstmn.io/hostel', {
                cancelToken: this.source.token
            });
            this.setState({
                hts: response.data,
                loading: false
            });
        }
        catch (error) {
            if (axios.isCancel(error)) {
                console.log('hostel cancelled')
            }
            else {
                console.log(error);
            }
        }
    }

    componentDidMount() {
        this.getData();
        this.props.dispatch(addHostel(this.state.hts, this.props.hostels));
    }

    componentWillUnmount() {
        this.source.cancel();
    }
    render() {
        return (
            <>
                <div className="row mt-3    ">
                    <div className="col-md-12 text-center">
                        {
                            this.state.loading === true && (
                                <div className="spinner-grow" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="row my-4">
                    {
                        this.state.hts.map((hostel) => {
                            return (
                                <div className="col-md-4" key={hostel.id}>
                                    <div className="card mb-3">
                                        <img src={hostel.img} alt={hostel.name} className="card-img-top" height="225" />
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h5 className="card-title text-card-title" >
                                                        {hostel.name}
                                                    </h5>
                                                    <div className="row">
                                                        <div className="col-md-12" style={{ height: '4.5rem' }}>
                                                            <FontAwesomeIcon icon={['fas', 'map-marker-alt']} className="ml-0" />
                                                            <a className="text-link text-link-map" target="_blank" rel="noopener noreferrer" href={hostel.map} > {hostel.location}</a>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <Rating rate={hostel.rate} />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                        {hostel.available} ห้อง
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className="col-md-12">
                                                    <Link className="btn btn-booking w-100"
                                                        to={
                                                            { pathname: '/hostel/' + hostel.id }
                                                        }>
                                                        View Room
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.bookingReducer.message,
        hostels: state.bookingReducer.hostels
    }
}

export default connect(mapStateToProps)(HostelList);
