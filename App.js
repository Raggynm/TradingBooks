import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing/';
import { AppLoading } from 'expo';
import { RedHatDisplay_400Regular,RedHatDisplay_500Medium, useFonts } from '@expo-google-fonts/red-hat-display';

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
        <Landing />
        <StatusBar style="auto" />
      </>
    );
  }
}

