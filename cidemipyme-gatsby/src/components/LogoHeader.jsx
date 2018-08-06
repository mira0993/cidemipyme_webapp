import React from 'react';
import PropTypes from 'prop-types';


class LogoHeader extends React.Component {
  render() {
    return (
      <img
        alt={this.props.altImage}
        src={this.props.imagePath}
        height={this.props.height}/>
    );
  }
}

export default LogoHeader;

LogoHeader.propTypes = {
  imagePath: PropTypes.string.isRequired,
  altImage: PropTypes.string,
  height: PropTypes.string
}

LogoHeader.defaultProps = {
  altImage: '',
  height: '64px'
}
