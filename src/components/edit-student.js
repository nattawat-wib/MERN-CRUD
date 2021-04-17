import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class EditStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            roll: ''
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/students/edit-student/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    email: res.data.email,
                    roll: res.data.roll
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeStudentName = (e) => {
        this.setState({ name: e.target.value });
    };

    onChangeStudentEmail = (e) => {
        this.setState({ email: e.target.value });
    };

    onChangeStudentRoll = (e) => {
        this.setState({ roll: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const studentObject = {
            name: this.state.name,
            email: this.state.email,
            roll: this.state.roll
        };

        axios.put(`http://localhost:4000/students/update-student/${this.props.match.params.id}`, studentObject)
            .then(res => {
                console.log(res.data);
                console.log('Student Update Successfully');
            }).catch(err => {
                console.log(err);
            })

        // Redirect to Student List
        this.props.history.push('/student-list');
    };

    render() {
        return (
            <div className='form-wrapper mt-5'>
                <h1> Update Student</h1>

                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label> Name </Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label> email </Form.Label>
                        <Form.Control type="text" value={this.state.email} onChange={this.onChangeStudentEmail} />
                    </Form.Group>

                    <Form.Group controlId="roll">
                        <Form.Label> roll </Form.Label>
                        <Form.Control type="number" value={this.state.roll} onChange={this.onChangeStudentRoll} />
                    </Form.Group>

                    <Button variant="success" size='lg' block="block" type="submit">
                        Update student
                    </Button>
                </Form>
            </div>
        )
    }
}
