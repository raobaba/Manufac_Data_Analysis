// utils/statistics.ts
export const calculateMean = (data: any[]) => {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
  };
  
  export const calculateMedian = (data: any[]) => {
    const sortedData = [...data].sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
      return (sortedData[mid - 1] + sortedData[mid]) / 2;
    } else {
      return sortedData[mid];
    }
  };
  
  export const calculateMode = (data: any[]) => {
    const frequencyMap = new Map();
    data.forEach(val => {
      frequencyMap.set(val, (frequencyMap.get(val) || 0) + 1);
    });
    let maxFrequency = 0;
    let mode: any = null;
    frequencyMap.forEach((frequency, value) => {
      if (frequency > maxFrequency) {
        maxFrequency = frequency;
        mode = value;
      }
    });
    return mode;
  };
  