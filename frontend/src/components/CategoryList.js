import React, { Component } from 'react';
import { Container, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = { currentActive: 'All' };
  }

  changeCurrentActive(item) {
    this.setState({ currentActive: item });
  }

  render() {
    const { categories } = this.props;

    return (
      <Container>
        <Breadcrumb>
          {categories.map(item => (
            <BreadcrumbItem key={item} active={item === this.state.currentActive}>
              {
                item === this.state.currentActive ?
                item : <Link to={`${item}`} onClick={() => { this.changeCurrentActive(item); }} >{item}</Link>
              }
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Container>
    );
  }
}

export default CategoryList;
