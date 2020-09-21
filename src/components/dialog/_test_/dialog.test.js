import React from "react";
import ReactDOM from 'react-dom';
import Dialog from '../dialog';

import { render, cleanup } from '@testing-library/react';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  const selectedLink= {
    name:''
  };

  ReactDOM.render(<Dialog selectedLink={selectedLink}></Dialog>, div);
});

it('renders dialog correctly', () => {
  const {getByTestId} = render(<Dialog selectedLink={{name: 'test'}}></Dialog>)

  expect(getByTestId('dialog-span')).toHaveTextContent('test')
});

it('matches snapshot', () => {
  const tree = renderer.create(<Dialog selectedLink={{ name: "test" }}></Dialog>).toJSON();

  expect(tree).toMatchSnapshot();
});