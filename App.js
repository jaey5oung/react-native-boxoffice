/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import BoxOffice from './src/screens/BoxOffice';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootCotainer from './src/navigation/RootContainer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RootCotainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
