import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DefaultStackNavigator from './DefaultStackNavigator';

export default function RootCotainer() {
  return (
    <NavigationContainer>
      <DefaultStackNavigator />
    </NavigationContainer>
  );
}
