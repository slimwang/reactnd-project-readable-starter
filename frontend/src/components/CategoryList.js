import React, { Component } from 'react';
import { Container, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as API from '../utils/api';
import { getCategories } from '../actions';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = { currentActive: 'All' };
  }

  componentDidMount() {
    API.getCategories().then(res => this.props.dispatch(getCategories(res)));
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
                item : <Link to={`/${item}`} onClick={() => { this.changeCurrentActive(item); }} >{item}</Link>
              }
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories.reduce((accumulator, c) => {
      accumulator.push(c.name);
      return accumulator;
    }, ['All']),
  };
}

export default connect(mapStateToProps)(CategoryList);
