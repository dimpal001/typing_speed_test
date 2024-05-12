import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

const rootElement = document.getElementById('root')
const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) {
  const script = document.createElement('script')
  script.src = `${process.env.PUBLIC_URL}/path-to-react-snap.js` // replace with the actual path
  script.onload = () => {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </React.StrictMode>
    )
  }

  document.body.appendChild(script)
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  )
}
