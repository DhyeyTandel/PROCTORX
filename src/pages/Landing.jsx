import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, Shield, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Landing() {
    const { isAuthenticated } = useAuth();

    const features = [
        {
            icon: Eye,
            title: 'Advanced Computer Vision',
            description: 'Real-time face detection and head pose estimation using MediaPipe technology.'
        },
        {
            icon: Shield,
            title: 'Secure Proctoring',
            description: 'Comprehensive monitoring system to ensure exam integrity and prevent cheating.'
        },
        {
            icon: Clock,
            title: 'Real-time Monitoring',
            description: 'Instant behavioral analysis with immediate feedback and alerts.'
        },
        {
            icon: Users,
            title: 'Multi-user Support',
            description: 'Support for both students and administrators with role-based access control.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            {/* Navigation */}
            <nav className="relative z-10 bg-black/20 backdrop-blur-lg border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-2xl font-bold text-white"
                        >
                            ExamVision
                        </motion.div>
                        <div className="flex items-center gap-4">
                            {isAuthenticated ? (
                                <Link
                                    to="/dashboard"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <div className="flex gap-3">
                                    <Link
                                        to="/login"
                                        className="text-white hover:text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6"
                        >
                            Intelligent
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                {' '}Exam Proctoring
                            </span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                        >
                            Secure online examinations with real-time computer vision monitoring. 
                            Advanced AI technology ensures academic integrity while maintaining student privacy.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                to={isAuthenticated ? "/dashboard" : "/register"}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                {isAuthenticated ? 'Go to Dashboard' : 'Start Free Trial'}
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </Link>
                            <Link
                                to="/demo"
                                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
                            >
                                View Demo
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div 
                        animate={{ 
                            rotate: 360,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
                    />
                    <motion.div 
                        animate={{ 
                            rotate: -360,
                            scale: [1.1, 1, 1.1]
                        }}
                        transition={{ 
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    />
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-black/20 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Advanced Features
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Cutting-edge technology for secure and reliable online examination monitoring
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                            >
                                <feature.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors" />
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-white/20 p-12 rounded-2xl"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Ready to Secure Your Exams?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Join thousands of institutions using ExamVision for secure online examinations
                        </p>
                        <Link
                            to={isAuthenticated ? "/dashboard" : "/register"}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2 group"
                        >
                            {isAuthenticated ? 'Access Dashboard' : 'Get Started Now'}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-gray-400">
                        <p>&copy; 2024 ExamVision. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}