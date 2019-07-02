import React from 'react';
import {connect} from 'react-redux';
import {fetchStudent, editStudent} from '../../actions';
import _ from 'lodash';
import StudentForm from './StudentForm';



class StudentEdit extends React.Component{
    componentDidMount(){
        this.props.fetchStudent(this.props.match.params.id)
    }
   

    onSubmit = (formValues) =>{
       this.props.editStudent(this.props.match.params.id,formValues)
    }
    render(){
        if(this.props.students){
            return(
                <div>
                    <h3>Edit Student Details</h3>
                <StudentForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.students,'name','subject','marks','student_id')} />
                </div>
            )
        }
        return(
            <div>Loading...</div>
        );
        
    }
}



const mapStateToProps = (state,ownProps) =>{
    
    return{
        students: state.students[ownProps.match.params.id]
    }
        
    
}

export default connect(mapStateToProps,{fetchStudent, editStudent})(StudentEdit);