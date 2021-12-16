import React from 'react';
import PropTypes from 'prop-types';
import webexComponentClasses from '../../helpers';

import Component from '../Component/Component';
import '../Column/Column';
import '../InputDate/InputDate';
import '../InputNumber/InputNumber';
import '../InputText/InputText';
import '../InputTime/InputTime';
import '../InputToggle/InputToggle';
import '../TextBlock/TextBlock';

/**
 * AdaptiveCard component
 *
 * @param {object} props  React properties
 * @param {object} props.data  Active Cards definition
 * @returns {object} JSX of the component
 */
export default function AdaptiveCard({data}) {
  const [cssClasses] = webexComponentClasses('adaptive-card');

  return (
    <div className={cssClasses}>
      {/* eslint-disable react/no-array-index-key */}
      {data.body.map((item, index) => <Component data={item} key={index} />)}
    </div>
  );
}

AdaptiveCard.propTypes = {
  data: PropTypes.shape().isRequired,
};
