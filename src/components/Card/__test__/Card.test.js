/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './../Card';

it('renders Card', () => {
  const props = { title: 'title', content: 'content', date: 'date', status: 'status' };
  const div = document.createElement('div');
  ReactDOM.render(<Card {...props}></Card>, div);
});
