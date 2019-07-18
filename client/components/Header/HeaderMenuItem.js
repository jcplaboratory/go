import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fadeIn } from '../../helpers/animations';

const ListItem = styled.li`
  margin-left: 32px;
  animation: ${fadeIn} 0.8s ease;

  @media only screen and (max-width: 488px) {
    margin-left: 16px;
    font-size: 13px;
  }
`;

const ListLink = styled.div`
  & > a {
    padding-bottom: 1px;
    color: inherit;
    text-decoration: none;
  }
  & > a:hover {
    color: #3CB3A6;
    border-bottom: 1px dotted #3CB3A6;
  }
`;

const HeaderMenuItem = ({ children }) => (
  <ListItem>
    <ListLink>{children}</ListLink>
  </ListItem>
);

HeaderMenuItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderMenuItem;
