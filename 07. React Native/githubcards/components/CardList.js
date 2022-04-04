import React from 'react';
import Card from './Card';
import { View } from 'react-native';

export default function CardList(props) {
  return (
    <View>
      {props.profiles.map((profile) => (
        <Card key={profile.id} {...profile} />
      ))}
    </View>
  );
}