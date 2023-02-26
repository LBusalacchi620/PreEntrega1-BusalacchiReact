import styles from "./NavBar.module.css";


const Navbar = ({ children }) => {
    return (
      <div>
        <div className={styles.containerNavbar}>
          <img
            src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1676739967/images_fvvncx.jpg"
            alt=""
            style={{ width: "10%", objectFit: "cover", height: "10vh" }}
          />
  
          <ul className={styles.containerList}>
            <li>Todas</li>
            <li>Bebinas</li>
            <li>Lacteos</li>
            <li>Alimentos</li>
            <li>Congelados</li>
            <li>Productos de limpieza</li>
          </ul>
        </div>
        {children}
      </div>
    );
  };
  
  export default Navbar;