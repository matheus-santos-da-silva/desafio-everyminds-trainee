import { Link } from 'react-router-dom'; 
'https://nunessports.com/cdn/shop/files/logo_ns-removebg-preview_1_75x@2x.png?v=1698633524';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Link to='/'><img src='https://nunessports.com/cdn/shop/files/logo_ns-removebg-preview_1_75x@2x.png?v=1698633524'alt='Nunes-Sports-Logo'></img></Link>
        <h2>Nunes Sports</h2>
      </div>
      <ul>
        <li>
          <Link to={'/'}>Início</Link>
        </li>
        <li>
          <Link to={'/products/create'}>Criar Produto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;