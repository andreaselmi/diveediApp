import React from 'react';
import {TextInput} from 'react-native-paper';

const AppTextInput = ({
  clearTextButton,
  clearTextFn,
  iconName,
  iconColor,
  ...restProps
}) => {
  return (
    <TextInput
      left={iconName && <TextInput.Icon name={iconName} color={iconColor} />}
      right={
        clearTextButton && (
          <TextInput.Icon
            name="close"
            onPress={clearTextFn}
            color={iconColor}
          />
        )
      }
      {...restProps}
    />
  );
};

export default AppTextInput;
