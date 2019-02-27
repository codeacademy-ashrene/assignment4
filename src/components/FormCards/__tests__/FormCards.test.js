import React from 'react';
import renderer from 'react-test-renderer';
import FormCards from '..';


describe('FormCards', () => {
  it('should render FormCards', () => {
    const tree = renderer.create(<FormCards />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
