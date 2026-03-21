import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main.tsx';
import MoreInfo from './components/MoreInfo/MoreInfo.tsx';

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
