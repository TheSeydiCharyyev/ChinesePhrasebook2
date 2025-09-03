// src/components/SimpleCharts.tsx - Простые заглушки для графиков
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

interface BarChartData {
  day: number;
  phrases: number;
  time: number;
  date: string;
}

interface BarChartProps {
  data: BarChartData[];
  width: number;
  height: number;
}

export const SimpleBarChart: React.FC<BarChartProps> = ({ data, width, height }) => (
  <View style={[styles.chartContainer, { width, height }]}>
    <Text style={styles.chartTitle}>📊 График активности</Text>
    <Text style={styles.chartSubtitle}>7 дней обучения</Text>
    {data.length > 0 && (
      <Text style={styles.chartData}>
        Изучено фраз: {data.reduce((sum, item) => sum + item.phrases, 0)}
      </Text>
    )}
  </View>
);

interface LineChartData {
  week: string;
  phrases: number;
  time: number;
}

interface LineChartProps {
  data: LineChartData[];
  width: number;
  height: number;
}

export const SimpleLineChart: React.FC<LineChartProps> = ({ data, width, height }) => (
  <View style={[styles.chartContainer, { width, height }]}>
    <Text style={styles.chartTitle}>📈 Недельный тренд</Text>
    <Text style={styles.chartSubtitle}>Прогресс по неделям</Text>
    {data.length > 0 && (
      <Text style={styles.chartData}>
        Недель активности: {data.length}
      </Text>
    )}
  </View>
);

interface PieChartData {
  name: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: PieChartData[];
  size: number;
}

export const SimplePieChart: React.FC<PieChartProps> = ({ data, size }) => (
  <View style={[styles.chartContainer, { width: size, height: size }]}>
    <Text style={styles.chartTitle}>🥧 Круговая диаграмма</Text>
    <Text style={styles.chartSubtitle}>Распределение по категориям</Text>
  </View>
);

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: Colors.backgroundLight,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.cardBorder,
    borderStyle: 'dashed',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  chartSubtitle: {
    fontSize: 14,
    color: Colors.textLight,
    textAlign: 'center',
    marginBottom: 8,
  },
  chartData: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '500',
    textAlign: 'center',
  },
});