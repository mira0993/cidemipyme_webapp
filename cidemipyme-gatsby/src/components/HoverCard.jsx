import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'reactstrap';

const hoverCardKeyPrefix = 'hoverCard_';

class HoverCard extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  renderText() {
    return this.props.text.map( (paragraph, index) => {
      return <p key={`${this.props.keyPrefix}${hoverCardKeyPrefix}${index}`}>{paragraph}</p>;
    });
  }

  render() {
    let paragraphs = this.renderText();
    let cssHover = this.state.collapse ? 'hover': '';

    return (
      <Col onMouseEnter={this.toggle} onMouseLeave={this.toggle}>
        <div className={`post-module ${cssHover}`}>
          <div className="thumbnail">
            <img src={this.props.image}/>
          </div>
            <div className="post-content">
              <h1 className="title">{this.props.title}</h1>
                <div className="description">
                  {paragraphs}
                </div>
            </div>
        </div>
      </Col>
    );
  }
}

export default HoverCard;

HoverCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  keyPrefix: PropTypes.string.isRequired,
};
