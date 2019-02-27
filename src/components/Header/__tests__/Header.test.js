import React from 'react';
import renderer from 'react-test-renderer';
import Header from '..';


describe('Header', () => {
  it('should render Header', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
