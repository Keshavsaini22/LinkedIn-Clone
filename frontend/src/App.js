import './App.css';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import AllRoutes from './routes/AllRoutes';
import socketIO from 'socket.io-client'

// const ENDPOINT='http://localhost:8081/'
// const socket=socketIO(ENDPOINT,{transports:['websocket']})

function App() {
  // socket.on('connection',()=>{

  // })
  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
