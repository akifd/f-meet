import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { render } from 'solid-js/web'
import { Container, Row, Col, Form, Button } from 'solid-bootstrap'

import './f-meet.css'


function JoinForm() {
  const video: HTMLVideoElement = <video muted={true} autoplay={true} /> as HTMLVideoElement

  navigator.mediaDevices.getUserMedia({'video': true, 'audio': true}).then(stream => {
    video.srcObject = stream
  })

  return <Form>
    <Row>
      <Col>{video}</Col>
      <Col>
        <Form.Group class="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group class="mb-3" controlId="formRoom">
          <Form.Label>Room</Form.Label>
          <Form.Control type="text" placeholder="Enter room to join" />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Col>
    </Row>
  </Form>
}


function App() {
  return <>
    <Container>
      <div class="text-center">
        <h1 class="display-1">F-Meet</h1>
        <p class="lead">A video call application.</p>
      </div>

      <JoinForm/>
    </Container>
  </>
}

render(() => <App />, document.getElementById('app'))
