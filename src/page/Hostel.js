import React, { Component } from 'react';
import axios from 'axios';
import { Carousel, Card, Form, InputGroup, FormControl } from 'react-bootstrap';
import '../style/style.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2/dist/sweetalert2.js';

library.add(fab, fas);

class Hostel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hostel: {},
            photos: [],
            detail: {},
            isLogin: true,
            profile: {},
            amountValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const response = await axios.get('https://6d777be4-93ea-4ec2-8335-ffd0777cd339.mock.pstmn.io/hostel/' + id);
        this.setState({
            hostel: response.data,
            photos: response.data.img,
            detail: response.data.detail,
        })

        let profile = localStorage.getItem('profile');
        if (profile) {
            this.setState({
                isLogin: false,
                profile: profile
            })
        }
    }

    handleChange(event) {
        this.setState({
            amountValue: event.target.value
        })
    }

    addBooking = (hostel, profile) => {
        let message = `การจองห้องสำเร็จ`
        Swal.fire('Success', message)
    }

    render() {
        return (
            <>
                <div className="container mt-3 mb-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-12 text-topic-hostel">
                                    {this.state.hostel.name}
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <Carousel>
                                        {
                                            this.state.photos.map((photo, index) => {
                                                return (

                                                    <Carousel.Item key={index}>
                                                        <img
                                                            className="d-block w-100 size-img-hostel"
                                                            src={photo}
                                                            alt={index}
                                                        />
                                                    </Carousel.Item>
                                                )
                                            })
                                        }
                                    </Carousel>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <Card>
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <div className="row">
                                                        <div className="col-md-12 text-detail-hostel">
                                                            {this.state.hostel.name}
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12 text-detail-hostel-second">
                                                            <a className="text-link text-link-map" target="_blank" rel="noopener noreferrer" href={this.state.hostel.map} > {this.state.hostel.location}</a>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12 text-detail-hostel-second">
                                                            {this.state.hostel.available} ห้อง
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12 ">
                                                            <span className="text-detail-hostel-price">฿{this.state.hostel.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="row">
                                                                <div className="col-md-12" style={styles.heightLabel}>
                                                                    <Form.Label>ผู้เข้าพัก</Form.Label>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <InputGroup className="mb-3">
                                                                        <InputGroup.Prepend>
                                                                            <InputGroup.Text>
                                                                                <FontAwesomeIcon icon={['fas', 'user']} />
                                                                            </InputGroup.Text>
                                                                        </InputGroup.Prepend>
                                                                        <FormControl
                                                                            placeholder="ผู้เข้าพัก"
                                                                            type="number"
                                                                            onChange={this.handleChange}
                                                                        />
                                                                    </InputGroup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <button
                                                                type="button"
                                                                className="btn btn-booking my-2 my-sm-0 w-100"
                                                                onClick={() => { this.addBooking(this.state.hostel, this.state.profile) }}
                                                                disabled={this.state.isLogin}
                                                            >
                                                                จองเลย
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Hostel;

const styles = {
    heightLabel: {
        height: '2rem'
    }
}