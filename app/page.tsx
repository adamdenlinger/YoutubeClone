import styles from "./page.module.css";

function Searchbar() {
  return (
    <div>

    </div>
  );
}

function Header() {
  return (
    <div className={styles.headerDiv}>

      <div className={styles.leftDiv}>
        <button className = {styles.hamburgerButton}>
          <img src="Hamburger_icon.svg.png" alt="Hamburger Menu" className = {styles.hamburgerButtonImage}/>
        </button>
        <button className = {styles.youtubeButton}>Youtube</button>
      </div>
      <div className={styles.searchbarDiv}>
        <Searchbar />
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