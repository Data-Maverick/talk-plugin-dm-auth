import React from 'react';
import PropTypes from 'prop-types';

const SignInButton = ({ isLoggedIn, showSignInDialog }) => (
  <div className="talk-stream-auth-sign-in-button">
    <h4>Only Daily Maverick Insiders can comment</h4>
    {!isLoggedIn ? (
      <a
        href="/insider"
        className="btn-full custom-button user_login"
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
