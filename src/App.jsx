import './styles/App.css'
import { GoogleLogin } from './service/googleAuth'

function App() {
  return (
    <div className="App">
      <h1 className='text-cyan-400 bg-slate-500'>Wassup Man</h1>
      <GoogleLogin />
    </div>
  )
}

export default App
