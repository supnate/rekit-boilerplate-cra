import React from 'react';
import { shallow } from 'enzyme';
import { RedditListPage } from '../../../src/features/examples/RedditListPage';

describe('examples/RedditListPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      examples: { redditList: [] },
      actions: {},
    };
    const renderedComponent = shallow(<RedditListPage {...props} />);

    expect(renderedComponent.find('.examples-reddit-list-page').length).toBe(1);
  });

  it('should disable fetch button when fetching reddit', () => {
    const pageProps = {
      examples: {
        redditList: [],
        fetchRedditListPending: true,
      },
      actions: {},
    };
    const renderedComponent = shallow(<RedditListPage {...pageProps} />);

    expect(renderedComponent.find('.btn-fetch-reddit[disabled]').length).toBe(1);
  });

  it('should show error if fetch failed', () => {
    const pageProps = {
      examples: {
        redditList: [],
        fetchRedditListError: new Error('server error'),
      },
      actions: {},
    };
    const renderedComponent = shallow(<RedditListPage {...pageProps} />);

    expect(renderedComponent.find('.fetch-list-error').length).toBe(1);
  });
});
