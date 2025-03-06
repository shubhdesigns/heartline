import { useState, useRef, useEffect } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Heart, Timer, Activity, History, X } from 'lucide-react';

interface HeartRateRecord {
  timestamp: Date;
  bpm: number;
  activity: string;
}

type HeartRateZone = 'Rest' | 'Warm Up' | 'Fat Burn' | 'Cardio' | 'Peak' | 'Maximum';

const HeartMonitor: FC = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [pulseCount, setPulseCount] = useState(0);
  const [calculatedBPM, setCalculatedBPM] = useState<number | null>(null);
  const [age, setAge] = useState<number>(25);
  const [activity, setActivity] = useState<string>('resting');
  const [heartRateHistory, setHeartRateHistory] = useState<HeartRateRecord[]>([]);
  const timerRef = useRef<number>();

  const activities = [
    'resting',
    'light activity',
    'moderate exercise',
    'intense workout',
    'recovery'
  ];

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const startTracking = () => {
    setIsTracking(true);
    setPulseCount(0);
    setElapsedTime(0);
    setCalculatedBPM(null);

    timerRef.current = window.setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
  };

  const recordPulse = () => {
    setPulseCount(prev => prev + 1);
  };

  const stopTracking = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsTracking(false);

    // Calculate BPM based on 15-second count
    const bpm = Math.round((pulseCount * 60) / elapsedTime);
    setCalculatedBPM(bpm);

    // Save to history
    if (bpm > 0) {
      setHeartRateHistory(prev => [
        {
          timestamp: new Date(),
          bpm,
          activity
        },
        ...prev
      ].slice(0, 10)); // Keep last 10 records
    }
  };

  const calculateMaxHR = () => {
    return 220 - age;
  };

  const getHeartRateZone = (bpm: number): { zone: HeartRateZone; color: string } => {
    const maxHR = calculateMaxHR();
    const percentage = (bpm / maxHR) * 100;

    if (percentage < 50) return { zone: 'Rest', color: 'text-blue-500' };
    if (percentage < 60) return { zone: 'Warm Up', color: 'text-green-500' };
    if (percentage < 70) return { zone: 'Fat Burn', color: 'text-yellow-500' };
    if (percentage < 80) return { zone: 'Cardio', color: 'text-orange-500' };
    if (percentage < 90) return { zone: 'Peak', color: 'text-red-500' };
    return { zone: 'Maximum', color: 'text-purple-500' };
  };

  const getRecommendation = (bpm: number): string => {
    const { zone } = getHeartRateZone(bpm);
    const recommendations: Record<HeartRateZone, string> = {
      'Rest': 'Perfect for recovery and relaxation.',
      'Warm Up': 'Good for starting your workout.',
      'Fat Burn': 'Ideal for endurance training and fat burning.',
      'Cardio': 'Great for improving cardiovascular fitness.',
      'Peak': 'High-intensity training zone.',
      'Maximum': 'Reduce intensity to maintain sustainable training.'
    };
    return recommendations[zone];
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Heart Rate Monitor</h3>
        <p className="text-gray-600">
          Track your heart rate, understand your heart rate zones, and get personalized recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">Manual Pulse Counter</h4>
              <Timer className="w-5 h-5 text-gray-500" />
            </div>
            
            <div className="text-center mb-4">
              <div className="text-4xl font-bold mb-2">
                {isTracking ? (
                  `${elapsedTime}s`
                ) : (
                  calculatedBPM ? `${calculatedBPM} BPM` : '0'
                )}
              </div>
              <div className="text-sm text-gray-500">
                {isTracking ? `Pulses: ${pulseCount}` : 'Press Start to begin'}
              </div>
            </div>

            <div className="space-y-3">
              {isTracking ? (
                <>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={recordPulse}
                    className="w-full bg-red-500 text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2"
                  >
                    <Heart className="w-6 h-6" />
                    Tap for Each Pulse
                  </motion.button>
                  <button
                    onClick={stopTracking}
                    className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg font-medium"
                  >
                    Stop
                  </button>
                </>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={startTracking}
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium"
                >
                  Start Measuring
                </motion.button>
              )}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">Settings</h4>
              <Activity className="w-5 h-5 text-gray-500" />
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age (for HR zones)
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full px-3 py-2 border rounded-lg"
                  min="1"
                  max="120"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Activity Type
                </label>
                <select
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  {activities.map(act => (
                    <option key={act} value={act}>
                      {act.charAt(0).toUpperCase() + act.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {calculatedBPM && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">Analysis</h4>
                <Heart className={`w-5 h-5 ${getHeartRateZone(calculatedBPM).color}`} />
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Heart Rate Zone</div>
                  <div className={`text-lg font-semibold ${getHeartRateZone(calculatedBPM).color}`}>
                    {getHeartRateZone(calculatedBPM).zone}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-1">Recommendation</div>
                  <div className="text-gray-700">
                    {getRecommendation(calculatedBPM)}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-1">Max Heart Rate</div>
                  <div className="text-gray-700">
                    {calculateMaxHR()} BPM
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">History</h4>
              <History className="w-5 h-5 text-gray-500" />
            </div>
            
            <div className="space-y-3">
              {heartRateHistory.map((record, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
                >
                  <div>
                    <div className="font-medium">{record.bpm} BPM</div>
                    <div className="text-sm text-gray-500">
                      {record.activity}
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    {new Date(record.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              ))}
              {heartRateHistory.length === 0 && (
                <div className="text-center text-gray-500 py-4">
                  No measurements yet
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartMonitor; 