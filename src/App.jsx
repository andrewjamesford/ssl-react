import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isSecure, setIsSecure] = useState(false)
  const [protocol, setProtocol] = useState('')
  const [host, setHost] = useState('')

  useEffect(() => {
    setIsSecure(window.location.protocol === 'https:')
    setProtocol(window.location.protocol)
    setHost(window.location.host)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>🔒 SSL Certificate Demo</h1>
        <div className="security-status">
          <h2>Connection Status</h2>
          <div className={`status-indicator ${isSecure ? 'secure' : 'insecure'}`}>
            {isSecure ? '🔒 SECURE (HTTPS)' : '🔓 INSECURE (HTTP)'}
          </div>
          <div className="connection-details">
            <p><strong>Protocol:</strong> {protocol}</p>
            <p><strong>Host:</strong> {host}</p>
            <p><strong>URL:</strong> {window.location.href}</p>
          </div>
        </div>
        <div className="tutorial-info">
          <h2>About This Demo</h2>
          <p>
            This React application demonstrates SSL certificate setup with Nginx and Certbot.
            Follow the tutorial to secure this application with HTTPS.
          </p>
          <div className="steps-preview">
            <h3>Tutorial Steps:</h3>
            <ol>
              <li>Set up the application with Docker</li>
              <li>Configure Nginx for HTTP</li>
              <li>Install Certbot in the container</li>
              <li>Generate SSL certificates</li>
              <li>Configure Nginx for HTTPS</li>
              <li>Test the secure connection</li>
            </ol>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App