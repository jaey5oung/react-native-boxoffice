import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BoxOffice from '../screens/BoxOffice';
import MovieDetail from '../screens/MovieDetail';

const Stack = createNativeStackNavigator();

export default function DefaultStackNavigator() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name={'Nomfilx'} component={BoxOffice} />
        <Stack.Screen name={'상세정보'} component={MovieDetail} />
      </Stack.Navigator>
    </>
  );
}
