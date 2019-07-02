import React from 'react';
import {connect} from 'react-redux';
import {fetchStudent} from '../../actions';


class StudentShow extends React.Component{
    
   componentDidMount(){
       const {id} = this.props.match.params;
       
       this.props.fetchStudent(id);
    

   }




   render(){ 
       
       if(!this.props.students){
           return (
        <div>Student Details.
            
            <div>Loading..</div>

        </div>
        )}
        return(
         <div>
             
             <h2>Student Details</h2> 
            
             <div><b>Name:</b>{'  '}{this.props.students.name}</div>
             <div><b>Subject:</b>{'  '}{this.props.students.subject}</div>
             <div><b>Marks:</b>{'  '}{this.props.students.marks}</div>
             <div><b>Student ID:</b>{'  '}{this.props.students.student_id}</div>
            

        </div>
        );
    }
}

const mapStateToProps = (state,ownProps) =>{
    return{
        students: state.students[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps,{fetchStudent})(StudentShow);