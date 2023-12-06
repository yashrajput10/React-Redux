import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { createEmp } from "../../services/action/employee.action";

export const CreateEmployee = () => {

    const [formInput,setFormInput]= useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        employee_id:"",
        contact:""
    })

    const dispatch = useDispatch();

    const handelChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setFormInput({...formInput,[name]:value});
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("data",formInput);
        dispatch(createEmp(formInput))
        setFormInput({
          fname:"",
          lname:"",
          email:"",
          password:"",
          employee_id:"",
          contact:""
        })
    }

  return (
    <section>
      <Container>
        <Row onSubmit={handleSubmit}>
          <div className="col-6">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Fname</Form.Label>
                  <Form.Control
                    type="text"
                    name="fname"
                    placeholder="Enter Fname"
                    value={formInput.fname}
                    onChange={handelChange}

                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Lname</Form.Label>
                  <Form.Control
                    type="text"
                    name="lname"
                    placeholder="Enter Lname"
                    value={formInput.lname}
                    onChange={handelChange}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="email" value={formInput.email} onChange={handelChange} />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formInput.password}
                    onChange={handelChange}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>EmployeeId</Form.Label>
                  <Form.Control type="text" name="employee_id" placeholder="employee_id" value={formInput.employee_id} onChange={handelChange}/>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    type="number"
                    name="contact"
                    placeholder="contact"
                    value={formInput.contact}
                    onChange={handelChange}
                  />
                </Form.Group>
              </Row>
              <Button className="mt-3" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Row>
      </Container>
    </section>
  );
};
