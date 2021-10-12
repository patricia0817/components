import React, {useState} from 'react';
import PropTypes from 'prop-types';
import webexComponentClasses from '../helpers';
import {Button, InputField} from '../generic';

/**
 * Webex Meeting Authentication component
 *
 * @param {object} props  Data passed to the component
 * @param {string} props.className  Custom CSS class to apply
 * @param {object} props.style  Custom style to apply
 * @returns {object} JSX of the component
 *
 */
export default function WebexMeetingAuthentication({className, style}) {
  const [name, setName] = useState();
  const [password, setPassword] = useState('');

  const cssClasses = webexComponentClasses('meeting-authentication', className);

  return (
    <div className={cssClasses} style={style}>
      <div className="auth-header">
        <div className="auth-logo" />
        <div className="auth-title">Enter meeting information to join</div>
      </div>
      <form className="form-content">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          Your name
          <InputField type="text" name="name" value={name} onChange={(value) => setName(value)} />
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          Meeting password (required)
          <InputField
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <Button type="primary">Start Meeting</Button>
      </form>
    </div>
  );
}

WebexMeetingAuthentication.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape(),
};

WebexMeetingAuthentication.defaultProps = {
  className: '',
  style: undefined,
};
