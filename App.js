import React, { useState } from 'react';
import { View, FlatList, Button, StyleSheet, ImageBackground } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedGoalIndex, setSelectedGoalIndex] = useState(null);

  const addGoalHandler = (goalTitle) => {
    if (goalTitle.trim()) {
      setGoals([...goals, goalTitle]);
      setIsAddMode(false);
    }
  };

  const editGoalHandler = (goalTitle) => {
    if (goalTitle.trim() && selectedGoalIndex !== null) {
      const updatedGoals = [...goals];
      updatedGoals[selectedGoalIndex] = goalTitle;
      setGoals(updatedGoals);
      setIsEditMode(false);
      setSelectedGoalIndex(null);
    }
  };

  const removeGoalHandler = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  const startEditGoal = (index) => {
    setSelectedGoalIndex(index);
    setIsEditMode(true);
  };

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>
      <View style={styles.screen}>
        <Button title="Ajouter un objectif" onPress={() => setIsAddMode(true)} />

        {/* Modale pour l'ajout d'objectif */}
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={() => setIsAddMode(false)}
        />

        {/* Modale pour l'édition d'objectif */}
        <GoalInput
          visible={isEditMode}
          onAddGoal={editGoalHandler}
          onCancel={() => setIsEditMode(false)}
          initialGoal={selectedGoalIndex !== null ? goals[selectedGoalIndex] : ''}
        />

        <FlatList
          data={goals}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <GoalItem 
              goal={item} 
              onDelete={() => removeGoalHandler(index)} 
              onEdit={() => startEditGoal(index)} 
            />
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});
