import React from 'react';
import {
  InputGroup, InputGroupAddon, Input, Button, Row, Col
} from 'reactstrap';


class CompanySearchBar extends React.Component {
  render() {
    return (
      <InputGroup>
        <Input placeholder="Introduce tu búsqueda aquí" />
        <InputGroupAddon addonType="append">
          <Button>Buscar</Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

export default CompanySearchBar;
