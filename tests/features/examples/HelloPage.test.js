import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HelloPage } from 'src/features/examples/HelloPage';

describe('examples/HelloPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      examples: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HelloPage {...props} />
    );

    expect(
      renderedComponent.find('.examples-hello-page').getElement()
    ).to.exist;
  });
});
