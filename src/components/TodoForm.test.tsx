import React from 'react';
import renderer from 'react-test-renderer';
import TodoForm from './TodoForm';

it('renders correctly', () => {
  const tree = renderer.create(<TodoForm todos={[]} saveTodos={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
