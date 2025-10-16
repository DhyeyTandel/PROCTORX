import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, AlertTriangle, User, Monitor } from 'lucide-react';

// Dummy data for active student sessions
const activeSessions = [
  { id: 1, studentName: 'Alice Johnson', examName: 'Physics Midterm', alerts: 3 },
  { id: 2, studentName: 'Bob Williams', examName: 'Mathematics Final', alerts: 0 },
  { id: 3, studentName: 'Charlie Brown', examName: 'Chemistry Quiz', alerts: 5 },
  { id: 4, studentName: 'Diana Miller', examName: 'History 101', alerts: 1 },
];

// A component to display a simulated student proctoring window
const StudentProctorWindow = ({ session, onBack }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gray-800 rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
            <h3 className="text-xl font-semibold text-white">{session.studentName}</h3>
            <p className="text-gray-400">{session.examName}</p>
        </div>
        <button onClick={onBack} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Back to List
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Video Feed */}
        <div className="md:col-span-2 bg-black rounded-lg flex items-center justify-center">
            <Camera size={64} className="text-gray-600" />
            <p className="text-gray-600 ml-4">Student's Video Feed</p>
        </div>
        {/* Alerts */}
        <div className="bg-gray-900 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-3">Live Alerts</h4>
            <div className="space-y-3">
                <div className="flex items-center text-yellow-400">
                    <AlertTriangle size={20} className="mr-2" />
                    <span>Looking Away</span>
                </div>
                <div className="flex items-center text-red-500">
                    <AlertTriangle size={20} className="mr-2" />
                    <span>Multiple Faces</span>
                </div>
                <div className="flex items-center text-gray-400">
                    <AlertTriangle size={20} className="mr-2" />
                    <span>Face Not Found</span>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function AdminProctoringView() {
  const [selectedSession, setSelectedSession] = useState(null);

  if (selectedSession) {
    return <StudentProctorWindow session={selectedSession} onBack={() => setSelectedSession(null)} />;
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Live Proctoring Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeSessions.map(session => (
                <div 
                    key={session.id} 
                    onClick={() => setSelectedSession(session)}
                    className="bg-gray-800 border border-gray-700 rounded-xl p-6 cursor-pointer hover:border-blue-500 transition-colors"
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <User className="text-gray-400"/>
                                <h3 className="text-lg font-semibold text-white">{session.studentName}</h3>
                            </div>
                            <p className="text-gray-400">{session.examName}</p>
                        </div>
                        <Monitor size={24} className="text-green-500"/>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-gray-400">Alerts Triggered:</span>
                        <span className={`font-bold text-xl ${session.alerts > 0 ? 'text-red-500' : 'text-green-500'}`}>
                            {session.alerts}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
  );
}
