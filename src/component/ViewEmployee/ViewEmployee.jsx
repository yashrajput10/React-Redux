import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { singleEmp } from '../../services/action/employee.action';
import { Button } from 'react-bootstrap';

function ViewEmployee() {
     
    const {employees} = useSelector(state=>state.employeeReducer);
    console.log("emp",employees);

    const dispatch = useDispatch();

    const handleEdit =(id)=>{
      dispatch(singleEmp(id));
    }

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Employee_id</th>
          <th>Contact</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {
          employees.map((emp1,index)=>{
            return(
              <tr>
                <td>
                  {index+1}
                </td>
                <td>
                  {emp1.fname}
                </td>
                <td>
                {emp1.lname}
                </td>
                <td>
                {emp1.email}
                </td>
                <td>
                {emp1.password}
                </td>
                <td> 
                  {emp1.employee_id}
                </td>
                <td>
                {emp1.contact}
                </td>
                <td>
                <Button onClick={handleEdit(emp1.id)} variant="dark" >Edit</Button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  );
}

export default ViewEmployee;