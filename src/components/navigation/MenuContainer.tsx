import { useState } from 'react';
import Menu from './Menu';
import './MenuStyle.css';

export default function MenuContainer() {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <div className="layout">
      <div className="navigation">
        <p>BOCAL</p>
        <button
          type="button"
          onClick={() => setDisplayMenu((prevState) => !prevState)}
          className="nav-button"
        >
          <img src="/menu.png" width="40" />
        </button>
      </div>
      {displayMenu ? <Menu setDisplayMenu={setDisplayMenu} /> : null}
    </div>
  );
}
