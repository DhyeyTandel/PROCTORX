# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
Exam Vision Client is a React-based web application for exam proctoring using computer vision. It uses MediaPipe for real-time face detection and head pose estimation to monitor student behavior during online exams.

## Development Commands

### Core Development
```bash
# Install dependencies
npm i

# Start development server (opens at http://localhost:5173/)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Demo Accounts
For testing the authentication system:
- **Admin**: admin@examvision.com / admin123
- **Student**: student@examvision.com / student123

## Architecture & Key Components

### Technology Stack
- **Frontend**: React 19.1.1 with Vite 7.1.7
- **Routing**: React Router DOM for client-side navigation
- **Styling**: TailwindCSS 4.1.13 with custom components
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for modern iconography
- **UI Components**: Headless UI for accessible components
- **Computer Vision**: MediaPipe Tasks Vision (@mediapipe/tasks-vision)
- **Additional**: OpenCV.js (@techstark/opencv-js)

### Core Architecture

#### Application Architecture
The app now features a complete web application structure with:
- **Landing Page**: Modern marketing site with feature showcase
- **Authentication System**: Login/register with role-based access
- **Dashboard**: User-specific interface with statistics and controls
- **Proctoring Interface**: Enhanced computer vision monitoring system

#### Main Application Flow
- `App.jsx` → React Router → Protected Routes → Page Components
- Authentication: `AuthContext` provides user state management
- Routing: Public routes (Landing, Login, Register) and Protected routes (Dashboard, Proctor)

#### Computer Vision Pipeline
The heart of the application is in `ProctorMainWindow.jsx` which implements:
1. **MediaPipe Integration**: Loads face landmark detection models from CDN
2. **Real-time Processing**: Uses `requestAnimationFrame` for continuous face detection
3. **Head Pose Calculation**: Converts 2D facial landmarks to 3D head pose angles
4. **Behavioral Inference**: Determines if student is "Focused", "Looking Left", or "Looking Right"

#### Key Facial Landmarks Used
The system tracks 6 key facial landmarks for pose estimation:
- Nose tip (landmark 1)
- Chin (landmark 9) 
- Left eye left corner (landmark 130)
- Left mouth corner (landmark 57)
- Right mouth corner (landmark 287)
- Right eye right corner (landmark 359)

### Custom Computer Vision Utilities

#### Head Pose Estimation (`src/utils/headPoseUtils.js`)
- Implements PnP (Perspective-n-Point) solving without OpenCV dependency
- Converts MediaPipe normalized coordinates to pixel coordinates
- Uses 3D facial model points in millimeters for real-world pose calculation
- Returns pitch, yaw, roll angles in degrees

#### Pure JavaScript PnP Solver (`src/utils/pnp-rodrigues.js`)
- **solvePnP()**: Solves perspective projection using Levenberg-Marquardt optimization
- **rodrigues()**: Converts rotation vectors to rotation matrices
- Implements complete computer vision pipeline without external CV libraries
- Uses Direct Linear Transform (DLT) for pose initialization
- Refines pose estimation with iterative optimization

### Component Structure

#### `ProctorMainWindow.jsx`
- **State Management**: Tracks face angles (pitch/yaw/roll) and inference status
- **Camera Setup**: Configures webcam with 640x480 resolution
- **Detection Loop**: Continuous face landmark detection and pose calculation
- **UI Feedback**: Real-time display of angles and behavioral status with color coding
- **Inference Logic**: Yaw angles > 25° = "Looking Right", < -25° = "Looking Left"

#### Visual Feedback System
- **Red Background**: Triggers when student looks away or face not detected
- **Real-time Display**: Shows pitch, yaw, roll values and behavioral inference
- **Video Stream**: Live webcam feed with overlay information

## Important Implementation Notes

### MediaPipe Configuration
- Models loaded from CDN: `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm`
- Face landmarker model: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`
- Running mode: "VIDEO" for real-time processing

### Performance Considerations
- Uses `requestAnimationFrame` for smooth 60fps processing
- Implements custom PnP solver to avoid heavy OpenCV.js dependency
- Optimized landmark processing using only 6 key points instead of full 468-point mesh

### Browser Requirements
- Requires webcam access via `navigator.mediaDevices.getUserMedia()`
- WebAssembly support needed for MediaPipe
- Modern browser with ES6+ support

## File Structure
```
src/
├── components/
│   ├── ProctorPageLayout.jsx    # Main layout container
│   ├── ProctorMainWindow.jsx    # Core CV processing component
│   └── Navbar.jsx               # Simple navigation header
├── utils/
│   ├── headPoseUtils.js         # Head pose estimation logic
│   └── pnp-rodrigues.js         # Pure JS computer vision algorithms
├── App.jsx                      # Root component
└── main.jsx                     # React app entry point
```

## Linting Configuration
- Uses ESLint 9.36.0 with React hooks and refresh plugins
- Custom rule: `no-unused-vars` allows uppercase variable names (for constants)
- Ignores `dist` directory in build output