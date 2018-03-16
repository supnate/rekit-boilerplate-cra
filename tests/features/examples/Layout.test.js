import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Layout } from 'src/features/examples';

describe('examples/Layout', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Layout />
    );

    expect(
      renderedComponent.find('.examples-layout').getElement()
    ).to.exist;
  });
});
