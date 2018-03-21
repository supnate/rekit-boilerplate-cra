import React from 'react';
import { shallow } from 'enzyme';
import { C } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<C />);
  expect(renderedComponent.find('.examples-c')).toHaveLength(1);
});
