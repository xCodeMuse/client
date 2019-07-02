import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StudentForm extends React.Component{
    

    renderError({touched,error}){
        if(touched && error){
            return(
            <div className="ui pointing red basic label">{error}</div>
            );
        }
        
    }
    renderInput = ({input,label,meta}) =>{
      const className = `field ${meta.error&&meta.touched ? 'error': ''}`;
       return (
        <div className={className}>
        
         <div className="ui label">
            {label}
          </div>
        <input {...input} autoComplete='off'/>
        
        {this.renderError(meta)}
        </div>
    
      );
    }

    onSubmit = (formValue) =>{ 
       this.props.onSubmit(formValue)
    }
    render(){
       

        return (
        <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        
            
            <Field name='name' component={this.renderInput} label='Enter Name' />
            
           
            <Field name='subject' component={this.renderInput} label='Enter Subject'/>

            <Field name='marks' component={this.renderInput} label='Enter Marks'/>

            <Field name='student_id' component={this.renderInput} label='Enter Student ID'/>
            
            
            <div className="ui large buttons">
            <button className='ui button primary'>Submit</button>
            </div>
            
        </form>
        );
    }
   
}

const validate = (formValue) =>{
    const error ={};
    if(!formValue.name){
        error.name = 'You must enter a name';
    }
    if(!formValue.subject){
        error.subject = 'You must enter a subject';
    }
    if(!formValue.marks){
        error.marks= 'You must enter marks';
    }
    if(!formValue.student_id){
        error.student_id = 'You must enter a student ID';
    }
    return error;
}

export default reduxForm({
    form: 'studentForm',
    validate
})(StudentForm);

