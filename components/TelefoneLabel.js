import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function TelefoneLabel({ telefone, setTelefone }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Digite o telefone"
        keyboardType="phone-pad"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    width: 60,
    fontSize: 14,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    padding: 6,
    borderRadius: 4,
  },
});
