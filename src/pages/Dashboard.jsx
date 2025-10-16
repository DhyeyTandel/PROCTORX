import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    User, 
    LogOut, 
    Camera, 
    Settings, 
    BarChart3, 
    Clock, 
    Shield,
    Play,
    History,
    Users,
    ArrowLeft,
    Monitor
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import ExamQuestions from '../components/ExamQuestions';
import AdminProctoringView from '../components/AdminProctoringView';

export default function Dashboard() {
    const { user, logout, isAdmin } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [isExamActive, setIsExamActive] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const stats = [
        { title: 'Total Exams', value: '12', icon: BarChart3, color: 'blue' },
        { title: 'Active Sessions', value: '3', icon: Camera, color: 'green' },
        { title: 'Avg. Duration', value: '45m', icon: Clock, color: 'purple' },
        { title: 'Integrity Score', value: '98%', icon: Shield, color: 'emerald' }
    ];

    const recentExams = [
        { id: 1, name: 'Mathematics Final', date: '2024-01-15', status: 'Completed', score: 95 },
        { id: 2, name: 'Physics Midterm', date: '2024-01-12', status: 'Completed', score: 88 },
        { id: 3, name: 'Chemistry Quiz', date: '2024-01-10', status: 'Completed', score: 92 }
    ];

    if (isExamActive) {
        return (
            <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
                 <button 
                    onClick={() => setIsExamActive(false)} 
                    className="absolute top-4 left-4 flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                    <ArrowLeft size={20} />
                    Back to Dashboard
                </button>
                <ExamQuestions />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header */}
            <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <h1 className="text-2xl font-bold text-white">ExamVision</h1>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-300">Dashboard</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                <User size={20} className="text-white" />
                            </div>
                            <div className="text-right">
                                <p className="text-white font-medium">{user?.name}</p>
                                <p className="text-gray-400 text-sm capitalize">{user?.role}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                        >
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside className="w-64 bg-gray-800 border-r border-gray-700 min-h-screen">
                    <nav className="p-6">
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                                        activeTab === 'overview' 
                                            ? 'bg-blue-600 text-white' 
                                            : 'text-gray-300 hover:bg-gray-700'
                                    }`}
                                >
                                    <BarChart3 size={20} />
                                    Overview
                                </button>
                            </li>
                            <li>
                                <Link
                                    to="/proctor"
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
                                >
                                    <Camera size={20} />
                                    Start Proctoring
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveTab('history')}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                                        activeTab === 'history' 
                                            ? 'bg-blue-600 text-white' 
                                            : 'text-gray-300 hover:bg-gray-700'
                                    }`}
                                >
                                    <History size={20} />
                                    Exam History
                                </button>
                            </li>
                            {isAdmin && (
                                <>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab('liveProctoring')}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                                                activeTab === 'liveProctoring' 
                                                    ? 'bg-blue-600 text-white' 
                                                    : 'text-gray-300 hover:bg-gray-700'
                                            }`}
                                        >
                                            <Monitor size={20} />
                                            Live Proctoring
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab('admin')}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                                                activeTab === 'admin' 
                                                    ? 'bg-blue-600 text-white' 
                                                    : 'text-gray-300 hover:bg-gray-700'
                                            }`}
                                        >
                                            <Users size={20} />
                                            Admin Panel
                                        </button>
                                    </li>
                                </>
                            )}
                            <li>
                                <button
                                    onClick={() => setActiveTab('settings')}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                                        activeTab === 'settings' 
                                            ? 'bg-blue-600 text-white' 
                                            : 'text-gray-300 hover:bg-gray-700'
                                    }`}
                                >
                                    <Settings size={20} />
                                    Settings
                                </button>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8">
                    {activeTab === 'overview' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">
                                    Welcome back, {user?.name}!
                                </h2>
                                <p className="text-gray-400">
                                    Monitor your exam performance and start new proctoring sessions
                                </p>
                            </div>

                            {/* Quick Actions */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <button
                                    onClick={() => setIsExamActive(true)}
                                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 p-6 rounded-xl text-white transition-all duration-300 group text-left"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">Start New Exam</h3>
                                            <p className="text-blue-100">Begin a sample examination</p>
                                        </div>
                                        <Play className="w-8 h-8 group-hover:scale-110 transition-transform" />
                                    </div>
                                </button>
                                <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Camera Test</h3>
                                            <p className="text-gray-400">Verify your setup</p>
                                        </div>
                                        <Camera className="w-8 h-8 text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-gray-800 border border-gray-700 p-6 rounded-xl"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-gray-400 text-sm">{stat.title}</p>
                                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                            </div>
                                            <stat.icon className={`w-8 h-8 text-${stat.color}-500`} />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Recent Activity */}
                            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Recent Exams</h3>
                                <div className="space-y-4">
                                    {recentExams.map((exam) => (
                                        <div key={exam.id} className="flex items-center justify-between p-4 bg-gray-750 rounded-lg">
                                            <div>
                                                <h4 className="text-white font-medium">{exam.name}</h4>
                                                <p className="text-gray-400 text-sm">{exam.date}</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    {exam.status}
                                                </span>
                                                <p className="text-white font-semibold">{exam.score}%</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'history' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold text-white">Exam History</h2>
                            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                                <div className="text-center py-12">
                                    <History className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Complete Exam History</h3>
                                    <p className="text-gray-400">All your examination records and performance analytics</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                    {activeTab === 'liveProctoring' && isAdmin && (
                       <AdminProctoringView />
                    )}

                    {activeTab === 'admin' && isAdmin && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold text-white">Admin Panel</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">User Management</h3>
                                    <p className="text-gray-400 mb-4">Manage student accounts and permissions</p>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                                        Manage Users
                                    </button>
                                </div>
                                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">System Analytics</h3>
                                    <p className="text-gray-400 mb-4">View system-wide performance metrics</p>
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                                        View Analytics
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'settings' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold text-white">Settings</h2>
                            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                                <div className="text-center py-12">
                                    <Settings className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">User Preferences</h3>
                                    <p className="text-gray-400">Configure your account settings and preferences</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </main>
            </div>
        </div>
    );
}