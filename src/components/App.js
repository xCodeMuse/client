import React from 'react';
import { Router, Route,Switch} from 'react-router-dom';
import StudentsList from './students/StudentsList';
import StudentCreate from './students/StudentCreate';
import StudentEdit from './students/StudentEdit';
import StudentShow from './students/StudentShow';
import StudentDelete from './students/StudentDelete';
import history from '../history';
import Header from './Header';




const App = () =>{
    return(
    <div className='ui container'>
        
        <Router history={history}>
        <div>
        <Header/>
        <Switch>
        <Route path='/' exact component={StudentsList} />
        <Route path='/student/new' exact component={StudentCreate} />
        <Route path='/student/delete/:id' exact component={StudentDelete} />
        <Route path='/student/edit/:id' exact component={StudentEdit} />
        <Route path='/student/:id' exact  component={StudentShow} />
        </Switch>
        </div>
        </Router>
    </div>);
}

export default App;