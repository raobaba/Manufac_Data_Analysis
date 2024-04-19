// src/components/GammaStatisticsTable/GammaStatisticsTable.tsx
import React from 'react';
import wineData from '../../data/Wine-Data.json';
import { Table } from '@mantine/core';
import { calculateMean, calculateMedian, calculateMode } from '../../utils/GamaStatistic';
import './GammaStatisticsTable.css';

const GammaStatisticsTable: React.FC = () => {
  const calculateGammaStatistics = () => {
    const calculateGamma = (entry: any) => {
      return entry.Magnesium !== 0 ? (entry.Ash * entry.Hue) / entry.Magnesium : 0;
    };

    const gammaData = wineData.map(entry => ({
      ...entry,
      Gamma: calculateGamma(entry),
    }));

    const getClassGamma = (classNumber: number) => {
      return gammaData
        .filter(entry => entry.Alcohol === classNumber)
        .map(entry => entry.Gamma);
    };

    const class1Gamma = getClassGamma(1);
    const class2Gamma = getClassGamma(2);

    return {
      meanClass1Gamma: calculateMean(class1Gamma),
      meanClass2Gamma: calculateMean(class2Gamma),
      medianClass1Gamma: calculateMedian(class1Gamma),
      medianClass2Gamma: calculateMedian(class2Gamma),
      modeClass1Gamma: calculateMode(class1Gamma),
      modeClass2Gamma: calculateMode(class2Gamma),
    };
  };

  const {
    meanClass1Gamma,
    meanClass2Gamma,
    medianClass1Gamma,
    medianClass2Gamma,
    modeClass1Gamma,
    modeClass2Gamma,
  } = calculateGammaStatistics();

  return (
    <div className="gamma-table"> 
    <Table className="table">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Measure</Table.Th>
          <Table.Th>Class 1</Table.Th>
          <Table.Th>Class 2</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>Gamma Mean</Table.Td>
          <Table.Td>{meanClass1Gamma.toFixed(3)}</Table.Td>
          <Table.Td>{meanClass2Gamma.toFixed(3)}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Gamma Median</Table.Td>
          <Table.Td>{medianClass1Gamma.toFixed(3)}</Table.Td>
          <Table.Td>{medianClass2Gamma.toFixed(3)}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Gamma Mode</Table.Td>
          <Table.Td>{modeClass1Gamma}</Table.Td>
          <Table.Td>{modeClass2Gamma}</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  </div>
  );
};

export default GammaStatisticsTable;
