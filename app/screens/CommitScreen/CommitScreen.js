import React, {useEffect, useContext} from 'react';
import {FlatList} from 'react-native';

import {Container, LoadingSpinner, Message} from './CommitScreenStyles';
import ItemSeparator from '../../components/ItemSeparator/ItemSeparator';
import ListItem from '../../components/ListItem/ListItem';
import useRepoSearch from '../../hooks/useRepoSearch';
import LoginContext from '../../context/LoginContext';

export default function CommitScreen({navigation, route}) {
  useEffect(() => {
    response(params);
  }, []);
  const {params} = route;
  const {data, error, loading, response} = useRepoSearch();

  const {auth} = useContext(LoginContext);

  if (!auth.login) {
    navigation.navigate('Login');
    return <LoadingSpinner color="#000" size="large" />;
  }

  if (!loading && error) return <Message>Could not load data</Message>;

  if (loading || !data) return <LoadingSpinner color="#000" size="large" />;

  if (data && data.length > 0)
    return (
      <Container>
        <FlatList
          data={data}
          keyExtractor={(item) => item.sha.toString()}
          renderItem={({item}) => (
            <ListItem
              avatar={item.author.avatar_url}
              message={item.commit.message}
              name={item.author.login}
            />
          )}
          ItemSeparatorComponent={() => <ItemSeparator />}
        />
      </Container>
    );

  if (data && data.author)
    return (
      <Container>
        <ListItem
          avatar={data && data.author.avatar_url}
          message={data && data.commit.message}
          name={data && data.author.login}
        />
      </Container>
    );
}
