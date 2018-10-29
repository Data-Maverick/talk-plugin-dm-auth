import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignInButton.css';

const SignInButton = ({ isLoggedIn, showSignInDialog }) => (
  <div className="talk-stream-auth-sign-in-button">
    {!isLoggedIn ? (
      <a
        href="https://dailymaverick.co.za/insider"
        className={styles.button}
        target="_top"
      >
        Only Maverick Insiders can comment. Become an Insider
      </a>
    ) : null}
  </div>
);

SignInButton.propTypes = {
  isLoggedIn: PropTypes.bool,
  showSignInDialog: PropTypes.func,
};

export default SignInButton;
