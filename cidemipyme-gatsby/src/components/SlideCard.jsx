import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Collapse, Button } from 'reactstrap';

const slideCardPrefix = 'slide_card_';

const SlideCardContent = (props) => {
  const { keyPrefix, sections } = props;
  const content = sections.map((section, sectionIndex) => {
    return (
      <div key={`${keyPrefix}${slideCardPrefix}${sectionIndex}`}>
        {section && <p className="pb_font-18">{section.title}</p>}
        {
          section.items.map((item, itemIndex) =>
            <p
              className="text-secondary pb_font-15"
              key={`${keyPrefix}1${slideCardPrefix}${sectionIndex}${itemIndex}`}>
              {item}
            </p>
          )
        }
      </div>
    );
  });
  return <>{content}</>;
}

const SlideCard = (props) => {
  const { visible, collapsed, icon, title, cssClassImage, keyPrefix } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const visibleContent = <SlideCardContent sections={visible} keyPrefix={`${keyPrefix}1`} />
  const collapsedContent = collapsed != null
    ? <SlideCardContent sections={collapsed} keyPrefix={`${keyPrefix}2`} />
    : null;

  return (
    <div>
      <div className="d-lg-flex d-md-block slide_content">
        <div className={`pb_content-media ${cssClassImage}`} />
        <div className="slide_content-text text-center">
          <div className="pb_icon_v1">
            <i className={`flaticon icon-primary-color ${icon}`} />
          </div>
          <h3 className="font-weight-normal mt-0 mb-4">{title}</h3>
          {visibleContent}
          {collapsedContent != null &&
            <>
              <Collapse isOpen={isOpen}>
                {collapsedContent}
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
