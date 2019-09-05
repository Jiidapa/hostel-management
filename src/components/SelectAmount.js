import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

export default class SelectAmount extends Component {
    render() {
        return (
            <>
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
                                min="1"
                            />
                        </InputGroup>
                    </div>
                </div>
            </>
        )
    }
}
