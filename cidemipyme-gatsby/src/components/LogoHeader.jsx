import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fadeIn } from 'react-animations';

const styles = StyleSheet.create({
  logoFadeIn: {
    animationName: fadeIn,
    animationDuration: '2s',
  }
});

class LogoHeader extends React.Component {
  render() {
    return (
      <img
        alt={this.props.altImage}
        src={this.props.imagePath}
        height={this.props.height}
        className={css(styles.logoFadeIn)}/>
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
