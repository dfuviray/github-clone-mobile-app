import React, {useEffect} from 'react';
import {FlatList} from 'react-native';

import {Container, LoadingSpinner, Message} from './CommitScreenStyles';
import ItemSeparator from '../../components/ItemSeparator/ItemSeparator';
import ListItem from '../../components/ListItem/ListItem';
import useRepoSearch from '../../hooks/useRepoSearch';

export default function CommitScreen({route}) {
  const {params} = route;
  const {data, error, loading, response} = useRepoSearch();
  useEffect(() => {
    response(params);
  }, []);

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
