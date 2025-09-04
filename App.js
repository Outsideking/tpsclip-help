import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import helpData from './helpData.json';

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tpsclip Help</Text>
      <ScrollView>
        {helpData.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setSelected(index)}>
            <View style={styles.item}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              {selected === index && (
                <View style={styles.steps}>
                  {item.steps.map((step, i) => (
                    <Text key={i} style={styles.stepText}>{i + 1}. {step}</Text>
                  ))}
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  item: { marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 },
  itemTitle: { fontSize: 18, fontWeight: 'bold' },
  steps: { marginTop: 10 },
  stepText: { fontSize: 16, paddingVertical: 2 }
});
