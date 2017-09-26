import React from 'react'
import {Modal, Form, Button, Icon} from 'semantic-ui-react'
import {addTournament, updateTournament} from '../actions/tournaments'
class TournamentForm extends React.Component {
  state = {tournament: {name: "", number_of_divisions: ""}, editing: false }

  handleChange = (propertyName) => (event) => {
      const tournament  = this.state
      const newTournament = {
        ...tournament,
        [propertyName]: event.target.value
      };
      this.setState({ tournament: newTournament })
    }

  handleSubmit = (e) => {
    e.preventDefault()
    const {dispatch} = this.props
    const {tournament, editing} = this.state
    if (!editing)
      dispatch(addTournament(tournament))    
    else
      dispatch(updateTournament(tournament))
  
    this.setState({tournament: {name: "", number_of_divisions: ""}, modalOpen: false})
  }

  handleOpen = () => {
    if (this.props.editing)
      this.setState({tournament: this.props.tournament, editing: true})
    
    this.setState({ modalOpen: true })
  }

  render(){
    const {tournament, editing} = this.state
    return(
      <Modal
      trigger={editing ?  <span style={{cursor: 'pointer'}} onClick={this.handleOpen}>
              <Icon name='edit' size='large' />
              </span> :
      <Button primary onClick={this.handleOpen}>Add New Tournament</Button>  }
      open={this.state.modalOpen}
      >
        <Modal.Header>
          {editing ? "Edit Tournament" : "Add Tournament"}
        </Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input
                required
                label="Name"
                value={tournament.name}
                onChange={this.handleChange("name")}
                width={13}
              />
              <Form.Field
                control="input"
                type="number"
                required
                label="Num Of Divisions"
                value={tournament.number_of_divisions}
                onChange={this.handleChange("number_of_divisions")}
                width={3}
              />
            </Form.Group>
            <Form.Button color='green' inverted>
              {editing ? "Save" : "Submit"}
            </Form.Button>
          </Form>
          <Button color='red' inverted onClick={() => {this.setState({modalOpen: false})}}>
            Cancel
          </Button>
        </Modal.Content>
      </Modal>
    )
  }
}

export default TournamentForm