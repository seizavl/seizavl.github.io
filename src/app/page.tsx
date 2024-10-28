// pages/index.tsx
"use client"

import { Canvas } from '@react-three/fiber';
import { FaTwitter, FaGithub, FaTwitch } from 'react-icons/fa';
import { MdOutlineEventNote } from "react-icons/md";
import '@fontsource/press-start-2p';
import styled from 'styled-components'
import { GradientBackground } from "./background/background"
import Image from 'next/image';

const ProfileCard = () => {
  
  return (
    <div style={cardContainerStyle}>
      <div style={bannerStyle}></div>
      <div style={profileInfoStyle}>
        <div style={avatarContainerStyle}>
          <Image
            src="/icon.png"
            alt="Avatar"
            style={avatarStyle}
            width={500}
            height={500}
          />
        </div>
        <h2 style={usernameStyle}>mao</h2>
        <div style={menuContainerStyle}>
          <MenuItem href="https://note.com/seizav/" target="_blank">
            <MdOutlineEventNote />
            <span style={menuTextStyle}>Note</span>
          </MenuItem>
          <MenuItem href="https://x.com/seizavl" target="_blank">
            <FaTwitter />
            <span style={menuTextStyle}>Twitter</span>
          </MenuItem>
          <MenuItem href="https://github.com/seizavl" target="_blank">
            <FaGithub />
            <span style={menuTextStyle}>GitHub</span>
          </MenuItem>
          <MenuItem href="https://www.twitch.tv/maovlrt" target="_blank">
            <FaTwitch />
            <span style={menuTextStyle}>Twitch</span>
          </MenuItem>
        </div>
      </div>
    </div>
  );
};


const cardContainerStyle: React.CSSProperties = {
  width: '70%', 
  maxWidth: '400px',
  minWidth: '300px', 
  borderRadius: '15px',
  backgroundColor: '#000',
  color: '#FFF',
  fontFamily: '"Press Start 2P", Arial, sans-serif',
  overflow: 'hidden',
  outline: '1px solid #fff',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  zIndex: 10,
};

const bannerStyle: React.CSSProperties = {
  width: '100%',
  height: '120px',
  backgroundColor: '#5c658b',
};

const profileInfoStyle: React.CSSProperties = {
  padding: '20px',
  textAlign: 'left',
};

const avatarContainerStyle: React.CSSProperties = {
  margin: '0 auto',
  width: '100px',
  height: '100px',
  borderRadius: '50px',
  overflow: 'hidden',
  outline: '2px solid #fff',
  marginTop: '-50px',
};

const avatarStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const usernameStyle: React.CSSProperties = {
  fontSize: '1rem',
  margin: '15px 0 5px',
  color: '#F0F8FF',
  textAlign: 'center',
};

const menuContainerStyle: React.CSSProperties = {
  display: "block",
  flexDirection: 'column',
  alignItems: 'left',
  marginTop: '20px',
};

const menuTextStyle: React.CSSProperties = {
  color: '#F0F8FF',
};

const MenuItem = styled.a`
  color: #F0F8FF;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 40px;
  font-size: 0.7rem;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, width 0.2s ease;
  width: auto;

  &:hover {
    transform: translateY(-1px) scale(1.01);
    margin-left: -20px;
    margin-right: -20px;
  }
`;

const HomePage = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <GradientBackground />
      </Canvas>
      <ProfileCard />
    </div>
  );
};

export default HomePage;
