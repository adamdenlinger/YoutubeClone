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
        <button className = {styles.youtubeButton}>
             <Image
             className = {styles.youtubeButton}
             src = "/icons/youtubeLogo.jpg"
             alt =  "youtube logo"
             width = {90}
             height = {50}
             />
        </button>
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

      <div className = {styles.videoGrid}>
        {videos.map(video => (
        <Video
          key = {video.id}
          title={video.title}
          thumbnail={video.thumbnail}
          uploadedAt={video.uploadedAt}
          channelName={video.channelName}
          views={video.views}
          duration={video.duration}
        />
      ))}
      </div>
    </div>
  );
}