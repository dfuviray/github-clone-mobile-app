import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

import AppButton from '../../components/AppButton/AppButton';
import AppErrorText from '../../components/AppErrorText/AppErrorText';
import AppText from '../../components/AppText/AppText';
import {colors} from '../../config/colors';
import {Container} from './RepoScreenStyles';
import useRepoSearch from '../../hooks/useRepoSearch';

// const regEx = /[a-zA-Z][/][a-zA-Z]/;
let schema = yup.object().shape({
  repoName: yup.string().required().label('Repo'),
  // .matches(regEx, 'username and repo must be separated by "/"'),
});

export default function RepoScreen({navigation}) {
  const {data, error, loading, response: loadData} = useRepoSearch();

  return (
    <Container>
      <Formik
        initialValues={{repoName: 'facebook/react-native/commits/master'}}
        validationSchema={schema}
        onSubmit={({repoName}) => navigation.navigate('Commit', repoName)}>
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
              defaultValue="facebook/react-native/commits/master"
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
