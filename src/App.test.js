import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('hello world', () => {
  const div = document.createElement('div');
  const t = document.createTextNode('Hello World!');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('hello world 2!!!', () => {
  const div = document.createElement('div');
  const t = document.createTextNode('Hello World!');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
