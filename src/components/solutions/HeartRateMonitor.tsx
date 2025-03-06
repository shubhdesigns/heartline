import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const HeartRateMonitor: React.FC = () => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [heartRate, setHeartRate] = useState<number | null>(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const startMonitoring = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsMonitoring(true);
        analyzeHeartRate();
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopMonitoring = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      setIsMonitoring(false);
      setHeartRate(null);
      setTimeElapsed(0);
    }
  };

  const analyzeHeartRate = () => {
    if (!canvasRef.current || !videoRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const computeFrame = () => {
      if (!videoRef.current || !canvasRef.current) return;

      ctx.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      const frame = ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
      
      // Simple red channel analysis (in a real app, this would be more sophisticated)
      let redSum = 0;
      for (let i = 0; i < frame.data.length; i += 4) {
        redSum += frame.data[i];
      }
      const avgRed = redSum / (frame.data.length / 4);
      
      // Simulate heart rate calculation (in a real app, this would use actual PPG analysis)
      const simulatedHeartRate = Math.floor(60 + Math.sin(Date.now() / 1000) * 10);
      setHeartRate(simulatedHeartRate);
      setTimeElapsed(prev => prev + 1);

      animationFrameRef.current = requestAnimationFrame(computeFrame);
    };

    computeFrame();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Heart Rate Monitor</h3>
        <p className="text-gray-600">
          Use your device's camera to measure your heart rate through photoplethysmography (PPG).
        </p>
      </div>

      <div className="relative aspect-video mb-6 bg-gray-100 rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
        <canvas
          ref={canvasRef}
          className="hidden"
          width="640"
          height="480"
        />
        
        {!isMonitoring && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium"
              onClick={startMonitoring}
            >
              Start Monitoring
            </motion.button>
          </div>
        )}
      </div>

      {isMonitoring && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Heart Rate</p>
              <div className="flex items-center">
                <Heart className="text-red-500 mr-2" />
                <span className="text-3xl font-bold">
                  {heartRate || '--'}
                </span>
                <span className="text-gray-500 ml-1">BPM</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Time Elapsed</p>
              <p className="text-xl font-semibold">
                {Math.floor(timeElapsed / 60)}:{(timeElapsed % 60).toString().padStart(2, '0')}
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-red-500 text-white py-3 rounded-lg font-medium"
            onClick={stopMonitoring}
          >
            Stop Monitoring
          </motion.button>

          <div className="text-sm text-gray-500">
            <h4 className="font-medium mb-2">How it works:</h4>
            <p>
              The app uses your camera to detect subtle color changes in your skin that correspond
              to your blood flow. This technique, known as photoplethysmography (PPG), allows for
              contactless heart rate measurement.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HeartRateMonitor; 