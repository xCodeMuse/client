import students from '../api/students';
import history from '../history';

export const createStudents = formValue=> async (dispatch) =>{
    
    const response = await students.post('/data',{...formValue});
    dispatch({
        type: 'CREATE_STUDENTS',
        payload: response.data
    });
    history.push('/');

}

export const fetchStudents = () => async dispatch =>{
    const response = await students.get('/data');
    dispatch({
        type: 'FETCH_STUDENTS',
        payload: response.data
    })
}
export const fetchStudent = student_id => async dispatch =>{
    const response = await students.get(`/data/${student_id}`);
    dispatch({
        type: 'FETCH_STUDENT',
        payload: response.data
    })
}
export const deleteStudent = student_id => async dispatch =>{
    await students.delete(`/data/${student_id}`);
    dispatch({
        type: 'DELETE_STUDENT',
        payload: student_id
    });
    history.push('/');
}

export const editStudent = (student_id,formValues) => async dispatch =>{
    const response = await students.patch(`/data/${student_id}`,formValues);
    dispatch({
        type: 'EDIT_STUDENT',
        payload: response.data
    })
    history.push('/');
}