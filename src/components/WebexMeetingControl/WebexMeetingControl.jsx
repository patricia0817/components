import React from 'react';
import PropTypes from 'prop-types';
import {MeetingControlState} from '@webex/component-adapter-interfaces';

import webexComponentClasses from '../helpers';
import {useMeetingControl} from '../hooks';
import Button from '../generic/Button/Button';
import Icon from '../generic/Icon/Icon';
import Select from '../generic/Select/Select';

const controlTypeToButtonType = {
  JOIN: 'join',
  CANCEL: 'cancel',
  CLOSE: 'ghost',
  TOGGLE: 'default',
};

/**
 * renderButton renders a control button
 *
 * @param {Function} sc  CSS subclass function
 * @param {Function} action  Adapter control callback
 * @param {object} display  Display data of the control
 * @param {object} style  Custom style to apply
 * @param {boolean} showText  Flag that indicates whether to display text on control buttons
 * @param {boolean} asItem  Render control as an item in a list
 * @returns {object} JSX of the component
 */
function renderButton(sc, action, display, style, showText, asItem) {
  const {
    icon,
    type,
    text,
    tooltip,
    hint,
  } = display;
  const isDisabled = display.state === MeetingControlState.DISABLED;

  let output;

  if (asItem) {
    output = (
      /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
      <div onClick={action} title={tooltip} role="button" tabIndex="0" style={style}>
        {icon && <Icon name={icon} size={14} className={sc('item-button-icon')} />}
        <span className={sc('item-button-text')}>{text}</span>
      </div>
    );
  } else {
    output = (
      <Button
        className={sc('control-button')}
        type={controlTypeToButtonType[type] || 'default'}
        isDisabled={isDisabled}
        onClick={action}
        ariaLabel={hint}
        tooltip={tooltip}
      >
        {icon && <Icon name={icon} size={24} />}
        {(showText || !icon) && text && <span className={sc('button-text')}>{text}</span>}
      </Button>
    );
  }

  return output;
}

/**
 * renderDropdown renders controls dropdown
 *
 * @param {Function} sc  CSS subclass function
 * @param {Function} action  Adapter control callback
 * @param {object} display  Display data of the control
 * @param {object} style  Custom style to apply
 * @returns {object} JSX of the component
 */
function renderDropdown(sc, action, display, style) {
  const {
    options, noOptionsMessage, selected, tooltip,
  } = display;

  return (
    <Select
      className={sc('control-select')}
      style={style}
      value={selected || ''}
      onChange={(id) => action(id)}
      options={options?.length === 0 ? [{value: '', label: noOptionsMessage}] : options}
      disabled={!options?.length}
      tooltip={tooltip}
    />
  );
}

/**
 * WebexMeetingControl component represents an action that can
 * be taken in a meeting.
 *
 * @param {object} props  Data passed to the component
 * @param {boolean} [props.asItem=false]  Render control as an itemin a list
 * @param {string} [props.className]  Custom CSS class to apply
 * @param {string} props.meetingID  ID of the meeting
 * @param {boolean} [props.showText=true]  Flag that indicates whether to display text on control buttons
 * @param {object} [props.style]  Custom style to apply
 * @param {string} props.type  Name of the control as defined in adapter
 * @returns {object} JSX of the component
 */
export default function WebexMeetingControl({
  asItem,
  className,
  meetingID,
  showText,
  style,
  type,
}) {
  const [action, display] = useMeetingControl(type, meetingID);

  const [cssClasses, sc] = webexComponentClasses(
    'meeting-control',
    className,
    {'as-item': asItem},
  );

  let output;

  if (!display || Object.keys(display).length === 0) {
    output = '';
  } else if (display.type === 'MULTISELECT') {
    output = renderDropdown(sc, action, display, style);
  } else {
    output = renderButton(sc, action, display, style, showText, asItem);
  }

  return <div className={cssClasses}>{output}</div>;
}

WebexMeetingControl.propTypes = {
  asItem: PropTypes.bool,
  className: PropTypes.string,
  meetingID: PropTypes.string.isRequired,
  showText: PropTypes.bool,
  style: PropTypes.shape(),
  type: PropTypes.string.isRequired,
};

WebexMeetingControl.defaultProps = {
  asItem: false,
  className: '',
  showText: true,
  style: undefined,
};
