// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  Test,
} from './';

export default {
  path: 'test',
  name: 'Test',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'test', name: 'Test', component: Test },
  ],
};
