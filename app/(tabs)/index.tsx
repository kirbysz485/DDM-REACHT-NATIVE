import { ScrollView, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.fundo}
      contentContainerStyle={styles.Container}
    >
      <Text style={[styles.verde, styles.pequeno]}> roxo pequeno </Text>
      <Text style={[styles.roxo, styles.medio, styles.negrito]}> roxo médio em negrito </Text>
      <Text style={[styles.amarelo, styles.grande, styles.sublinho]}> vermelho grande em italico </Text>
      <Text style={[styles.vermelho, styles.pequeno, styles.italico]}> amarelo pequeno e sublinhado </Text>
      <Text style={[styles.amarelo, styles.medio]}> amarelo médio </Text>
      <Text style={[styles.roxo, styles.grande, styles.negrito]}>verde grande em negrito </Text>
      <Text style={[styles.vermelho, styles.pequeno, styles.italico]}>vermelho pequeno em itálico </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fundo: {
    backgroundColor: '#3b8eed'
  },
  sublinho: {
    textDecorationLine: 'underline',
  },
  italico: {
    fontStyle: 'italic'
  },
  negrito: {
    fontWeight: 'bold'
  },
  pequeno: {
    fontSize: 15
  },
  medio: {
    fontSize: 20
  },
  grande: {
    fontSize: 25
  },
  roxo: {
    color: '#580796',
  },
  verde: {
    color: '#49d52a'
  },
  amarelo: {
    color: '#cdcd00'
  },
  vermelho: {
    color: '#c20909'
  }
});