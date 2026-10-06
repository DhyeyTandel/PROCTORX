# PROCTORX

> Product name: ExamVision Client.

A web application for online exam proctoring that uses your computer's camera to monitor students during exams. Built with React and computer vision technology.

## What it does

- Monitors students taking online exams using their webcam
- Detects if students are looking away from the screen
- Provides a dashboard for both students and administrators
- Secure login system with different user roles

## How to run this project

### Step 1: Install Node.js
Download and install Node.js from [https://nodejs.org](https://nodejs.org) (version 16 or newer)

### Step 2: Get the code
```bash
git clone <your-repo-url>
cd PROCTORX
```

### Step 3: Install dependencies
```bash
npm install
```

### Step 4: Start the application
```bash
npm run dev
```

### Step 5: Open in browser
Go to http://localhost:5173 in your web browser

## Test accounts

Use these accounts to test the application:

**Administrator account:**
- Email: admin@examvision.com
- Password: admin123

**Student account:**
- Email: student@examvision.com
- Password: student123

## How to use

1. **Sign up or log in** with one of the test accounts above
2. **Allow camera access** when prompted by your browser
3. **Go to Dashboard** to see your exam history and stats
4. **Start New Exam** to begin a proctored session
5. **Keep your head facing forward** - the system will alert you if you look away

## What each page does

- **Home page**: Introduction and features
- **Login/Register**: Account access
- **Dashboard**: View your exam history and start new exams
- **Proctoring page**: The actual exam monitoring interface

## Technical stuff

**Built with:**
- React 19 for the user interface
- MediaPipe for computer vision
- TailwindCSS for styling
- Framer Motion for animations

**Other commands:**
```bash
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

## Common issues

**Camera not working?**
- Make sure your browser allows camera access
- Close other apps that might be using your camera
- Try refreshing the page

**App won't start?**
- Make sure you have Node.js version 16 or newer
- Delete the node_modules folder and run `npm install` again
- Check that all commands ran without errors

**Slow performance?**
- Close other browser tabs
- Make sure you have good internet connection
- Try using Chrome or Firefox for best performance

## Browser requirements

- Chrome, Firefox, Safari, or Edge (recent versions)
- Camera access permission
- JavaScript enabled
