import React, { Component } from 'react';

class AddStudent extends Component {
    state = {
        name: '',
        course: '',
        grade: ''
    }

    handleInputChange = ({target: {name, value}}) => {

        this.setState({
            [name]: value
        });

    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.add({...this.state});

        this.setState({
            name: '',
            course: '',
            grade: ''
        });
    }

    render() {
        const { col = 's12' } = this.props;
        const { name, course, grade } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={`col ${col}`}>
                <div className="input-field">
                    <input name="name" autoComplete="off" id="name" type="text" value={name} onChange={this.handleInputChange} />
                    <label htmlFor="name">Student Name</label>
                </div>
                <div className="input-field">
                    <input name="course" autoComplete="off" id="course" type="text" value={course} onChange={this.handleInputChange} />
                    <label htmlFor="course">Course</label>
                </div>
                <div className="input-field">
                    <input name="grade" autoComplete="off" id="grade" type="text" value={grade} onChange={this.handleInputChange} />
                    <label htmlFor="grade">Grade</label>
                </div>
                <button className="btn green waves-effect waves-light">Add Student
                <i className="material-icons right">send</i></button>
            </form>
        );
    };
}

export default AddStudent;