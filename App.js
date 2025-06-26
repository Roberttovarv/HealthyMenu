import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { CategoriesScreen } from './screens/CategoriesScreens';

export default function App() {
  return (
    <SafeAreaView  style={styles.container}>
    <CategoriesScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
