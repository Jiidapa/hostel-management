import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class BottomSerch extends Component {
    render() {
        return (
            <div>
                <ButtonToolbar>
                    <Button className="bg-btn-primary">ค้นหาห้องพัก</Button>
                </ButtonToolbar>
            </div>
        )
    }
}
