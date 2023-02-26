import styles from "./NavBar.module.css";
import CardWidget from "../CardWidget/CardWidget";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <img
          src="https://res.cloudinary.com/dxf8ebmi7/image/upload/v1677416673/v83ljquhstuhe6zv8zih.png"
          alt="Logo Diarco"
          style={{ width: "10%", objectFit: "cover", height: "5vh" }}
        />

        <ul className={styles.containerList}>
          <li>Todas</li>
          <li>Bebinas</li>
          <li>Lacteos</li>
          <li>Alimentos</li>
          <li>Congelados</li>
          <li>Productos de limpieza</li>
        </ul>
        <CardWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
