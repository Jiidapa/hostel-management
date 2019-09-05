import React, { Component } from 'react';
import axios from 'axios';
import { Typeahead } from 'react-bootstrap-typeahead';

export default class HostelSuggestion extends Component {
  state = {
    hostels: [],
  }

  componentDidMount() {
    this.getHostel();
  }

  getHostel = async () => {
    const response = await axios.get('https://543dba8d-6ff9-43d6-924b-e379a738cdfe.mock.pstmn.io/hostel');

    for (const h of response.data) {
      this.state.hostels.push({
        id: h.id,
        name: h.name
      })
      this.setState({
        hotels: this.state.hotels
      })
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
