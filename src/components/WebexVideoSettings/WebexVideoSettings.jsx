import React from 'react';
import PropTypes from 'prop-types';
import webexComponentClasses from '../helpers';
import WebexLocalMedia from '../WebexLocalMedia/WebexLocalMedia';
import WebexMeetingControl from '../WebexMeetingControl/WebexMeetingControl';

/**
 * Webex Video Settings component
 *
 * @param {object} props  Data passed to the component
 * @param {string} props.className  Custom CSS class to apply
 * @param {string} props.meetingID  ID of the meeting from which to obtain local media
 * @param {object} props.style  Custom style to apply
 * @returns {object} JSX of the component
 */
export default function WebexVideoSettings({meetingID, className, style}) {
  const cssClasses = webexComponentClasses('video-settings', className);

  return (
    <div className={cssClasses} style={style}>
      <h2>Camera</h2>
      <WebexMeetingControl type="switch-camera" meetingID={meetingID} />
      <div className="media">
        <WebexLocalMedia banner="Preview" mediaType="video" meetingID={meetingID} />
        <div className="preview"><h3>Preview</h3></div>
      </div>
    </div>
  );
}

WebexVideoSettings.propTypes = {
  className: PropTypes.string,
  meetingID: PropTypes.string.isRequired,
  style: PropTypes.shape(),
};

WebexVideoSettings.defaultProps = {
  className: '',
  style: undefined,
};
