import React from 'react';
import { shallow } from 'enzyme';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Header from './components/header/header';

describe('App component', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  test('renders app component', () => {
    expect(app.debug()).toMatchSnapshot();
  });

  test('currentUser is set to null', () => {
    expect(app.state()).toEqual({ currentUser: null });
  });

  test('renders all sub-components', () => {
    expect(app.find(Header).length).toEqual(1);
    expect(app.find(Switch).length).toEqual(1);
    expect(app.find(Route).length).toEqual(3);
  });
});
