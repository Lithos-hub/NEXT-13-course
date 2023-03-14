import styles from "@/styles/Navbar.module.css";
import ActiveLink from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        {menuItems.map(({ text, href }) => (
          <li>
            <ActiveLink href={href} title={text} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
