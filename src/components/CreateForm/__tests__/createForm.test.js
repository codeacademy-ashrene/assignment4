import React from 'react';
import renderer from 'react-test-renderer';
import CreateForm from '..';


describe('CreateForm', () => {
  it('should render FormCards', () => {
    const tree = renderer.create(<CreateForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
