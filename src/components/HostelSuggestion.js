import React, { Component } from 'react';
import axios from 'axios';
import { Typeahead } from 'react-bootstrap-typeahead';

export default class HostelSuggestion extends Component {
  CancelToken = axios.CancelToken;
  source = this.CancelToken.source();
  state = {
    hostels: [],
  }

  componentDidMount() {
    this.getHostel();
  }

  componentWillUnmount() {
    this.source.cancel();
  }
  getHostel = async () => {
    try {
      const response = await axios.get('https://6d777be4-93ea-4ec2-8335-ffd0777cd339.mock.pstmn.io/hostel', {
        cancelToken: this.source.token
      });

      for (const h of response.data) {
        this.state.hostels.push({
          id: h.id,
          name: h.name
        })
        this.setState({
          hotels: this.state.hotels
        })
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('home cancelled')
      }
      else {
        console.log(error);
      }
    }
  }

  render() {
    return (
      <>
        <Typeahead
          labelKey="name"
          id="my-typeahead-id"
          options={this.state.hostels}
          placeholder="ที่ไหน..."
        />
      </>
    )
  }
}
