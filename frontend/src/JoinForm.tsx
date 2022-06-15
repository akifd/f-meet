import { Row, Col, Form, Button } from 'solid-bootstrap'


function JoinForm() {
  const video: HTMLVideoElement = <video muted={true} autoplay={true} /> as HTMLVideoElement

  navigator.mediaDevices.getUserMedia({'video': true, 'audio': true}).then(stream => {
    video.srcObject = stream
  })

  return <Form>
    <Row>
      <Col sm={6}>{video}</Col>
      <Col sm={6}>
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

export default JoinForm
