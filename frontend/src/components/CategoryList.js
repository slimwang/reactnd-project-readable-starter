import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const CategoryList = props => (
  <div>
    <Breadcrumb tag="nav">
      <BreadcrumbItem tag="a" href="#" active>All Categories</BreadcrumbItem>
      <BreadcrumbItem tag="a" href="#">Comedy</BreadcrumbItem>
      <BreadcrumbItem tag="a" href="#">Science Fiction</BreadcrumbItem>
      <BreadcrumbItem tag="a" href="#">Thriller</BreadcrumbItem>
    </Breadcrumb>
  </div>
);

export default CategoryList;
