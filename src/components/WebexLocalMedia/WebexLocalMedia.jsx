import React, {useRef, JSX} from 'react';
import PropTypes from 'prop-types';
import {Spinner} from '@momentum-ui/react';

import Banner from '../generic/Banner/Banner';
import WebexAvatar from '../WebexAvatar/WebexAvatar';
import webexComponentClasses from '../helpers';
import {PHONE_LARGE} from '../breakpoints';
import {
  useElementDimensions,
  useMe,
  useMeeting,
  useStream,
} from '../hooks';

/**
 * Webex Local Media component displays the user's local video or local share.
 *
 * @param {object} props  Data passed to the component
 * @param {JSX.Element} props.banner  Content of the banner
 * @param {string} props.className  Custom CSS class to apply
 * @param {string} props.mediaType  Type of local media to display
 * @param {string} props.meetingID  ID of the meeting from which to obtain local media
 * @param {object} props.style  Custom style to apply
 * @returns {object} JSX of the component
 */
export default function WebexLocalMedia({
  banner,
  className,
  mediaType,
  meetingID,
  style,
}) {
  const [mediaRef, {width}] = useElementDimensions();
  const {localVideo, localShare} = useMeeting(meetingID);
  const ref = useRef();
  const {ID} = useMe();

  let stream;

  switch (mediaType) {
    case 'video':
      stream = localVideo.stream;
      break;
    case 'screen':
      stream = localShare?.stream;
      break;
    default:
      break;
  }

  useStream(ref, stream);

  const cssClasses = webexComponentClasses('local-media', className, {
    desktop: width >= PHONE_LARGE,
    'no-media': !stream,
  });
  let content;

  if (stream) {
    content = (
      <>
        {banner && <Banner className="my-preview">{banner}</Banner>}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video ref={ref} playsInline autoPlay />
      </>
    );
  } else {
    content = ID ? <WebexAvatar personID={ID} displayStatus={false} /> : <Spinner />;
  }

  return (
    <div ref={mediaRef} className={cssClasses} style={style}>
      {content}
    </div>
  );
}

WebexLocalMedia.propTypes = {
  banner: PropTypes.node,
  className: PropTypes.string,
  mediaType: PropTypes.oneOf(['video', 'screen']),
  meetingID: PropTypes.string.isRequired,
  style: PropTypes.shape(),
};

WebexLocalMedia.defaultProps = {
  banner: '',
  className: '',
  mediaType: 'video',
  style: undefined,
};
