import React from 'react';

const LogoHeader = ({ altImage, imagePath, height }) => {
  return (
    <img
      alt={altImage}
      src={imagePath}
      height={height ?? '64px'} />
  );
}

export default LogoHeader;