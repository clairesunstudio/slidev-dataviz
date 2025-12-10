// Reusable Data Sonification Utilities
// Usage: Import this into your Observable notebooks for consistent audio functionality

/**
 * Creates a reusable data sonification function
 * @param {Object} config - Configuration object
 * @param {Tone.Synth} config.synth - Tone.js synthesizer instance
 * @param {Array} config.data - Dataset to sonify
 * @param {Function} config.dataSelector - Function to find data by key (day, index, etc.)
 * @param {Function} config.valueExtractor - Function to extract the value to sonify from data point
 * @param {Function} config.scaleFunction - Function to map data value to frequency
 * @param {string} config.noteDuration - Duration of each note (Tone.js format, e.g., "8n", "4n")
 * @returns {Function} - Sonification function that takes a key and plays the corresponding sound
 */
export function createDataSonifier(config) {
  const {
    synth,
    data,
    dataSelector,
    valueExtractor,
    scaleFunction,
    noteDuration = "8n"
  } = config;
  
  let lastPlayedKey = null;
  let audioStarted = false;
  
  return async function playDataSound(key) {
    // Initialize audio context if needed
    if (!audioStarted) {
      if (Tone.context.state !== 'running') {
        await Tone.start();
      }
      audioStarted = true;
    }
    
    // Only play if the key has changed (prevents duplicate sounds on re-runs)
    if (key !== lastPlayedKey) {
      const dataPoint = dataSelector(data, key);
      if (dataPoint) {
        const value = valueExtractor(dataPoint);
        const frequency = scaleFunction(value);
        synth.triggerAttackRelease(frequency, noteDuration);
      }
      lastPlayedKey = key;
    }
  };
}

/**
 * Common data selector functions
 */
export const DataSelectors = {
  // For array data where key is the index
  byIndex: (data, index) => data[index],
  
  // For array data where key is 1-indexed but array is 0-indexed
  byIndexOffset: (data, index) => data[index - 1],
  
  // For array data where you search by a property
  byProperty: (propertyName) => (data, key) => data.find(d => d[propertyName] === key),
  
  // For object data where key is the property name
  byKey: (data, key) => data[key]
};

/**
 * Common value extractor functions
 */
export const ValueExtractors = {
  // Extract a specific property
  property: (propName) => (dataPoint) => dataPoint[propName],
  
  // Extract the value directly (for simple arrays)
  direct: (dataPoint) => dataPoint,
  
  // Extract with fallback
  propertyWithFallback: (propName, fallback = 0) => (dataPoint) => dataPoint[propName] ?? fallback
};

/**
 * Common scaling functions
 */
export const ScaleFunctions = {
  // Linear scale from min/max to frequency range
  linear: (minVal, maxVal, minFreq = 200, maxFreq = 800) => (value) => {
    const normalized = (value - minVal) / (maxVal - minVal);
    return minFreq + normalized * (maxFreq - minFreq);
  },
  
  // Logarithmic scale (better for frequency perception)
  logarithmic: (minVal, maxVal, minFreq = 200, maxFreq = 800) => (value) => {
    const logMin = Math.log(minFreq);
    const logMax = Math.log(maxFreq);
    const normalized = (value - minVal) / (maxVal - minVal);
    return Math.exp(logMin + normalized * (logMax - logMin));
  },
  
  // Map to musical scale (pentatonic)
  pentatonic: (minVal, maxVal, baseFreq = 261.63) => {
    const pentatonicRatios = [1, 9/8, 5/4, 3/2, 5/3]; // C major pentatonic
    return (value) => {
      const normalized = (value - minVal) / (maxVal - minVal);
      const scaleIndex = Math.floor(normalized * (pentatonicRatios.length - 1));
      const octave = Math.floor(normalized * 3); // Spread across 3 octaves
      return baseFreq * pentatonicRatios[scaleIndex] * Math.pow(2, octave);
    };
  }
};

/**
 * Convenience function for the most common use case
 */
export function createSimpleSonifier(synth, data, valueProp, minVal, maxVal) {
  return createDataSonifier({
    synth,
    data,
    dataSelector: DataSelectors.byProperty(valueProp === 'index' ? null : 'day'),
    valueExtractor: valueProp === 'index' ? ValueExtractors.direct : ValueExtractors.property(valueProp),
    scaleFunction: ScaleFunctions.linear(minVal, maxVal)
  });
}

// Example usage patterns:

/*
// Example 1: Temperature data by day
const tempSonifier = createDataSonifier({
  synth: mySynth,
  data: temperatureData,
  dataSelector: DataSelectors.byProperty('day'),
  valueExtractor: ValueExtractors.property('value'),
  scaleFunction: ScaleFunctions.linear(minValue, maxValue),
  noteDuration: "8n"
});

// Usage in Observable cell:
{
  tempSonifier(selectedDate);
  return "Playing temperature sound...";
}

// Example 2: Stock data by trading day index
const stockSonifier = createDataSonifier({
  synth: stockSynth,
  data: appleData,
  dataSelector: DataSelectors.byIndexOffset, // 1-indexed day to 0-indexed array
  valueExtractor: ValueExtractors.property('close'),
  scaleFunction: ScaleFunctions.linear(priceStats.min, priceStats.max),
  noteDuration: "8n"
});

// Usage in Observable cell:
{
  stockSonifier(selectedTradingDay);
  return "Playing stock price sound...";
}

// Example 3: Simple array data
const simpleSonifier = createSimpleSonifier(
  mySynth,
  myDataArray,
  'temperature',
  0,
  100
);
*/
