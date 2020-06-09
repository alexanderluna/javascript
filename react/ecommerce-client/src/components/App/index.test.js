import React from 'react';
import { shallow } from 'enzyme';
import { Switch, Route } from 'react-router-dom';
import App from '.';
import Header from '../header/header';

describe('App component', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  test('renders app component', () => {
    expect(app.debug()).toMatchSnapshot();
  });

  test('renders all sub-components', () => {
    expect(app.find(Header).length).toEqual(1);
    expect(app.find(Switch).length).toEqual(1);
    expect(app.find(Route).length).toEqual(3);
  });
});
