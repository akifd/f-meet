import { createSignal, createEffect, For } from 'solid-js'
import { Row, Col, Form, Button } from 'solid-bootstrap'


function JoinForm() {
  const [stream, setStream] = createSignal<MediaStream>()
  const [devices, setDevices] = createSignal<MediaDeviceInfo[]>()
  const [camera, setCamera] = createSignal<string | null>(null)
  const [microphone, setMicrophone] = createSignal<string | null>(null)

  const videoDevices = () => devices()?.filter(device => device.kind == 'videoinput')
  const audioDevices = () => devices()?.filter(device => device.kind == 'audioinput')

  const video = () => {
    const video = <video muted={true} autoplay={true} /> as HTMLVideoElement
    video.srcObject = stream()
    return video
  }

  createEffect(() => {
    if (videoDevices())
      setCamera(videoDevices()[0].deviceId)
    if (audioDevices())
      setMicrophone(audioDevices()[0].deviceId)
  })

  createEffect(() => {
    const constraints: MediaStreamConstraints = {
      video: true,
      audio: true,
    }

    if (camera())
      constraints.video = {'deviceId': camera()}

    if (microphone())
      constraints.audio = {'deviceId': microphone()}

    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
      setStream(stream)

      if (devices() === undefined)
        navigator.mediaDevices.enumerateDevices().then(setDevices)
    })
  })

  return <Form>
    <Row>
      <Col sm={6}>{video()}</Col>
      <Col sm={6}>
        <Form.Group class="mb-3" controlId="formName">
          <Form.Label>Camera</Form.Label>
          <Form.Select aria-label="Choose camera." onChange={event => setCamera(event.currentTarget.value)} value={camera()}>
            <For each={videoDevices()}>{device => <option value={`${device.deviceId}`}>{device.label}</option>}</For>
          </Form.Select>
        </Form.Group>

        <Form.Group class="mb-3" controlId="formName">
          <Form.Label>Microphone</Form.Label>
          <Form.Select aria-label="Choose microphone." onChange={event => setMicrophone(event.currentTarget.value)} value={microphone()}>
            <For each={audioDevices()}>{device => <option value={`${device.deviceId}`}>{device.label}</option>}</For>
          </Form.Select>
        </Form.Group>

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
