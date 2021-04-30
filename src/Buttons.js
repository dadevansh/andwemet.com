import './Buttons.css';
import React, { Component } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


class Buttons extends Component {
    constructor() {
        super()
        this.state = {
            Gender: 1,
            Orientation: 1,
            Meeting: null,
            Name: "",
            Education: null,
            School: "Select",
            Profession: "Select"

        }
        this.handleText = this.handleText.bind(this)
        this.handleGender = this.handleGender.bind(this)
        this.handleSchool = this.handleSchool.bind(this)
        this.handleMeeting = this.handleMeeting.bind(this)
        this.handleOrientation = this.handleOrientation.bind(this)
        this.handleEducation = this.handleEducation.bind(this)
        this.handlePro = this.handlePro.bind(this)
    }

    handleText(event) {
        this.setState({ Name: event.currentTarget.value })
    }
    handleGender(event) {
        this.setState({ Gender: event.currentTarget.value })
    }
    handleOrientation(event) {
        this.setState({ Orientation: event.currentTarget.value })
    }
    handleMeeting(event) {
        this.setState({ Meeting: event.currentTarget.value })
    }
    handleEducation(event) {
        this.setState({ Education: event.currentTarget.value })
    }
    handleSchool(event) {
        this.setState({ School: "School " + event })
    }
    handlePro(event) {
        this.setState({ Profession: "Profession " + event })
    }


    render() {
        return (

            <form>
                <p>Fields with "{<i class="fa fa-lock" />}" cannot be edited more than once</p>
                <div class='row'>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
                        integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
                        crossorigin="anonymous" />

                    <i class="fa fa-lock" />
                    <label class='label col-sm-4 text' >  How do you identify yourself: </label>
                    <ToggleButtonGroup
                        type="radio"
                        defaultValue={[1]}
                        className="mb-2 col-sm-4"
                        name="Gender"

                    >
                        <ToggleButton value={1} onChange={this.handleGender} className='btn-round' variant='ouline-danger'>Man</ToggleButton>
                        <ToggleButton value={2} onChange={this.handleGender} className='btn-round' variant='ouline-danger'>Woman</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <br />

                <div class='row'>
                    <i class="fa fa-lock" />
                    <label class='label col-sm-4 text'>Your sexual orientation: </label>
                    <ToggleButtonGroup
                        type="radio"
                        defaultValue={[1]}
                        className="mb-2 col-sm-6"
                        name="Orientation"
                    >
                        <ToggleButton value={1} onChange={this.handleOrientation} className='btn-round' variant="outline-danger">Hetrosexual</ToggleButton>
                        <ToggleButton value={2} onChange={this.handleOrientation} className='btn-round' variant="outline-danger">Bisexual</ToggleButton>
                    </ToggleButtonGroup>
                </div>

                <br />

                <div class='row'>
                    <i class="fa fa-lock" />
                    <label class='label col-sm-4 text'>I am open to meeting: </label>
                    <ToggleButtonGroup
                        type="radio"
                        className="mb-2 col-sm-6"
                        name="meeting"
                    >
                        <ToggleButton value={1} onChange={this.handleMeeting} className='btn-round' variant="outline-danger">Hetrosexual Woman</ToggleButton>
                        <ToggleButton value={2} onChange={this.handleMeeting} className='btn-round' variant="outline-danger">Bisexual Woman</ToggleButton>
                        <ToggleButton value={3} onChange={this.handleMeeting} className='btn-round' variant="outline-danger">Both</ToggleButton>
                    </ToggleButtonGroup>
                </div>

                <br />

                <div class="form-grp row">
                    <i class="fa fa-lock" />
                    <label class='label col-sm-4 text'>Display name: </label>
                    <input
                        type='text'
                        value2={this.state.Name}
                        placeholder="Enter"
                        onChange={this.handleText}
                        className='col-sm-4 mb-2'

                    />
                </div>
                <br />
                <p>Recommended: Share a display name that is not your real name.</p>
                <div class='form-grp row'>
                    <i class="fa fa-lock" />
                    <label class='col-sm-4 text'>Education/Qualification: </label>
                    <ToggleButtonGroup
                        type="radio"
                        defaultValue={[1]}
                        className="mb-2 col-sm-6"
                        name="edu"
                    >
                        <ToggleButton value={1} onChange={this.handleEducation} className='btn-round' variant='ouline-danger'>High School</ToggleButton>
                        <ToggleButton value={2} onChange={this.handleEducation} className='btn-round' variant='ouline-danger'>Bachelor</ToggleButton>
                        <ToggleButton value={3} onChange={this.handleEducation} className='btn-round' variant='ouline-danger'>Master</ToggleButton>
                        <ToggleButton value={4} onChange={this.handleEducation} className='btn-round' variant='ouline-danger'>Doctorate</ToggleButton>
                        <ToggleButton value={5} onChange={this.handleEducation} className='btn-round' variant='ouline-danger'>PG Diploma</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <br />

                <div class='row'>
                    <i class="fa fa-lock" />
                    <label class='col-sm-4 text'>University/School: </label>
                    <DropdownButton
                        id="dropdown-item-button"
                        title={this.state.School}
                        className='col-sm-6'
                        variant='ouline-danger'
                    >
                        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                        <Dropdown.Item eventKey="1" onSelect={this.handleSchool} >School 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2" onSelect={this.handleSchool} >School 2</Dropdown.Item>
                        <Dropdown.Item eventKey="3" onSelect={this.handleSchool} >School 3</Dropdown.Item>
                    </DropdownButton>
                </div>
                <br />

                <div class='row'>
                    <i class="fa fa-lock" />
                    <label class="btn-group col-sm-4 text">Profession/Occupation: </label>
                    <DropdownButton
                        id="dropdown-item-button"
                        title={this.state.Profession}
                        className='col-sm-6'
                        variant='ouline-danger'
                    >
                        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                        <Dropdown.Item eventKey="1" onSelect={this.handlePro} >Pro 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2" onSelect={this.handlePro} >Pro 2</Dropdown.Item>
                        <Dropdown.Item eventKey="3" onSelect={this.handlePro} >Pro 3</Dropdown.Item>
                    </DropdownButton>
                </div>

                <br />
            </form>
        )
    }


}

export default Buttons