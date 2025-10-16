import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for existing session on app load
        const storedUser = localStorage.getItem('examvision_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (credentials) => {
        try {
            // Simulate API call - replace with actual authentication
            if (credentials.email === 'admin@examvision.com' && credentials.password === 'admin123') {
                const userData = {
                    id: '1',
                    email: credentials.email,
                    name: 'Admin User',
                    role: 'admin'
                };
                setUser(userData);
                localStorage.setItem('examvision_user', JSON.stringify(userData));
                return { success: true };
            } else if (credentials.email === 'student@examvision.com' && credentials.password === 'student123') {
                const userData = {
                    id: '2',
                    email: credentials.email,
                    name: 'John Doe',
                    role: 'student'
                };
                setUser(userData);
                localStorage.setItem('examvision_user', JSON.stringify(userData));
                return { success: true };
            } else {
                return { success: false, message: 'Invalid credentials' };
            }
        } catch (error) {
            return { success: false, message: 'Login failed' };
        }
    };

    const register = async (userData) => {
        try {
            // Simulate API call - replace with actual registration
            const newUser = {
                id: Date.now().toString(),
                email: userData.email,
                name: userData.name,
                role: 'student'
            };
            setUser(newUser);
            localStorage.setItem('examvision_user', JSON.stringify(newUser));
            return { success: true };
        } catch (error) {
            return { success: false, message: 'Registration failed' };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('examvision_user');
    };

    const value = {
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin'
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};