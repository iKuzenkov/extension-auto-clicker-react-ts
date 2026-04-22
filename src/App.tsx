import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import MoreInfo from './components/MoreInfo/MoreInfo';

function App() {
  return (
    <>
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="more-info" element={<MoreInfo />}></Route>
        </Routes>
      </MemoryRouter>
    </>
  );
}

export default App;
