import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const ExerciseDetail = ({ route }: any) => {
  const { exercise } = route.params; // Get the exercise data from route params

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">{exercise.exerciseName}</ThemedText>
      <ThemedText type="default">Muscles Worked:</ThemedText>
      <ThemedText type="default">{exercise.usedMuscles.join(', ')}</ThemedText>
      {/* You can display more details here */}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  }
});

export default ExerciseDetail;