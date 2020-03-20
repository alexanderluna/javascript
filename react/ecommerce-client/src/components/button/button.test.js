import { shallow } from 'enzyme';
import React from 'react';
import Button from './button';

let primary;
let secondary;

beforeEach(() => {
  primary = shallow((<Button type="submit">Primary</Button>));
  secondary = shallow((<Button type="button" secondary>Secondary</Button>));
});

test('Render Button component', () => {
  expect(primary.debug()).toMatchSnapshot();
  expect(secondary.debug()).toMatchSnapshot();
});

test('Button component renders child', () => {
  expect(primary.text()).toEqual('Primary');
  expect(secondary.text()).toEqual('Secondary');
});

test('Button component always has custom-button css class', () => {
  expect(primary.find('button.custom-button').length).toEqual(1);
  expect(secondary.find('button.custom-button').length).toEqual(1);
});

test('Button component renders css classes dynamically', () => {
  expect(primary.find('button.primary').length).toEqual(1);
  expect(primary.find('button.secondary').length).toEqual(0);
  expect(secondary.find('button.secondary').length).toEqual(1);
  expect(secondary.find('button.primary').length).toEqual(0);
});

test('Button renders type for accessability', () => {
  expect(primary.find('button[type="submit"]').length).toEqual(1);
  expect(secondary.find('button[type="button"]').length).toEqual(1);
});
