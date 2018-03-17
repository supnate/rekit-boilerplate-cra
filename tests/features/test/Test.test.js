// import React from 'react';
// import { shallow } from 'enzyme';
// import { expect } from 'chai';
// import { Test } from 'src/features/test';

// describe('test/Test', () => {
//   it('renders node with correct class name', () => {
//     const renderedComponent = shallow(
//       <Test />
//     );

//     expect(
//       renderedComponent.find('.test-test').getElement()
//     ).to.exist;
//   });
// });

import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Test } from '../../../src/features/test';

it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Test />
    );

    expect(
      renderedComponent.find('.test-test').getElement()
    ).toEqual(expect.anything());
//   const div = document.createElement('div');
//   ReactDOM.render(<Test />, div);
//   ReactDOM.unmountComponentAtNode(div);
});
