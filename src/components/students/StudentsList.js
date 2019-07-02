import React from 'react';
import {connect} from 'react-redux';
import {fetchStudents} from '../../actions';
import {Link} from 'react-router-dom';
import _ from 'lodash';

class StudentsList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            filterBar:'',
            filteredData:'',
            data:'',
            sort: false
        }
    }
    componentDidMount(){
        this.props.fetchStudents();    
    }
    

    onSorting = () =>{
        if(this.state.sort === false){ 
          this.setState({sort:true})
          const data = this.props.students;
          const Arr = _.sortBy(data, ['name']);
          this.setState({filteredData: Arr})
        }else if(this.state.sort === true){
            this.setState({sort:false})
            const data = this.props.students;
            this.setState({filteredData:data})
        }
    }
    
    onSubmitForm = (e) =>{  
        e.preventDefault();
        const data = this.props.students;
        const Arr = _.filter(data, student => student.name === this.state.filterBar);
        this.setState({filteredData: Arr,filterBar:''}) 

    }

    renderAdmin(student){
        
            return(
                <div className='right floated content'>
                
                <Link className='ui button primary' to={`/student/edit/${student.id}`}>Edit</Link>
                
               
                <Link className='ui button negative ' to={`/student/delete/${student.id}`}>Delete</Link>
               
                </div>
            )

        
    }
   renderList = () =>{
    
    if(this.state.sort === true){
        return this.state.filteredData.map(student =>{
           
            return(
                <div className='item' key={student.id}>
                 {this.renderAdmin(student)}
                
                    <i className='large middle aligned icon user'/>
                    <div className='content'>
                    <Link to={`/student/${student.id}`} className='header'>
                    {student.name}
                    </Link>
                    
                    <div className='description'><b>Marks:</b>{student.marks}</div>
                    </div>
                    
                   
                    
                    </div>           
            )

        })

    }
        if(this.state.filteredData.length <= 0){
        return this.props.students.map(student =>{
           
            return(
                <div className='item' key={student.id}>
                 {this.renderAdmin(student)}
                
                    <i className='large middle aligned icon user'/>
                    <div className='content'>
                    <Link to={`/student/${student.id}`} className='header'>
                    {student.name}
                    </Link>
                    
                    <div className='description'><b>Marks:</b>{student.marks}</div>
                    </div>
                    
                   
                    
                    </div>           
            )

        })
        
    }
    
    return this.state.filteredData.map(student=>{
        return(
            <div className='item' key={student.id}>
             {this.renderAdmin(student)}
            
                <i className='large middle aligned icon user'/>
                <div className='content'>
                <Link to={`/student/${student.id}`} className='header'>
                {student.name}
                </Link>
                
                <div className='description'><b>Marks:</b>{student.marks}</div>
                </div>
                
               
                
                </div>           
        )
    })

    

    }
    renderCreateStream(){
        
            return (<button className='ui icon button right floated content'><Link to='/student/new'><i className='icon settings'></i> Create New Student Details</Link></button>);
        
    }
    sortByName(){
        if(this.state.sort === false){
        return (<button className='ui icon button right floated content' onClick={() => this.onSorting()}>Sort Students By Name</button>);
      }else if(this.state.sort === true){
        return (<button className='ui icon button right floated content' onClick={() => this.onSorting()}>Reset Sorting</button>);
      }
    
}
    render(){
        console.log(this.state.data)
        return(
            <div>
                <form className='ui form' onSubmit={this.onSubmitForm}>
            <div className='field'>
            <label>Search</label>
            <input type='text' value={this.state.filterBar} onChange={(e) => this.setState({filterBar: e.target.value})}/>

            </div>
            </form>
                <h2 className='ui header'>STUDENTS</h2>
                <div className='ui celled list'>{this.renderList()}</div>
                <div className='ui celled list'>{this.renderCreateStream()}</div>
                <div className='ui celled list'>{this.sortByName()}</div>

                </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        students: Object.values(state.students),
        
    }
}
export default connect(mapStateToProps,{fetchStudents})(StudentsList);