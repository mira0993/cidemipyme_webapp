import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Collapse, Button } from 'reactstrap';

const slideCardPrefix = 'slide_card_';

const SlideCard = (props) => {
  const { content, icon, title, cssClassImage, keyPrefix } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const contentParagraphs1 = content.slice(0, 8).map((text, index) => {
    return (
      <div key={`${keyPrefix}1${slideCardPrefix}${index}`}>
        <p>{text}</p>
      </div>
    );
  });

  const contentParagraphs2 = content.length <= 8 ? null :
    content.slice(8).map((text, index) => {
      return (
        <div key={`${keyPrefix}2${slideCardPrefix}${index}`}>
          <p>{text}</p>
        </div>
      );
    });

  return (
    <div>
      <div className="d-lg-flex d-md-block slide_content">
        <div className={`pb_content-media ${cssClassImage}`} />
        <div className="slide_content-text text-center">
          <div className="pb_icon_v1">
            <i className={`flaticon icon-primary-color ${icon}`} />
          </div>
          <h3 className="font-weight-normal mt-0 mb-4">{title}</h3>
          {contentParagraphs1}
          {contentParagraphs2 != null &&
            <>
              <Collapse isOpen={isOpen}>
                {contentParagraphs2}
              </Collapse>
              <Button
                color="primary"
                onClick={toggle}
                color="link">
                {isOpen ? 'Menos' : 'Más'}
              </Button>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default SlideCard;
