import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { CounterPage } from 'src/features/examples/CounterPage';

describe('examples/CounterPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      examples: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <CounterPage {...props} />
    );

    expect(
      renderedComponent.find('.examples-counter-page').getElement()
    ).to.exist;
  });
});
