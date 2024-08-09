'use client';
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { keyframes } from 'styled-jsx/css';
import starsIcon from '../../../public/svg/social/starsIcon.svg';
import MoonIcon from '../../../public/svg/social/MoonIcon.svg';

const thumbOpacity0to1 = keyframes`
   from {opacity: 1;}
  to {opacity: 0;}
`;

const SwitchBtn = styled((props) => (
  <Switch className='dayNightSwitchBtn' focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  '--MuiSwitch-track-border-radius': '20px',
  width: 60, // Adjusted width
  height: 28, // Adjusted height
  borderRadius: 'var(--MuiSwitch-track-border-radius)',
  padding: '0',
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22, // Adjusted thumb width
    height: 22, // Adjusted thumb height
    backgroundColor: 'white',
    boxShadow: '-1px 1px 3px 0px rgba(121, 164, 253, 1), 1px -1px 2px 0px rgba(163, 194, 255, 1)',
    zIndex: 2,
    '&:before, &:after': {
      content: '""',
      width: '100%',
      height: '100%',
      opacity: 1,
      position: 'absolute',
      borderRadius: '50%',
      transition: 'opacity 1000ms',
    },
    '&:before': {
      backgroundImage: `url("${MoonIcon.src}")`,
      opacity: 0,
      transition: 'opacity 1000ms',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
    },
    '&:after': {
      background: 'linear-gradient(137.79deg, #FFD338 12.41%, #FF9D42 91.44%)',
      opacity: 1,
      transition: 'opacity 1000ms',
      animation: `${thumbOpacity0to1} 1s ease`,
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: '4px 0 0 3px', // Adjusted margin
    transitionDuration: '900ms',
    transform: 'translateX(0px) translateY(-1px)', // Adjusted transform
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '28px', // Adjusted before width
      height: '28px', // Adjusted before height
      top: '-5px',
      right: '-17.5px',
      flexShrink: '0',
      borderRadius: '20px',
      background: 'rgba(243, 243, 243, 1)',
      mixBlendMode: 'lighten',
      filter: 'blur(8px)', // Adjusted blur
      zIndex: -1,
    },
    '& .MuiSwitch-input': {
      left: '-48%',
      zIndex: 10,
    },
    '&.Mui-checked': {
      transform: 'translateX(30px) translateY(-1px)', // Adjusted transform
      '&:before': {
        top: '4px',
        right: '-2px',
        width: '40px', // Adjusted before width when checked
        height: '14px', // Adjusted before height when checked
        background: 'rgba(42, 42, 114, 1)',
        borderRadius: '9px',
        filter: 'blur(5px)', // Adjusted blur
      },
      '& .MuiSwitch-input': {
        left: '-150%',
      },
      '& .MuiSwitch-thumb': {
        width: 22, // Adjusted thumb width when checked
        height: 22, // Adjusted thumb height when checked
        boxShadow: '1px -1px 2px 0px rgba(35, 35, 87, 1)',
        '&:before': {
          backgroundImage: `url("${MoonIcon.src}")`,
          opacity: '1',
          transition: 'opacity 1000ms',
          boxShadow: '-0.6785714030265808px 0.6785714030265808px 2.0357141494750977px 0px #323297',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        },
        '&:after': {
          background: 'linear-gradient(137.79deg, #FFD338 12.41%, #FF9D42 91.44%)',
          opacity: '0',
          transition: 'opacity 1000ms',
        },
      },
      '& + .MuiSwitch-track': {
        backgroundColor: 'rgba(21, 21, 53, 1)',
        opacity: 1,
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '0',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          width: '28px', // Adjusted stars width
          height: '22px', // Adjusted stars height
          left: '8px',
          top: '5px',
          backgroundImage: `url("${starsIcon.src}")`,
        },
      },
    },
  },
  '& .MuiSwitch-track': {
    height: 'auto',
    opacity: 1,
    position: 'relative',
    border: 'solid 2px white', // Adjusted border width
    background: theme.palette.mode === 'dark' ? '#151535' : '#BDD4FF',
    borderRadius: 'var(--MuiSwitch-track-border-radius)',
    transition: theme.transitions.create(['background-color'], {
      duration: 1000,
    }),
  },
}));

import { updateSwitchValue } from '../components/localstorageUtils';

export default function SwitchButton() {
  const [checked, setChecked] = useState(false);
  const [localCheck, setLocalCheck] = useState(false);

  useEffect(() => {
    setLocalCheck(localStorage.getItem('switchValue') === 'true');
  }, []);

  const handleChecked = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    setLocalCheck(isChecked);
    updateSwitchValue(isChecked); // Use the utility function to update localStorage
  };

  return (
    <>
      <SwitchBtn checked={localCheck} onChange={handleChecked} />
    </>
  );
}

