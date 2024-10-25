import { mount } from 'svelte'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/flatly/bootstrap.min.css'
import './app.css'

import App from './App.svelte'

const app = mount(App, {
	target: document.getElementById('app')!,
})

export default app
