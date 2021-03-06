import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { checkUpdate } from 'react-native-android-force-update';

export default function App() {
  React.useEffect(() => {
    checkUpdate();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Coca cola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
