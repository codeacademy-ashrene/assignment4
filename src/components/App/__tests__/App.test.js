import React from 'react';
import renderer from 'react-test-renderer';
import App from '..';


describe('App', () => {
  it('should render App', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
