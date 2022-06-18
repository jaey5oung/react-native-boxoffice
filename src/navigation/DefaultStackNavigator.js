import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BoxOffice from '../screens/BoxOffice';
import MovieDetail from '../screens/MovieDetail';
import SearchResult from '../screens/SearchResult';

const Stack = createNativeStackNavigator();

export default function DefaultStackNavigator() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name={'Nomfilx'} component={BoxOffice} />
        <Stack.Screen name={'상세정보'} component={MovieDetail} />
        <Stack.Screen name={'검색결과'} component={SearchResult} />
      </Stack.Navigator>
    </>
  );
}
