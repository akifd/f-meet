import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { render } from 'solid-js/web'
import { Form, Button } from 'solid-bootstrap'


function JoinForm() {
  return <Form>
    <Form.Group class="mb-3" controlId="formName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" />
    </Form.Group>

    <Form.Group class="mb-3" controlId="formRoom">
      <Form.Label>Room</Form.Label>
      <Form.Control type="text" placeholder="Enter room to join" />
    </Form.Group>

    <Button variant="primary" type="submit">Submit</Button>
  </Form>
}


function HelloWorld() {
  return <>
    <div class="container">
      <h1 class="display-1">F-Meet</h1>
      <p class="lead">A video call application.</p>

      <JoinForm/>
    </div>
  </>
}

render(() => <HelloWorld />, document.getElementById('app'))
