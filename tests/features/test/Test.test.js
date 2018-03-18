import React from 'react';
import { shallow } from 'enzyme';
import { Test } from '../../../src/features/test';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Test />);
  expect(renderedComponent.find('.test-test').length).toBe(1);
});
