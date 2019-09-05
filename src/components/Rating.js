import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

export default class Rating extends Component {
    render() {
        return (
            <>
                <StarRatings
                    rating={parseFloat(this.props.rate)}
                    starDimension="20px"
                    starSpacing="1px"
                />
            </>
        );
    }
}
