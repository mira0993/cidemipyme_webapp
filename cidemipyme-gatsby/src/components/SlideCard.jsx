import React from 'react';
import PropTypes from 'prop-types';

const slideCardPrefix = 'slide_card_';

class SlideCard extends React.Component {
  renderContent() {
    return this.props.content.map( (text, index) => {
      return (
        <div key={`${this.props.keyPrefix}${slideCardPrefix}${index}`}>
          <p>{text}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="d-lg-flex d-md-block slide_content">
          <div className={`pb_content-media ${this.props.cssClassImage}`}/>
          <div className="slide_content-text text-center">
            <div className="pb_icon_v1">
              <i className={`flaticon icon-primary-color ${this.props.icon}`}/>
            </div>
            <h3 className="font-weight-normal mt-0 mb-4">{this.props.title}</h3>
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default SlideCard;

SlideCard.propTypes = {
  cssClassImage: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  keyPrefix: PropTypes.string.isRequired
}
