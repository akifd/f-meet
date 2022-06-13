import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { render } from 'solid-js/web'


function HelloWorld() {
  return <>
    <div class="container">
      <h1 class="display-1">
        F-Meet
      </h1>
      <p class="lead">A video call application.</p>
    </div>
  </>
}

render(() => <HelloWorld />, document.getElementById('app'))
