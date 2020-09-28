import React from 'react';
import { graphql } from 'gatsby';
import {
  Col,
  Container,
  Row,
  Card,
  CardTitle,
  CardColumns,
  CardText,
} from 'reactstrap';
import cide_talento from 'images/cide_talento_300.png';
import cce_logo from 'images/cce_logo.png';

const methodologiesKeyPrefix = 'methodologiesSection_';
const methodologiesImages = {
  cce: cce_logo,
  cidetalento: cide_talento,
};

const methodologiesIcons = {
  cce: 'flaticon-032-growth',
  business_architecture: 'flaticon-027-creative',
  growth_strategy: 'flaticon-010-website-1',
  cidetalento: 'flaticon-028-connection',
  human_capital: 'flaticon-005-target',
};


const CardWithImage = (props) => {
  const { title, content, id, className } = props;
  return (
    <Card className={`text-center card-box  pb_media_v2 ${className}`}>
      <div className="icon  mr-3 display-1 mx-auto mb-4">
        <img src={methodologiesImages[id]} width={80} />
      </div>

      <CardTitle className="pl-1 pr-1 pb_font-20">{title}</CardTitle>
      <CardText className="pl-2 pr-2 pb_font-15">
        {
          content.map(text =>
            <p key={`${methodologiesKeyPrefix}card_${id}_p`}>
              {text}
            </p>
          )
        }
      </CardText>
    </Card>
  );
}

const CardWithIcon = (props) => {
  const { title, content, id, className } = props;
  return (
    <Card className={`text-center card-box  pb_media_v2 ${className}`}>
      <div className="icon  mr-3 display-1 mx-auto mb-4">
        <i className={`flaticon ${methodologiesIcons[id]}`} />
      </div>
      <CardTitle className="pl-1 pr-1 pb_font-20">{title}</CardTitle>
      <CardText className="pl-2 pr-2 pb_font-15">
        {
          content.map(text =>
            <p key={`${methodologiesKeyPrefix}card_${id}_p`}>
              {text}
            </p>
          )
        }
      </CardText>
    </Card>
  );
}

const MethodologiesSection = (props) => {
  const { title, methodologies } = props;
  console.log(methodologies);
  return (
    <section id="section-methodologies" className="pb_section">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="mt-0 heading-border-top mb-3 font-weight-normal">
              {title}
            </h2>
          </Col>
        </Row>
        <CardColumns>
          <CardWithImage {...methodologies.cce} className="methodology-card-cce" />
          <CardWithIcon {...methodologies.business_architecture} className="methodology-card-business" />
          <CardWithIcon {...methodologies.growth_strategy} className="methodology-card-growth" />
          <CardWithImage {...methodologies.cidetalento} className="methodology-card-cidetalento" />
          <CardWithIcon {...methodologies.human_capital} className="methodology-card-human-capital" />
        </CardColumns>
      </Container>
    </section>
  );
}

export default MethodologiesSection;


export const GraphQlMethodologiesSectionFragment = graphql`
  fragment MethodologiesSectionFragment on InformationJson {
    title
    methodologies {
      cce {
        id
        title
        content
      }
      business_architecture {
        id
        title
        content
      }
      cidetalento {
        id
        title
        content
      }
      growth_strategy {
        id
        title
        content
      }
      human_capital {
        id
        title
        content
      }
    }
  }
`;
