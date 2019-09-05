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
      const response = await axios.get('https://543dba8d-6ff9-43d6-924b-e379a738cdfe.mock.pstmn.io/hostel', {
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
