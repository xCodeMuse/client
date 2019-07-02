import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchStudent,deleteStudent} from '../../actions';

class StudentDelete extends React.Component{
    componentDidMount(){
        this.props.fetchStudent(this.props.match.params.id);
    }
    actions = () =>{
        console.log(this.props)
      return(
        <React.Fragment>
            <button className='ui negative button' onClick={() => this.props.deleteStudent(this.props.match.params.id)}>Delete</button>
            <Link className='ui button' to={'/'}>Cancel</Link>
            </React.Fragment>
    );
    } 

    renderContent(){
        if(!this.props.stream){
            return 'Are you sure you want to delete this entry?';
        }
        return `Are you sure you want to delete the student list with title: ${this.props.stream.title} ?`;
    }
    render(){
        console.log(this.props)
        return (
            

                <Modal 
                onClick={() => history.push('/')}
                title="Delete Student Entry"
                content={this.renderContent()}
                actions={this.actions()}
                />
        
        
                );
    }
    
}

const mapStateToProps = (state,ownProps) =>{
    
    return{
        students: state.students[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps,{fetchStudent,deleteStudent})(StudentDelete);