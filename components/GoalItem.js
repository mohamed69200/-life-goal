import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function GoalItem({ goal, onDelete, onEdit }) {
  return (
    <View style={styles.goalContainer}>
      <Text style={styles.goalText}>{goal}</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={onEdit} style={styles.button}>
          <Text style={styles.editButton}>Modifier</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.button}>
          <Text style={styles.deleteButton}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  goalText: {
    fontSize: 16,
    marginBottom: 10, 
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
  editButton: {
    color: 'blue',
    fontWeight: 'bold',
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});
