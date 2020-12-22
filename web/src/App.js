import './global/styles.css';

import NavMenu from './components/Nav-Menu/index';
import Storys from './components/storys/index';
import LateralMenu from './components/menu-lateral/index'

function App() {
  return (
    <div className="App">
      <NavMenu />
      <div style={{display: "flex"}}>
      <Storys />
      <LateralMenu />
      </div>
    </div>
  );
}

export default App;
