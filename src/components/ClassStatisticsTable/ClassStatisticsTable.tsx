// src/components/ClassStatisticsTable/ClassStatisticsTable.tsx
import React from 'react';
import wineData from '../../data/Wine-Data.json';
import { Table } from '@mantine/core';
import { calculateMean, calculateMedian, calculateMode } from '../../utils/ClassStatistics';
import './ClassStatisticsTable.css';

const ClassStatisticsTable: React.FC = () => {
  const calculateStatistics = (property: string, numClasses: number) => {
    const classData: any[] = Array.from({ length: numClasses }, (_, i) =>
      wineData.filter(entry => entry.Alcohol === i + 1)
    );

    const getClassProperty = (data: any[], property: string) => {
      return data.map(entry => entry[property]);
    };

    const classProperties = classData.map(classEntries => getClassProperty(classEntries, property));
    const statistics: any = {};

    for (let i = 0; i < numClasses; i++) {
      const mean = calculateMean(classProperties[i]);
      const median = calculateMedian(classProperties[i]);
      const mode = calculateMode(classProperties[i]);
      statistics[`class${i + 1}`] = { mean, median, mode };
    }

    return statistics;
  };

  const numClasses = 3; 
  const statistics = calculateStatistics('Flavanoids', numClasses);

  return (
    <div className="table-container">
      <Table className="table">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Measure</Table.Th>
            {Array.from({ length: numClasses }, (_, i) => (
              <Table.Th key={i}>Class {i + 1}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Flavanoids Mean</Table.Td>
            {Array.from({ length: numClasses }, (_, i) => (
              <Table.Td key={i}>{statistics[`class${i + 1}`].mean.toFixed(3)}</Table.Td>
            ))}
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Flavanoids Median</Table.Td>
            {Array.from({ length: numClasses }, (_, i) => (
              <Table.Td key={i}>{statistics[`class${i + 1}`].median.toFixed(3)}</Table.Td>
            ))}
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Flavanoids Mode</Table.Td>
            {Array.from({ length: numClasses }, (_, i) => (
              <Table.Td key={i}>{statistics[`class${i + 1}`].mode}</Table.Td>
            ))}
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default ClassStatisticsTable;
