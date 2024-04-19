// src/components/App/App.tsx
import React from 'react';
import './App.css'
import ClassStatisticsTable from './components/ClassStatisticsTable/ClassStatisticsTable';
import GammaStatisticsTable from './components/GammaStatisticsTable/GammaStatisticsTable';

const App: React.FC = () => {
  return (
    <div>
      <h1>Class-wise Statistics for Flavanoids</h1>
      <ClassStatisticsTable />
      <h1>Class-wise Statistics for Gamma</h1>
      <GammaStatisticsTable />
    </div>
  );
};

export default App;
