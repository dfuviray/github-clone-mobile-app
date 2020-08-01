import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Text} from 'react-native';

import AppButton from '../../components/AppButton/AppButton';
import AppErrorText from '../../components/AppErrorText/AppErrorText';
import AppText from '../../components/AppText/AppText';
import {Container} from './RepoScreenStyles';

const regEx = /[a-zA-Z][/][a-zA-Z]/;
let schema = yup.object().shape({
  repoName: yup
    .string()
    .required()
    .label('Repo')
    .matches(regEx, 'username and repo must be separated by "/"'),
});

export default function RepoScreen() {
  return (
    <Container>
      <Formik
        initialValues={{repoName: 'facebook/react-native'}}
        validationSchema={schema}
        onSubmit={(values) => console.log(values)}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          setFieldTouched,
          isSubmitting,
        }) => (
          <>
            <AppText
              defaultValue="facebook/react-native"
              name="repoName"
              onChangeText={handleChange('repoName')}
              onBlur={() => setFieldTouched('repoName')}
              placeholder="username/repo"
            />
            <AppErrorText error={errors.repoName} />

            <AppButton label="submit" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Container>
  );
}
