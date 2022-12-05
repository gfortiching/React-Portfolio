import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register() {
    return (
        <Form className='formLogReg'>
            <Form.Group className="mb-3" controlId="formBasicEmail2">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" required/>
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Do you want to receive email notifications?" />
            </Form.Group>
            <Button type="submit" className='loginButton'>Register</Button>
        </Form>
    )
}