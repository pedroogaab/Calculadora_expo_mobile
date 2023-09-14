import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularOperacoes = (operacao) => {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    if (!isNaN(num1) && !isNaN(num2)) {
      let resultadoCalculo;

      switch (operacao) {
        case 'soma':
          resultadoCalculo = num1 + num2;
          break;
        case 'subtracao':
          resultadoCalculo = num1 - num2;
          break;
        case 'multiplicacao':
          resultadoCalculo = num1 * num2;
          break;
        case 'divisao':
          resultadoCalculo = num1 / num2;
          break;
        default:
          resultadoCalculo = 'Operação inválida';
      }

      setResultado(`Resultado: ${resultadoCalculo}`);
    } else {
      setResultado('Valores inválidos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro valor"
        onChangeText={(text) => setValor1(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo valor"
        onChangeText={(text) => setValor2(text)}
        keyboardType="numeric"
      />
      <Button title="Soma" onPress={() => calcularOperacoes('soma')} />
      <Button title="Subtração" onPress={() => calcularOperacoes('subtracao')} />
      <Button title="Multiplicação" onPress={() => calcularOperacoes('multiplicacao')} />
      <Button title="Divisão" onPress={() => calcularOperacoes('divisao')} />

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  titulo: {
    color: 'red',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '35%',
    height: 40,
    borderWidth: 1,
    marginBottom: 7,
    paddingHorizontal: 10,
  },
  resultado: {
    color: 'blue',
    fontSize: 16,
    marginTop: 10,
  },
});
