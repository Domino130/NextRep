import { StyleSheet, Image, Platform, View, TouchableOpacity, } from 'react-native';
import React, { useState, useEffect } from 'react';

import { Collapsible } from '@/components/Collapsible';
import { useNavigation } from '@react-navigation/native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

import exerciseData from '@/assets/exercises.json';

interface Exercise {
  exerciseName: string;
  usedMuscles: string[];
}

interface MuscleGroupData {
  muscleGroup: string;
  exercises: Exercise[];
}


export default function ExerciseList() {


    const [exercises, setExercises] = useState<any[]>([]);
    const navigation = useNavigation();
    
  
    useEffect(() => {
      setExercises(exerciseData); // Set your workouts data
    }, []);


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Exercise List:</ThemedText>
      </ThemedView>

      {exercises.map((muscleGroupData) => (
        <Collapsible key={muscleGroupData.muscleGroup} title={muscleGroupData.muscleGroup}>
          {muscleGroupData.exercises.map((exercise: any, index: number) => (
            <TouchableOpacity
              key={index}
              style={styles.exerciseItem}
            >
              <ThemedText type="defaultSemiBold">{exercise.exerciseName}</ThemedText>
            </TouchableOpacity>
          ))}
        </Collapsible>
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  exerciseItem: {
    marginBottom: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
