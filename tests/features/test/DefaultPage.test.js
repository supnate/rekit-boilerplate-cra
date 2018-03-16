import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/test/DefaultPage';

describe('test/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      test: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.test-default-page').getElement()
    ).to.exist;
  });
});
