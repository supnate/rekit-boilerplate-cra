import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { RedditListPage } from 'src/features/examples/RedditListPage';

describe('examples/RedditListPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      examples: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <RedditListPage {...props} />
    );

    expect(
      renderedComponent.find('.examples-reddit-list-page').getElement()
    ).to.exist;
  });
});
