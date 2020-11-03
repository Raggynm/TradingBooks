import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { RedHatDisplay_400Regular,RedHatDisplay_500Medium, useFonts } from '@expo-google-fonts/red-hat-display';

import AppStack from './src/routes/AppStacks'

export default function App() {
  let [fontsLoaded] = useFonts({
    RedHatDisplay_400Regular, 
    RedHatDisplay_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar translucent backgroundColor="transparent" />
      </>
    );
  }
}