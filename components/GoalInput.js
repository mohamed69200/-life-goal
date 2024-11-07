import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';

export default function GoalInput({ visible, onAddGoal, onCancel, initialGoal }) {
  const [enteredGoal, setEnteredGoal] = useState('');

  useEffect(() => {
    if (initialGoal) {
      setEnteredGoal(initialGoal); 
    }
  }, [initialGoal]);

  const handleAddGoal = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nouvel objectif"
          style={styles.input}
          value={enteredGoal}
          onChangeText={setEnteredGoal}
        />
        <View style={styles.buttonContainer}>
          <Button title="Annuler" color="red" onPress={onCancel} />
          <Button title="Confirmer" onPress={handleAddGoal} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginBottom: 20,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
