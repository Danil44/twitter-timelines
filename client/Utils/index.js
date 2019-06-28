import { checkPropTypes } from 'prop-types';

export const checkProps = (component, expectedProps) => {
  const propsErrors = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name,
  );
  return propsErrors;
};
