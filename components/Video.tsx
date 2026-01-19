import styles from './Video.module.css'
import Image from 'next/image';

interface VideoProps {
    id: string;
    title: string;
    thumbnail: string;
    channelName: string;
    views: number;
    uploadedAt: string;
    duration: string;
}

export default function Video({ id, title, thumbnail, channelName, views, uploadedAt, duration }: VideoProps) {
    return (
        <div className={styles.videoDiv}>
            <div className={styles.topDiv}>
                <div className={styles.videoImageDiv}>
                    <img className={styles.videoImage} src={thumbnail}></img>
                </div>
            </div>
            <div className={styles.bottomDiv}>
                <div className={styles.videoInfoDiv}>
                    <div className={styles.profilePictureDiv}>
                        <div className={styles.profilePicturePlaceholder}></div>
                    </div>
                    <div className={styles.videoTextDiv}>
                        <div className={styles.videoTitleDiv}>
                            <h1 className={styles.videoTitle}>{title}</h1>
                            <button className={styles.options}>
                                <Image
                                    className={styles.optionsIcon}
                                    src="/icons/options.png"
                                    alt="option Icon"
                                    width={20}
                                    height={20}
                                />
                            </button>
                        </div>
                        <p className={styles.channelName}>{channelName}</p>
                        <div className = {styles.metricsDiv}>
                            <p className={styles.views}>{views}</p>
                            <p className = {styles.dot}>·</p>
                            <p className={styles.uploadedAt}>{uploadedAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}