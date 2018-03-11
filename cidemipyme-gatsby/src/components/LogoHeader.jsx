import React from 'react';
import PropTypes from 'prop-types';


class LogoHeader extends React.Component {
  static defaultProps = {
    altImage: '',
    height: '64px'
  }

  static propTypes = {
    imagePath: PropTypes.string.isRequired,
    altImage: PropTypes.string,
    height: PropTypes.string
  }

  render() {
    return (
        <img alt={this.props.altImage} src={this.props.imagePath} height={this.props.height}></img>
    );
  }
}

export default LogoHeader;
