import PropTypes from 'prop-types';
import React from 'react';
import coparmexLogo from 'images/coparmex_jalisco.png';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

const coparmexKeyPrefix = 'coparmexSection_';

const CoparmexItemPropTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

const CoparmexPropTypes = {
  title: PropTypes.string.isRequired,
  coparmex_items: PropTypes.arrayOf(CoparmexItemPropTypes).isRequired,
}

class CoparmexSection extends React.Component {
  createItemCard(title, icon, text, key) {
    return (
      <Col lg={4} md={12} sm={12} key={key}>
        <div className="media pb_media_v1 mb-5">
          <div className="icon border border-gray rounded-circle d-flex mr-3 display-4 text-primary">
            <i className={`flaticon ${icon}`}/>
          </div>
          <div className="media-body">
            <h3 className="mt-0 pb_font-22">
              {title}
            </h3>
            <p className="pb_font-15">
              {text}
            </p>
          </div>
        </div>
      </Col>
    );
  }

  render() {
    let cards = this.props.data.coparmex_items.map(
      (item, index) => {
        let key = `${coparmexKeyPrefix}card_${index}`;
        return this.createItemCard(
          item.title,
          item.icon,
          item.text,
          key
        );
      }
    );

    return(
      <section id="section-coparmex" className="pb_section bg-light">
        <Container>
          <Row>
            <Col md={10} sm={10}>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal section-header">
                {this.props.data.title}
              </h2>
            </Col>
            <Col md={2} sm={2}>
              <img alt="Coparmex Jalisco Logo" src={coparmexLogo}/>
            </Col>
          </Row>
          <Row>
            {cards}
          </Row>
        </Container>
      </section>
    );
  }
}

export default CoparmexSection;

CoparmexSection.propTypes = {
  data: PropTypes.shape(CoparmexPropTypes).isRequired
};

export const GraphQlCoparmexSectionFragment = graphql `
  fragment CoparmexSectionFragment on InformationJson {
    title
    id
    coparmex_items {
      title
      icon
      text
    }
  }
`;
