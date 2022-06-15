import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { render } from 'solid-js/web'
import { Container } from 'solid-bootstrap'

import JoinForm from './JoinForm'
import './f-meet.css'


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
