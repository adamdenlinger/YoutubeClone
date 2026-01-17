import styles from "./page.module.css";
import Image from "next/image";

function Searchbar() {
  return (
    <div className={styles.searchbar}>
      <input type="text" placeholder="Search" className={styles.searchInput} />
      <button className={styles.searchButton}>
        <Image
          src="/icons/SearchIcon.webp"
          alt="Search Icon"
          width={30}
          height={30}
        />
      </button>
    </div>
  );
}

function Header() {
  return (
    <div className={styles.headerDiv}>

      <div className={styles.leftDiv}>
        <button className = {styles.hamburgerButton}>
          <Image
            className = {styles.hamburgerIcon}
            src="/icons/HamburgerMenu.png"
            alt="Hamburger Icon"
            width={30}
            height={30}
          />
        </button>
        <button className = {styles.youtubeButton}>Youtube</button>
      </div>
      <div className={styles.middleDiv}>
        <div className = {styles.searchbarDiv}>
          <Searchbar />
        </div>
      </div>
      <div className={styles.rightDiv}>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>







    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}