import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SidePanel } from 'src/features/examples/SidePanel';

describe('examples/SidePanel', () => {
  it('renders node with correct class name', () => {
    const props = {
      examples: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SidePanel {...props} />
    );

    expect(
      renderedComponent.find('.examples-side-panel').getElement()
    ).to.exist;
  });
});
