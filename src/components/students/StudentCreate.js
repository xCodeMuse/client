import React from 'react';
import StudentForm from './StudentForm';
import {connect} from 'react-redux';
import { createStudents } from '../../actions';

class StudentCreate extends React.Component{
    onSubmit = formValues =>{
        this.props.createStudents(formValues)
    }
    render(){
        return (
        <StudentForm onSubmit={this.onSubmit} />
        );
    }
}





export default connect(null,{createStudents})(StudentCreate);