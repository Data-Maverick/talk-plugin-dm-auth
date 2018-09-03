import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignInButton.css';

const SignInButton = ({ isLoggedIn, showSignInDialog }) => (
  <div className="talk-stream-auth-sign-in-button">
    <h4>Only Daily Maverick Insiders can comment. Only subscribers can view comments.</h4>
    {!isLoggedIn ? (
      <a
        href="https://dailymaverick.co.za/insider"
        className={styles.button}
        target="_top"
      >
        Become an Insider
      </a>
    ) : null}
  </div>
);

SignInButton.propTypes = {
  isLoggedIn: PropTypes.bool,
  showSignInDialog: PropTypes.func,
};

export default SignInButton;
