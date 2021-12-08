import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { array } from 'prop-types';

import SingleCard from './SingleCard';
import { GridItemMedium } from '#app/components/Grid';
import { ServiceContext } from '#contexts/ServiceContext';

const ScrollPromo = styled.div`
  display: flex;
  overflow-wrap: anywhere;

  align-content: ${({ dir }) => (dir === 'ltr' ? 'flex-start' : 'flex-end')};

  width: inherit;

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

const ScrollWrapper = styled.div`
  position: relative;
`;

const ScrollablePromo = ({ blocks }) => {
  const { script, service, dir } = useContext(ServiceContext);
  const threeblocks = blocks.slice(1, 4);
  // IF NO PROMO RETURN NULL
  return (
    <GridItemMedium>
      <ScrollPromo dir={dir} role="list">
        {threeblocks.map((block, index) => {
          return (
            <SingleCard
              block={block}
              dir={dir}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              script={script}
              service={service}
            />
          );
        })}
      </ScrollPromo>
    </GridItemMedium>
  );
};

ScrollablePromo.propTypes = {
  blocks: array.isRequired,
};

export default ScrollablePromo;
