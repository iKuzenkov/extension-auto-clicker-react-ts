import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import MoreInfo from './components/MoreInfo/MoreInfo';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="more-info" element={<MoreInfo />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
