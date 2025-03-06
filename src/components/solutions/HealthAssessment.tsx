import { useState } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Brain, Utensils } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  category: 'lifestyle' | 'nutrition' | 'physical' | 'mental';
  icon: JSX.Element;
}

const questions: Question[] = [
  {
    id: 1,
    text: "How often do you exercise per week?",
    options: ["Rarely", "1-2 times", "3-4 times", "5+ times"],
    category: "physical",
    icon: <Activity className="w-6 h-6" />
  },
  {
    id: 2,
    text: "How would you rate your stress levels?",
    options: ["Very High", "High", "Moderate", "Low"],
    category: "mental",
    icon: <Brain className="w-6 h-6" />
  },
  {
    id: 3,
    text: "How many servings of fruits and vegetables do you eat daily?",
    options: ["0-1", "2-3", "4-5", "5+"],
    category: "nutrition",
    icon: <Utensils className="w-6 h-6" />
  },
  {
    id: 4,
    text: "How would you rate your sleep quality?",
    options: ["Poor", "Fair", "Good", "Excellent"],
    category: "lifestyle",
    icon: <Heart className="w-6 h-6" />
  }
];

interface Recommendation {
  category: string;
  text: string;
  priority: 'high' | 'medium' | 'low';
}

const HealthAssessment: FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      generateRecommendations();
    }
  };

  const generateRecommendations = () => {
    const newRecommendations: Recommendation[] = [];

    // Exercise recommendations
    if (answers[1] <= 1) {
      newRecommendations.push({
        category: "Physical Activity",
        text: "Try to incorporate at least 150 minutes of moderate exercise per week. Start with short walks or light exercises.",
        priority: "high"
      });
    }

    // Stress management recommendations
    if (answers[2] <= 1) {
      newRecommendations.push({
        category: "Mental Wellness",
        text: "Consider practicing mindfulness or meditation for 10 minutes daily to reduce stress levels.",
        priority: "high"
      });
    }

    // Nutrition recommendations
    if (answers[3] <= 1) {
      newRecommendations.push({
        category: "Nutrition",
        text: "Aim to increase your fruit and vegetable intake. Try adding one extra serving each week.",
        priority: "medium"
      });
    }

    // Sleep recommendations
    if (answers[4] <= 1) {
      newRecommendations.push({
        category: "Sleep Quality",
        text: "Establish a regular sleep schedule and create a relaxing bedtime routine.",
        priority: "high"
      });
    }

    setRecommendations(newRecommendations);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setRecommendations([]);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Personal Health Assessment</h3>
        <p className="text-gray-600">
          Take our comprehensive health assessment to receive personalized recommendations for improving your overall well-being.
        </p>
      </div>

      {!showResults ? (
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              {questions[currentQuestion].icon}
              <h4 className="text-xl font-semibold">{questions[currentQuestion].text}</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all text-left"
                  onClick={() => handleAnswer(questions[currentQuestion].id, index)}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>
          <div className="text-center text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold mb-4">Your Personalized Recommendations</h4>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`p-4 rounded-lg ${
                    rec.priority === 'high' 
                      ? 'bg-red-50 border-l-4 border-red-400'
                      : rec.priority === 'medium'
                      ? 'bg-yellow-50 border-l-4 border-yellow-400'
                      : 'bg-green-50 border-l-4 border-green-400'
                  }`}
                >
                  <h5 className="font-semibold mb-2">{rec.category}</h5>
                  <p className="text-gray-700">{rec.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={resetQuiz}
            className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium"
          >
            Take Assessment Again
          </motion.button>
        </div>
      )}

      <div className="mt-8 text-sm text-gray-500">
        <h4 className="font-medium mb-2">Why This Matters:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Personalized health insights</li>
          <li>Evidence-based recommendations</li>
          <li>Track your progress over time</li>
          <li>Identify areas for improvement</li>
          <li>Holistic health approach</li>
        </ul>
      </div>
    </div>
  );
};

export default HealthAssessment; 