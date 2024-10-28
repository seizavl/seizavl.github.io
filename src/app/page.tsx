// pages/index.tsx
"use client"

import { Canvas } from '@react-three/fiber';
import { FaTwitter, FaGithub, FaTwitch } from 'react-icons/fa';
import { MdOutlineEventNote } from "react-icons/md";
import '@fontsource/press-start-2p';
import styled from 'styled-components'
import { GradientBackground } from "./background/background"
import Image from 'next/image';
import styles from "./profile/page.module.css"

const ProfileCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.banner}>
        <Image
          src="/banner.jpg"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: '15px 15px 0 0' }}
        />
      </div>
      <div className={styles.profileInfo}>
        <div className={styles.avatarContainer}>
          <Image
            src="/icon.png"
            alt="Avatar"
            width={80}
            height={80}
          />
        </div>
        <h2 className={styles.username}>mao</h2>
        <p className={styles.handle}>@seizavl</p>
        <p className={styles.bio}>22さいです</p>
        <a className={styles.followButton} href="https://x.com/seizavl" target="_blank" rel="noopener noreferrer">
          おうえんする
        </a>
        <div className={styles.tweetContainer}>
          <a className={styles.tweetItem} href="https://x.com/seizavl" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
            <span className={styles.tweetText}>Twitter</span>
          </a>
          <a className={styles.tweetItem} href="https://www.twitch.tv/maovlrt" target="_blank" rel="noopener noreferrer">
            <FaTwitch />
            <span className={styles.tweetText}>Twitch</span>
          </a>
          <a className={styles.tweetItem} href="https://github.com/seizavl" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <span className={styles.tweetText}>GitHub</span>
          </a>
          <a className={styles.tweetItem} href="https://note.com/seizav/" target="_blank" rel="noopener noreferrer">
            <MdOutlineEventNote />
            <span className={styles.tweetText}>NoteでVALORANTの記事を更新中</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', backgroundColor: '#15202B' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <GradientBackground />
      </Canvas>
      <ProfileCard />
    </div>
  );
};

export default HomePage;