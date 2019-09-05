import React, { Component } from 'react';
import Carousels from '../components/Carousels';
import SearchHostel from '../components/SearchHostel';

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="mb-5">
                    <Carousels />
                    <div className="container" style={{ marginTop: '-4rem' }}>
                        <SearchHostel />
                    </div>
                </div>
            </>
        )
    }
}
