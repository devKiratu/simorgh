import React from 'react';
import styled from '@emotion/styled';
import { pathOr } from 'ramda';
import SingleCard from './SingleCard';
import data from './testData';

const Scroll = styled.div`
  display: flex;
  align-content: ${({ dir }) => (dir === 'ltr' ? 'flex-start' : 'flex-end')};
  overflow-x: scroll;

  /* Avoid using smooth scrolling as it causes accessibility issues */
  scroll-behavior: auto;
  -webkit-overflow-scrolling: touch;

  /* Hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollablePromo = () => {
  // console.log(data);
  const blocks = pathOr('', ['model', 'blocks'], data).slice(2);
  const dir = 'ltr';
  return (
    <Scroll dir={dir} role="list">
      {blocks.map((card, index) => {
        console.log(card);
        return (
          <SingleCard
            block={card}
            dir={dir}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          />
        );
      })}
    </Scroll>
  );
};

export default ScrollablePromo;
