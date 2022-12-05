import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
    return (
        <Form className='formLogReg'>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" required/>
                <Form.Text className="text-muted">We'll never share your email.</Form.Text>
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            <Button type="submit" className='loginButton'>Login</Button>
        </Form>
    )
}