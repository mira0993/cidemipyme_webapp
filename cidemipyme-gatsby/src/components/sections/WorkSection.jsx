import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
  CardHeader,
  CardColumns,
} from 'reactstrap';
import cide_fb_1 from 'images/cide_fb_1.jpg';
import cide_fb_2 from 'images/cide_fb_2.jpg';
import cide_fb_3 from 'images/cide_fb_3.jpg';
import cide_fb_4 from 'images/cide_fb_4.jpg';

const workKeyPrefix = 'workSection_';

const workImages = [
  cide_fb_1,
  cide_fb_2,
  cide_fb_3,
  cide_fb_4,
];

const WorkInnerItemPropType = {
  'title': PropTypes.string.isRequired,
  'items': PropTypes.arrayOf(PropTypes.string).isRequired,
}

const WorkPropType = {
  'title': PropTypes.string.isRequired,
  'work_items': PropTypes.arrayOf(PropTypes.shape(WorkInnerItemPropType)).isRequired
}

class WorkSection extends React.Component {
  static propTypes = {
    data: PropTypes.shape(WorkPropType).isRequired
  }

  createCard(title, items, image, key) {
    let textItems = items.map( (text, index) => {
      return (
        <div>
          <p key={`${key}_text_${index}`}>{text}</p>
        </div>
      );
    });

    return (
      <Card key={key}>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardHeader className="card-shadow work-card-header">{title}</CardHeader>
        <CardBody className="card-shadow">
          <CardText className="work-item-text">
            {textItems}
          </CardText>
        </CardBody>
      </Card>
    );
  }

  render() {
    let cards = this.props.data.work_items.map(
      (item, index) => {
        let key = `${workKeyPrefix}card_${index}`;
        return this.createCard(
          item.title,
          item.items,
          workImages[index],
          key
        );
      }
    );

    return (
      <section id="section-work" className="pb_section bg-light">
        <Container>
          <Row>
            <Col lg={12} md={12} sm={0}>
              <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
                {this.props.data.title}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={0}>
              <CardDeck>
                {cards}
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default WorkSection;

export const GraphQlWorkSectionFragment = graphql `
  fragment WorkSectionFragment on InformationJson {
    title
    work_items {
      title
      items
    }
  }
`;
