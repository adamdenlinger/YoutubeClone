import styles from "./page.module.css";
import Image from "next/image"; 
import Video from "@/components/Video";
import { videos } from "@/data/videos";

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
      <Video id={videos[0].id} title={videos[0].title} thumbnail={videos[0].thumbnail} channelName={videos[0].channelName} views={videos[0].views} uploadedAt={videos[0].uploadedAt} duration={videos[0].duration} />
    </div>
  );
}