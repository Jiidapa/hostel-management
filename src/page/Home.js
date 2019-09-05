import React, { Component } from 'react';
import Carousels from '../components/Carousels';
import SearchHostel from '../components/SearchHostel';

export default class Home extends Component {
    render() {
        return (
            <>
                <Carousels />
                <div className="container" style={{marginTop: '-3rem'}}>
                    <SearchHostel/>
                </div>
            </>
        )
    }
}
