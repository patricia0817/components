import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import webexComponentClasses from '../../helpers';
import AdaptiveCardContext from '../context/adaptive-card-context';
import Spacer from '../Spacer/Spacer';

const componentTypes = {};
const containerTypes = {};

export const acPropTypes = {
  actions: 'actions',
  actionStyle: 'action-style',
  altText: 'alt-text',
  associatedInputs: 'associated-inputs',
  backgroundColor: 'background-color',
  backgroundImage: 'background-image',
  bleed: 'bleed',
  card: 'card',
  children: 'children',
  color: 'color',
  containerStyle: 'container-style',
  data: 'data',
  defaultImageSize: 'default-image-size',
  errorMessage: 'error-message',
  fontType: 'font-type',
  height: 'height',
  highlight: 'highlight',
  horizontalAlignment: 'horizontal-alignment',
  iconUrl: 'icon-url',
  id: 'id',
  imageSize: 'image-size',
  imageStyle: 'image-style',
  inputStyle: 'input-style',
  isEnabled: 'is-enabled',
  isMultiline: 'is-multi-line',
  isMultiSelect: 'is-multi-select',
  isRequired: 'is-required',
  isSubtle: 'is-subtle',
  isVisible: 'is-visible',
  italic: 'italic',
  label: 'label',
  maxLength: 'max-length',
  maxLines: 'max-lines',
  maxValue: 'max-value',
  minHeight: 'min-height',
  minValue: 'min-value',
  placeholder: 'placeholder',
  regex: 'regex',
  rtl: 'rtl',
  $schema: '$schema',
  separator: 'separator',
  size: 'size',
  spacing: 'spacing',
  strikethrough: 'strikethrough',
  style: 'style',
  targetElements: 'target-elements',
  text: 'text',
  title: 'title',
  tooltip: 'tooltip',
  type: 'type',
  underline: 'underline',
  url: 'url',
  value: 'value',
  valueOff: 'value-off',
  valueOn: 'value-on',
  version: 'version',
  verticalContentAlignment: 'vertical-content-alignment',
  weight: 'weight',
  width: 'width',
  wrap: 'wrap',
};

/**
 * Registers a component
 *
 * @param {string} type  Type of the component eg. Input.Text
 * @param {Function} component  The component that needs to be registered
 * @param {'horizontal'|'vertical'} [containerType]  Specifies the container type
 */
export function registerComponent(type, component, containerType) {
  componentTypes[type] = component;
  containerTypes[type] = containerType;
}

/**
 * UnknownComponent
 *
 * @param {object} props  React properties
 * @param {object} props.data  Active Cards definition
 * @returns {object} JSX of the component
 */
function UnknownComponent({data}) {
  const [cssClasses] = webexComponentClasses('adaptive-cards-unknown-component');

  return (
    <div>
      <h5>{`${data.type} Component`}</h5>
      <pre className={cssClasses}>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
}
UnknownComponent.propTypes = {
  data: PropTypes.shape(),
};

UnknownComponent.defaultProps = {
  data: undefined,
};

UnknownComponent.acPropTypes = {
  type: acPropTypes.type,
};

/**
 * Component generic component
 *
 * @param {object} props  React properties
 * @param {object} props.data  Active Cards definition
 * @param {string} [props.className]  Custom CSS class to apply
 * @param {object} [props.style]  Custom style to apply
 * @param {object} props.inherited  Inherited properties
 * @param {object} [otherProps]  Other props that must be passed from a parent AC component to a child
 * @returns {object} JSX of the component
 */
export default function Component({
  data, className, style: styleProp, inherited, ...otherProps
}) {
  const {setElement, getIsVisible} = useContext(AdaptiveCardContext);

  useEffect(() => {
    setElement({
      id: data.id,
      isVisible: data.isVisible !== false,
    });
  }, [
    data.id,
    data.isVisible,
    setElement,
  ]);

  const [cssClasses] = webexComponentClasses('ac', className);
  const fallback = data.fallback !== 'drop' && componentTypes[data.fallback];
  const C = componentTypes[data.type] || fallback || UnknownComponent;
  const classes = [];
  const getClass = (propType, value) => (value ? `wxc-ac-${propType}--${String(value).toLowerCase()}` : '');
  const style = {};
  let myInherited = {}; // inherited props that apply to this component
  let childrenInherited = inherited; // inherited props for this component's children

  // handle inherited props
  for (const prop of ['fallback', 'verticalContentAlignment']) {
    const propType = (C.acPropTypes && C.acPropTypes[prop]) || undefined;

    if (propType) {
      if (data[prop] !== undefined) {
        childrenInherited = {...childrenInherited, [prop]: data[prop]};
      } else if (inherited[prop] !== undefined) {
        myInherited = {...myInherited, [prop]: inherited[prop]};
      }
    }
  }

  const dataWithDefaults = {...C.acDefaultProps, ...myInherited, ...data};

  for (const [prop, value] of Object.entries(dataWithDefaults)) {
    const propType = (C.acPropTypes && C.acPropTypes[prop]) || undefined;

    switch (propType) {
      case undefined:
        console.log(`[${data.type}]`, 'Unknown property', prop);
        break;
      case acPropTypes.actions:
      case acPropTypes.altText:
      case acPropTypes.associatedInputs:
      case acPropTypes.backgroundColor:
      case acPropTypes.card:
      case acPropTypes.children:
      case acPropTypes.data:
      case acPropTypes.defaultImageSize:
      case acPropTypes.errorMessage:
      case acPropTypes.iconUrl:
      case acPropTypes.id:
      case acPropTypes.label:
      case acPropTypes.maxLength:
      case acPropTypes.maxLines:
      case acPropTypes.maxValue:
      case acPropTypes.minValue:
      case acPropTypes.placeholder:
      case acPropTypes.regex:
      case acPropTypes.$schema:
      case acPropTypes.separator:
      case acPropTypes.spacing:
      case acPropTypes.style:
      case acPropTypes.isMultiline:
      case acPropTypes.isMultiSelect:
      case acPropTypes.isRequired:
      case acPropTypes.targetElements:
      case acPropTypes.text:
      case acPropTypes.tooltip:
      case acPropTypes.title:
      case acPropTypes.type:
      case acPropTypes.url:
      case acPropTypes.value:
      case acPropTypes.version:
      case acPropTypes.valueOff:
      case acPropTypes.valueOn:
        break;
      case acPropTypes.containerStyle:
        classes.push(getClass(propType, value));
        if (value && value !== 'default') {
          classes.push(getClass('container', 'has-padding'));
        }
        break;
      case acPropTypes.width:
        if (value === 'auto' || value === 'stretch') {
          classes.push(getClass(propType, value));
        } else if (typeof value === 'number') {
          style.flex = data.width;
        } else {
          style.width = data.width;
        }
        break;
      case acPropTypes.height:
        if (value === 'auto' || value === 'stretch') {
          classes.push(getClass(propType, value));
        } else {
          style.height = data.height;
        }
        break;
      case acPropTypes.minHeight:
        style.minHeight = data.minHeight;
        break;
      case acPropTypes.backgroundImage:
        if (typeof value === 'string') {
          style.backgroundImage = `url(${value})`;
        } else if (typeof value === 'object' && value !== null) {
          style.backgroundImage = `url(${value.url})`;

          classes.push(getClass(`${propType}-fill-mode`, value.fillMode));
          classes.push(getClass(`${propType}-horizontal-alignment`, value.horizontalAlignment));
          classes.push(getClass(`${propType}-vertical-alignment`, value.verticalAlignment));
        }
        break;
      case acPropTypes.isVisible:
        classes.push(getClass(propType, getIsVisible(data.id).toString()));
        break;
      default:
        classes.push(getClass(propType, value));
        break;
    }
  }

  const containerType = containerTypes[data.type];

  if (containerType) {
    classes.push(getClass('container', containerType));
  }

  const props = {
    data: {...dataWithDefaults},
    className: `${cssClasses} ${classes.join(' ')}`,
    inherited: childrenInherited,
    style: {...style, ...styleProp},
    ...otherProps,
  };

  const spacer = C.acPropTypes?.spacing && (
    <Spacer
      spacing={data.spacing}
      separator={data.separator}
    />
  );

  return (
    <>
      {spacer}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <C {...props} />
    </>
  );
}

Component.propTypes = {
  data: PropTypes.shape().isRequired,
  className: PropTypes.string,
  inherited: PropTypes.shape().isRequired,
  style: PropTypes.shape(),
  otherProps: PropTypes.shape(),
};

Component.defaultProps = {
  className: undefined,
  style: undefined,
  otherProps: undefined,
};
