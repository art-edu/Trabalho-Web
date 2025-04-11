import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function BotaoCadastrar({ aoClicar }) {
  return (
    <View style={styles.container}>
      <View style={styles.labelEspaco} /> 
      <View style={styles.botaoWrapper}>
        <Button title="Cadastrar" onPress={aoClicar} color="#4a90e2" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  labelEspaco: {
    width: 60, 
  },
  botaoWrapper: {
    flex: 1,
    backgroundColor: '#dbe9ff', 
    borderRadius: 4,
    overflow: 'hidden', 
  },
});
