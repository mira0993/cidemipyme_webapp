import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import cideServices from 'images/cide_services.png';

const workKeyPrefix = 'workSection_';

const WorkInnerItemPropType = {
  'title': PropTypes.string.isRequired,
  'icon': PropTypes.string.isRequired,
  'items': PropTypes.arrayOf(PropTypes.string).isRequired,
}

const WorkPropType = {
  'title': PropTypes.string.isRequired,
  'work_items': PropTypes.arrayOf(PropTypes.shape(WorkInnerItemPropType)).isRequired
}

class WorkSection extends React.Component {
  createWorkCard(title, icon, items, key) {
    let textItems = items.map((text, index) => (
      <li key={`${key}_text_${index}`}>{text}</li>
    ));
    return (
      <Col lg={6} md={6} sm={12}>
        <div className="media pb_media_v1 mb-5">
          <div className="icon border border-gray rounded-circle d-flex mr-3 display-4 text-primary">
            <i className={`flaticon ${icon}`}/>
          </div>
          <div className="media-body">
          <h3 className="mt-0 pb_font-17">
            {title}
          </h3>
          <ul className="pb_font-14">
            {textItems}
          </ul>
          </div>
        </div>
      </Col>
    );
  }

  render() {
    let cards = this.props.data.work_items.map(
      (item, index) => {
        let key = `${workKeyPrefix}card_${index}`;
        return this.createWorkCard(
          item.title,
          item.icon,
          item.items,
          key
        );
      }
    );

    return (
      <section id="section-work" className="pb_section">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal section-header">
                {this.props.data.title}
              </h2>
            </Col>
          </Row>
          <Row>
            {cards}
          </Row>
          <Row>
            <Col sm={12} md={{size: 8, offset:2}}>
              <img className="services-image" alt="CIDEMiPyMe Diagrama de Servicios" src={cideServices}/>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default WorkSection;

WorkSection.propTypes = {
  data: PropTypes.shape(WorkPropType).isRequired
}

export const GraphQlWorkSectionFragment = graphql `
  fragment WorkSectionFragment on InformationJson {
    title
    work_items {
      title
      icon
      items
    }
  }
`;
