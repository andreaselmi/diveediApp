import React from 'react';
import {View, StyleSheet} from 'react-native';
import {HelperText} from 'react-native-paper';
import {useFormikContext} from 'formik';

//components
import TextInput from './TextInput';

const FormField = ({name, style, ...restProps}) => {
  const {touched, errors} = useFormikContext();

  return (
    <View style={[styles.container, style]}>
      <TextInput {...restProps} style={style} />
      {errors[name] && touched[name] && (
        <HelperText type="error" visible={true}>
          {errors[name]}
        </HelperText>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default FormField;
