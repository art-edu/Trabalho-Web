import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import NomeLabel from './components/NomeLabel';
import TelefoneLabel from './components/TelefoneLabel';
import BotaoCadastrar from './components/BotaoCadastrar';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const cadastrar = () => {
    if (nome && telefone) {
      setUsuarios([...usuarios, { id: Date.now().toString(), nome, telefone }]);
      setNome('');
      setTelefone('');
    }
  };

  const Linha = ({ texto1, texto2, negrito }) => (
    <View style={styles.linha}>
      <Text style={negrito ? styles.negrito : styles.texto}>{texto1}</Text>
      <Text style={negrito ? styles.negrito : styles.texto}>{texto2}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Usuário</Text>

      <NomeLabel nome={nome} setNome={setNome} />
      <TelefoneLabel telefone={telefone} setTelefone={setTelefone} />
      <BotaoCadastrar onPress={cadastrar} />

      <View style={styles.divisor} />

      <Linha texto1="Nome" texto2="Telefone" negrito />

      <ScrollView style={styles.scroll}>
        {usuarios.map((item) => (
          <Linha key={item.id} texto1={item.nome} texto2={item.telefone} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignSelf: 'center',
    width: '90%',
    marginTop: 50,
    backgroundColor: '#fff',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  texto: {
    fontSize: 14,
  },
  negrito: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  divisor: {
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginVertical: 15,
  },
  scroll: {
    maxHeight: 200,
  },
});
