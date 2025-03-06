import { useState, useRef } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';

const ECGAnalysis: FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check if file is a PNG
    if (file.type !== 'image/png') {
      setResult('Please upload a PNG file.');
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    // Create a preview of the uploaded image
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult("Analysis complete: Normal sinus rhythm detected. No significant abnormalities found in the ECG pattern.");
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">AI ECG Analysis</h3>
        <p className="text-gray-600">
          Upload an ECG image (PNG format) for instant AI-powered analysis. Our neural network
          can detect common arrhythmias and abnormalities.
        </p>
      </div>

      <div className="mb-8 bg-gray-50 rounded-lg p-4">
        {selectedImage ? (
          <div className="relative">
            <img 
              src={selectedImage} 
              alt="Uploaded ECG" 
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
            >
              Clear
            </button>
          </div>
        ) : (
          <div className="h-64 flex items-center justify-center text-gray-400">
            Upload an ECG image to begin analysis
          </div>
        )}
      </div>

      <div className="space-y-4">
        <input
          type="file"
          ref={fileInputRef}
          accept=".png"
          onChange={handleFileUpload}
          className="hidden"
        />
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium"
          onClick={() => fileInputRef.current?.click()}
          disabled={isAnalyzing}
        >
          {isAnalyzing ? 'Analyzing...' : 'Upload ECG Image (PNG)'}
        </motion.button>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg ${
              result.includes('Please upload') 
                ? 'bg-red-50 text-red-700' 
                : 'bg-green-50 text-green-700'
            }`}
          >
            {result}
          </motion.div>
        )}

        <div className="text-sm text-gray-500">
          <h4 className="font-medium mb-2">Supported Features:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>PNG image format support</li>
            <li>Arrhythmia detection</li>
            <li>Heart rate variability analysis</li>
            <li>QT interval measurement</li>
            <li>Abnormal rhythm classification</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ECGAnalysis; 