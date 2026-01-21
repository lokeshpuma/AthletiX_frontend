import { useEffect, useRef } from 'react';
import './logoAnimation.scss';
import { Link } from 'react-router-dom';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';

const LogoAnimation = () => {
  const containerRef = useRef(null);
  const logoTextRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const logoText = logoTextRef.current;
    if (!container || !logoText) return;

    const brandName = "AthletiX";
    logoText.innerHTML = ""; // Clear existing content
    
    // Define sports equipment icons for each letter
    const sportEquipment = [
      { letter: 'A', icon: <SportsBasketballIcon style={{ color: '#FF5722' }} />, class: 'basketball' },
      { letter: 't', icon: <SportsTennisIcon style={{ color: '#FFEB3B' }} />, class: 'tennis' },
      { letter: 'h', icon: <SportsHockeyIcon style={{ color: '#607D8B' }} />, class: 'hockey' },
      { letter: 'l', icon: <SportsCricketIcon style={{ color: '#3F51B5' }} />, class: 'cricket' },
      { letter: 'e', icon: <FitnessCenterIcon style={{ color: '#9C27B0' }} />, class: 'fitness' },
      { letter: 't', icon: <SportsTennisIcon style={{ color: '#FFEB3B' }} />, class: 'tennis' },
      { letter: 'i', icon: <SportsGolfIcon style={{ color: '#8BC34A' }} />, class: 'golf' },
      { letter: 'X', icon: <SportsFootballIcon style={{ color: '#795548' }} />, class: 'football' },
    ];

    // Create letter elements with animated transformations
    [...brandName].forEach((letter, index) => {
      const letterSpan = document.createElement('span');
      letterSpan.className = 'logo-letter';
      letterSpan.textContent = letter;
      letterSpan.dataset.letter = letter;
      
      // Find matching equipment for this letter
      const equipment = sportEquipment.find(eq => eq.letter === letter) || 
                        sportEquipment[index % sportEquipment.length];
      
      letterSpan.dataset.sport = equipment.class;
      letterSpan.style.animationDelay = `${index * 0.1}s`;
      
      // Create icon element
      const iconDiv = document.createElement('div');
      iconDiv.className = `letter-icon ${equipment.class}`;
      iconDiv.innerHTML = `<svg viewBox="0 0 24 24" class="${equipment.class}">
        <path d="${getIconPath(equipment.class)}" fill="${equipment.icon.props.style.color}" />
      </svg>`;
      
      // Append both to container
      const letterContainer = document.createElement('div');
      letterContainer.className = 'letter-container';
      letterContainer.appendChild(letterSpan);
      letterContainer.appendChild(iconDiv);
      
      logoText.appendChild(letterContainer);
    });

    // Add random sport balls falling animation in background
    const icons = [
      { icon: 'basketball', color: '#FF5722' },
      { icon: 'soccer', color: '#4CAF50' },
      { icon: 'tennis', color: '#FFEB3B' },
      { icon: 'baseball', color: '#2196F3' },
      { icon: 'volleyball', color: '#9C27B0' },
      { icon: 'hockey', color: '#607D8B' },
      { icon: 'cricket', color: '#3F51B5' },
      { icon: 'football', color: '#795548' },
      { icon: 'golf', color: '#8BC34A' }
    ];

    // Create icon elements
    const iconElements = [];
    for (let i = 0; i < 10; i++) {
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'sport-icon';
      
      // Randomly select an icon
      const randomIcon = Math.floor(Math.random() * icons.length);
      const iconElement = document.createElement('div');
      iconElement.innerHTML = `<svg viewBox="0 0 24 24" class="${icons[randomIcon].icon}">
        <path d="${getIconPath(icons[randomIcon].icon)}" fill="${icons[randomIcon].color}" />
      </svg>`;
      
      // Set random position, size and animation
      const size = 8 + Math.random() * 16;
      const startPosition = Math.random() * 100;
      const duration = 3 + Math.random() * 6;
      const delay = Math.random() * 3;
      const rotation = Math.random() * 360;
      
      iconWrapper.style.width = `${size}px`;
      iconWrapper.style.height = `${size}px`;
      iconWrapper.style.left = `${startPosition}%`;
      iconWrapper.style.top = '0';
      iconWrapper.style.animationDuration = `${duration}s`;
      iconWrapper.style.animationDelay = `${delay}s`;
      iconWrapper.style.transform = `rotate(${rotation}deg)`;
      
      iconWrapper.appendChild(iconElement);
      container.appendChild(iconWrapper);
      iconElements.push(iconWrapper);
    }

    // Cleanup
    return () => {
      iconElements.forEach(element => {
        if (container.contains(element)) {
          container.removeChild(element);
        }
      });
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Helper function to get SVG path for each sport icon
  const getIconPath = (iconKey) => {
    switch (iconKey) {
      case 'basketball':
        return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 2.07c3.07.38 5.57 2.52 6.54 5.33L13 5.65V4.07zM8 5.08c1.18-.69 2.54-1.08 4-1.08v2.83L8 10.41V5.08zM5 6.94v4.84l-2.05.58C3.37 10.11 4.03 8.34 5 6.94zM4.63 15.5L7 14.73V19c-1.38-.93-2.37-2.4-2.37-4.17v-.33zm5.37 4.43c-.51.08-1.02.07-1.54 0L8 15.5v-4.54l4 3.32v6.18l-2-.53zM12 18l-3-2.5V10L12 7l3 2.5v5.5L12 18zm5-8.5l-4-3.33V4.29c1.94.34 3.5 1.4 4.66 2.87L17 9.5zm-.5 9c-1.08.26-2.27.32-3.5.05v-5.21l3 2.5v2.66z';
      case 'soccer':
        return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 3.3l3 1.7v3.5l-1.8 1.2-2.2-1-1.5-4.4h2.5zm-7.5 4.2l2.5-.2 1.7 4-1.5 3.2-3.2-1-1.5-2.8 2-3.2zm-.5 4.8l1.8 3 3-.7v3l-3 1.5-2.5-2-1-3 1.7-1.8zm10 1.7l-1-1 1.5-3.2 3.2-1 1.8 2.7-2 3.2-3.5-.7zm5-4.2l-2.5-4-1.3-1.7 1.8-1.5h3l2 2v4l-3 1.2z';
      case 'tennis':
        return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c3.68 0 6.71 2.56 7.77 5.97-.5.98-1.06 1.94-1.71 2.88-.5.71-1.04 1.39-1.59 2.03-1.64 1.94-3.5 3.44-5.53 4.39-1.25.58-2.48.88-3.67.88-.35 0-.69-.03-1.03-.08C4.7 18.48 3 15.47 3 12c0-4.96 4.04-9 9-9zm0 0c-1.2 0-2.38.27-3.5.73 1.3.25 2.53.69 3.66 1.29 1.14.61 2.2 1.41 3.14 2.37 1.16 1.17 2.08 2.55 2.68 4.04.61 1.5.9 3.09.97 4.67.95-.97 1.7-2.06 2.24-3.23.25-.53.46-1.08.62-1.64-1.02-4.45-4.89-7.74-9.54-8.1-.09-.01-.18-.02-.27-.03-.1-.01-.2-.01-.29-.02-.57-.02-1.14.01-1.71.08z';
      case 'baseball':
        return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 5.8c-.51.72-.94 1.49-1.28 2.3-.21.48-.36.97-.46 1.47 1.41.52 2.68 1.33 3.76 2.42-.91.66-1.96 1.15-3.1 1.42.12.69.3 1.35.54 1.98.29.75.65 1.46 1.08 2.11-1.39.68-2.96 1.07-4.63 1.07-.7 0-1.38-.08-2.03-.22.44-.65.8-1.36 1.08-2.11.24-.63.42-1.29.54-1.98-1.13-.27-2.18-.76-3.1-1.42 1.08-1.08 2.36-1.9 3.76-2.42-.1-.5-.25-.99-.46-1.47-.35-.81-.77-1.58-1.28-2.3 1.29-.53 2.7-.83 4.18-.83 1.49 0 2.9.3 4.18.83z';
      case 'volleyball':
        return 'M15 5c-.46 0-.87.36-.87.86 0 1.31-.93 2.44-2.2 2.7.17 0 .34-.02.51-.02 1.53 0 2.87.82 3.63 2.06.11-.27.25-.54.39-.79C17.58 7.6 16.43 5 15 5zm3 8.6c-1.1 0-2-.9-2-2 0-1.31-1.06-2.38-2.37-2.38-1.31 0-2.38 1.06-2.38 2.38 0 1.32-1.07 2.38-2.37 2.38-1.32 0-2.38-1.07-2.38-2.38 0-4.13 3.36-7.5 7.5-7.5 4.14 0 7.5 3.37 7.5 7.5 0 1.1-.9 2-2 2zm-11.5-2c0 1.1-.9 2-2 2s-2-.9-2-2c0-3.68 2.13-6.87 5.23-8.38-.43.66-.77 1.39-1.03 2.14C5.67 6.76 5.01 9.11 5 11.62c.51-.35 1.12-.55 1.75-.55.22 0 .42.03.63.08-.99-.58-1.67-1.67-1.67-2.93 0-.24.07-.45.19-.64.06-.1.13-.2.19-.28.23-.36.64-.58 1.09-.58h.26c.26.04.49.14.68.3.65-.25 1.35-.39 2.08-.39-.84-.6-1.86-.95-2.97-.95-.39 0-.74.05-1.1.13C7.11 5.11 8.5 4.53 10 4.53c1.87 0 3.5.95 4.5 2.39.37-.53.79-1.01 1.28-1.42-1.4-1.66-3.5-2.71-5.83-2.71-3.36 0-6.27 2.16-7.34 5.17.77-.86 1.88-1.4 3.11-1.4 1.88 0 3.47 1.23 4.03 2.94.24-.16.51-.28.8-.37-.2-.56-.32-1.16-.32-1.79 0-.26.02-.52.05-.77-.05-.03-.09-.05-.14-.08-.3.5-.48 1.07-.48 1.7zm5.8 2c-.34-.31-.64-.67-.88-1.07-.15-.24-.27-.49-.38-.76.08-.22.18-.43.3-.63.22-.4.5-.75.83-1.05.38.17.75.36 1.09.59.62.4 1.14.91 1.56 1.5.38.53.69 1.13.9 1.77-.08.3-.19.59-.34.86h.31c1.17 0 2.14-.81 2.41-1.9-.26-.63-.64-1.21-1.11-1.71-.6-.63-1.33-1.13-2.16-1.45-.12-.05-.24-.09-.36-.13-.12.4-.32.77-.58 1.07-.46.51-1.08.84-1.78.87.13-.86.42-1.66.9-2.34-.89-.38-1.87-.58-2.9-.58-.12 0-.24.01-.36.02 1.5.39 2.66 1.64 2.82 3.2.12 1.31.14 3.27-.26 4.37.92-.2 1.73-.69 2.32-1.4.4-.47.67-1.01.8-1.59-.19-.21-.36-.45-.49-.72-.24-.52-.35-1.09-.32-1.66z';
      case 'hockey':
        return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.61 4.04c3.94 4.05 3.9 10.11 0 14.12-4.05 3.94-10.11 3.9-14.12 0l14.12-14.12z';
      case 'cricket':
        return 'M15.04 12.79l-8.5-8.5C6.35 4.1 6.09 4 5.83 4s-0.51 0.1-0.7 0.29l-0.83 0.83c-0.39 0.39-0.39 1.02 0 1.41l8.5 8.5c0.39 0.39 1.02 0.39 1.41 0l0.83-0.83c0.39-0.39 0.39-1.02 0-1.41z';
      case 'fitness':
        return 'M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z';
      case 'football':
        return 'M16.24 11l-2.86-2.86L18.1 3.39l2.86 2.86L16.24 11zM3.88 13.42l2.88 2.88 6.04-6.04-2.88-2.88-6.04 6.04z';
      case 'golf':
        return 'M19.5 18c1.5 0 3 .5 3 2.5h-15c0-2 1.5-2.5 3-2.5h9z M17 5.92L9 2v18h2v-4.03A4.97 4.97 0 0 1 15 17c2.4 0 4.35-1.7 4.8-3.95l-2.8-7.13z';
      default:
        return '';
    }
  };

  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className="logo-animation">
        <div className="logo-container" ref={containerRef}></div>
        <div className="logo-text" ref={logoTextRef}>
          <span>AthletiX</span>
        </div>
      </div>
    </Link>
  );
};

export default LogoAnimation; 