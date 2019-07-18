import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReCaptcha from './ReCaptcha';
import showRecaptcha from '../../helpers/recaptcha';

const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px 0 ${({ isAuthenticated }) => (isAuthenticated ? '8px' : '24px')};
  background-color: white;

  a {
    text-decoration: none;
    color: #2196f3;
  }
`;

const Text = styled.p`
  font-size: 13px;
  font-weight: 300;
  color: #666;

  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

class Footer extends Component {
  componentDidMount() {
    showRecaptcha();
  }

  render() {
    return (
      <Wrapper isAuthenticated={this.props.isAuthenticated}>
        {!this.props.isAuthenticated && <ReCaptcha />}
        <Text>
          Powered by {' '}
          <a href="//kutt.it" title="Kutt.it" target="_blank">
            Kutt.it
          </a>
          .{' | '}
          <a
            href="https://github.com/jcplaboratory/go"
            title="GitHub"
            target="_blank" // eslint-disable-line react/jsx-no-target-blank
          >
            GitHub
          </a>
          {' | '}
          <a href="/report" title="Report abuse">
            Report Abuse
          </a>
          {' | '}
          <a href="https://www.jcplaboratory.org/contact-us/" title="Contact Us">
            Contact Us
          </a>
        </Text>
      </Wrapper>
    );
  }
}

Footer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({ isAuthenticated });

export default connect(mapStateToProps)(Footer);
