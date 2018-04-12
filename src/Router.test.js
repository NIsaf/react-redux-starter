import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import Router from './Router';
import NotFound from './views/not_found';

it('renders without crashing', () => {
  shallow(<Router />);
});

it('renders a 404 page on incorrect routes', () => {
  const wrapper = shallow(<Router />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  expect(pathMap['*']).toBe(NotFound);
});