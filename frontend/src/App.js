import { useEffect } from 'react';
import './App.css';
import AllRoutes from './routes/AllRoutes';
import notisocket from './utils/notisocket';


function App() {
  const userid = localStorage.getItem('userid')
  console.log('userid: ', userid);
  useEffect(() => {
    notisocket.emit('userid', userid)
    notisocket.on('hey',(res)=>{
      console.log(res,"adhsfiuadshbfoiuasdhfius")
    })
    return () => {

    };
  })
  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
