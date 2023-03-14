import styles from "@/styles/Navbar.module.css";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li className={styles.navbar__item}>
          <ActiveLink href="/" title="Home" />
        </li>
        <li className={styles.navbar__item}>
          <ActiveLink href="/about" title="About" />
        </li>
        <li className={styles.navbar__item}>
          <ActiveLink href="/contact" title="Contact" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
