import Main from './main'
import DevDoc from './components/dev_doc'
import { BrowserRouter as Router, Route, Routes, Link,Navigate } from 'react-router-dom';
function App() {

  /*

    Make it obvious that music is playing
    Make it so the whole tile is draggable



  */

  return (
    <Router>
    <Routes>

    <Route path="/" element={<Main/>} />

     
    <Route path='/about_documentation' element = {<DevDoc/>} />


    </Routes>
    </Router>
  );
}

export default App;



