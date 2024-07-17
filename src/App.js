import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Pages/Homepage';

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
       
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
  );
}

export default App;
