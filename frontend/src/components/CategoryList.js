import React, { Component } from 'react';
import { Container, Breadcrumb, BreadcrumbItem } from 'reactstrap';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = { currentActive: 'All' };
  }

  render() {
    const { categories } = this.props;
    const { currentActive } = this.state;

    return (
      <Container>
        <Breadcrumb>
          {categories.map(item => (
            <BreadcrumbItem active={item === currentActive}><a href={`#${item}`}>{item}</a></BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Container>
    );
  }
}

export default CategoryList;
