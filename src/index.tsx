import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import App from './App'
import reportWebVitals from './reportWebVitals'

import './index.css'

// Set the default base URL for axios requests
axios.defaults.baseURL = process.env.REACT_APP_RANDOM_API

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
reportWebVitals()
