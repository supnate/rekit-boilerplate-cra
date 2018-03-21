import React from 'react';
import { shallow } from 'enzyme';
import { Hello } from '../../../src/features/home';

describe('home/Hello', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(<Hello />);

    expect(renderedComponent.find('.home-hello').length).toBe(1);
  });
});
