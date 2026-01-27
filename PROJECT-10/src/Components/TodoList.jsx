import React from 'react'
import Navbar from './Navbar';
import axios from 'axios';
function TodoList() {
    const[data,setData] = React.useState([])

    React.useEffect(() => {
        axios.get("")
        .then(res => setData(res.data.todo_list))
        .catch(err => console.log(err))
      }, []);

      

    return (  <>
      <Navbar/>
      <h2>Todo List</h2>
      <br />
      
      <table border={2} cellPadding={10} cellSpacing={3} >
       <thead>
        <tr>
          <th>Todo ID</th>
          <th>Todo Title</th>
          <th>Todo Details</th>
          <th>Todo Date</th>
          <th>Edit/Delete</th>

        </tr>
       </thead>
       <tbody>
        {
          data.map((value) => {
            return (
              <tr key={value.todo_id}>
                <td>{value.todo_id}</td>
                <td>{value.todo_title}</td>
                <td>{value.todo_details}</td>
                <td>{value.todo_date}</td>
                <td><input type="button" value="Edit" />
                <input type="button" value="Delete" /></td>
              </tr>
            )
          })
        }
       </tbody>
      </table>

      
    </>);
}

export default TodoList; 