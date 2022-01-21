import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {Template} from 'adaptivecards-templating';
import webexComponentClasses from '../../helpers';
import AdaptiveCardContext from '../context/adaptive-card-context';

import Component, {acPropTypes, registerComponent} from '../Component/Component';
import '../ActionOpenURL/ActionOpenUrl';
import '../ActionSet/ActionSet';
import '../ActionShowCard/ActionShowCard';
import '../ActionSubmit/ActionSubmit';
import '../Column/Column';
import '../ColumnSet/ColumnSet';
import '../Container/Container';
import '../FactSet/FactSet';
import '../Image/Image';
import '../ImageSet/ImageSet';
import '../InputChoiceSet/InputChoiceSet';
import '../InputDate/InputDate';
import '../InputNumber/InputNumber';
import '../InputText/InputText';
import '../InputTime/InputTime';
import '../InputToggle/InputToggle';
import '../RichTextBlock/RichTextBlock';
import '../TextBlock/TextBlock';
import '../TextRun/TextRun';

/**
 * AdaptiveCardInternal component
 *
 * @param {object} props  React properties
 * @param {object} props.data  Active Cards definition
 * @param {string} [props.className]  Custom CSS class to apply
 * @param {object} [props.style]  Custom style to apply
 * @returns {object} JSX of the component
 */
function AdaptiveCardInternal({data, className, style}) {
  const [cssClasses] = webexComponentClasses('adaptive-card', [className, 'wxc-ac-container--has-padding']);

  return (
    <div className={cssClasses} style={style}>
      {/* eslint-disable react/no-array-index-key */}
      {data.body?.map((item, index) => <Component data={item} key={index} />)}
      {data.actions && <Component data={{type: 'ActionSet', actions: data.actions}} />}
    </div>
  );
}

AdaptiveCardInternal.propTypes = {
  data: PropTypes.shape().isRequired,
  className: PropTypes.string,
  style: PropTypes.shape(),
};

AdaptiveCardInternal.defaultProps = {
  className: undefined,
  style: undefined,
};

AdaptiveCardInternal.acPropTypes = {
  type: acPropTypes.type,
  minHeight: acPropTypes.minHeight,
  rtl: acPropTypes.rtl,
  verticalContentAlignment: acPropTypes.verticalContentAlignment,
};

registerComponent('AdaptiveCard', AdaptiveCardInternal, 'vertical');

/**
 * AdaptiveCard component
 *
 * @param {object} props  React properties
 * @param {object} props.template  Adaptive Card template
 * @param {object} [props.context]  Provided data for binding to Adaptive Card
 * @param {string} [props.className]  Custom CSS class to apply
 * @param {object} [props.style]  Custom style to apply
 * @param {Function} [props.onSubmit]  Action to perform on submit
 * @returns {object} JSX of the component
 */
export default function AdaptiveCard({
  template,
  context,
  className,
  style,
  onSubmit,
}) {
  const templateInstance = new Template(template);
  const data = templateInstance.expand({
    $root: context,
  });
  const [inputs, setInputs] = useState({});

  const setValue = (id, value) => {
    setInputs((prevInputs) => {
      const input = prevInputs[id];

      return {
        ...prevInputs,
        [id]: {...input, value},
      };
    });
  };

  const setInput = useCallback((input) => {
    setInputs((prevInputs) => ({...prevInputs, [input.id]: input}));
  }, [setInputs]);

  const getValue = (id, defval = '') => ((id in inputs && inputs[id].value !== undefined) ? inputs[id].value : defval);

  const getAllValues = () => Object.fromEntries(Object.entries(inputs).map(
    ([id, input]) => [id, input.value],
  ));

  const getError = (id) => inputs[id]?.error;

  const validate = () => {
    let valid = true;

    Object.values(inputs).forEach((input) => {
      let error;

      if (input.isRequired && !input.value && input.value !== 0) {
        error = input.errorMessage;
      } else if (input.value < input.min) {
        error = `Minimum value is ${input.min}`;
      } else if (input.value > input.max) {
        error = `Maximum value is ${input.max}`;
      } else if (input.regex && !String(input.value).match(input.regex)) {
        error = input.errorMessage;
      } else if (String(input.value).length > input.maxLength) {
        error = `Maximum length is ${input.maxLength}`;
      }

      valid = valid && !error;
      setInput({...input, error});
    });

    return valid;
  };

  const submit = (values) => onSubmit(values);

  return (
    <AdaptiveCardContext.Provider
      value={{
        setValue,
        getValue,
        getAllValues,
        setInput,
        getError,
        validate,
        submit,
      }}
    >
      <Component data={data} className={className} style={style} />
    </AdaptiveCardContext.Provider>
  );
}

AdaptiveCard.propTypes = {
  template: PropTypes.shape().isRequired,
  context: PropTypes.shape(),
  className: PropTypes.string,
  style: PropTypes.shape(),
  onSubmit: PropTypes.func,
};

AdaptiveCard.defaultProps = {
  className: undefined,
  context: undefined,
  style: undefined,
  onSubmit: undefined,
};
