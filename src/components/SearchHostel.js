import React, { Component } from 'react';
import { Card, Form, InputGroup, FormControl, ButtonToolbar, Button } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Calendar from './Calendar';
import SelectAmount from './SelectAmount';

library.add(fab, fas);

export default class SearchHostel extends Component {
    render() {
        return (
            <>
                    <Card>
                        <Card.Body>
                            <Form>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-12" style={styles.heightLabel}>
                                                <Form.Label>ที่ไหน</Form.Label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="basic-addon1">
                                                            <FontAwesomeIcon icon={['fas', 'search']} />
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl
                                                        placeholder="ที่ไหน"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                    />
                                                </InputGroup>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">

                                        <div className="row">
                                            <div className="col-md-12">
                                                <Calendar />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="row">
                                            <div className="col-md-12" style={styles.heightLabel}>
                                                <Form.Label>ผู้เข้าพัก</Form.Label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <SelectAmount />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="row">
                                            <div className="col-md-12" style={styles.heightLabel}>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <ButtonToolbar>
                                                    <Button variant="primary">Primary</Button>
                                                </ButtonToolbar>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
            </>
        )
    }
}


export default SearchHostel


const styles = {
    heightLabel: {
        height: '2rem'
    }
}