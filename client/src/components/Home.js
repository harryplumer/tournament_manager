import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import TournamentForm from './TournamentForm'

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Welcome To Tournament Manager</Header>
        <TournamentForm editing={false} />
      </div>
    );
  }
}

export default Home;
