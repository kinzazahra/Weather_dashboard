Interactive Weather Dashboard
A beautiful, feature-rich web application that provides real-time weather updates, an interactive geographic map, and a dynamic 5-day temperature forecast. With a modern glassmorphism design and dark mode support, it offers a visually engaging way to track global weather conditions.

Built with passion and logic by Kinza Zahra 🌤️

Features
Real-Time Weather Tracking:

Search for any city to get instant, accurate weather data including Temperature (°C), Humidity, Wind Speed, Pressure, and Visibility.

Dynamic weather icons that update automatically based on current conditions (Sunny, Cloudy, Rainy, Snowy, etc.).

5-Day Forecast & Analytics:

View a clean, card-based layout for the upcoming 5 days.

Visual Trends: Integrated with Chart.js to display an interactive line chart of temperature fluctuations over the next few days.

Interactive Mapping:

Features a live, interactive map powered by Leaflet.js that automatically pans and zooms to the searched city's exact coordinates.

Smart User Experience:

Geolocation Integration: Automatically detects your current location upon loading and displays your local weather immediately.

Dark/Light Mode Toggle: Built-in theme switcher with smooth transitions, saving your preference directly to local storage.

Modern UI Design:

Responsive, glassmorphism-inspired interface with frosted glass effects, gradient backgrounds, and fluid hover animations.

🛠 Tech Stack
Frontend: HTML5, CSS3 (CSS Variables, Flexbox/Grid, Glassmorphism), Vanilla JavaScript (ES6+).

APIs & Libraries:

OpenWeatherMap API: For fetching real-time weather and forecast data.

Chart.js: For rendering the beautiful temperature trend graphs.

Leaflet.js: For the interactive geographical map rendering.

FontAwesome: For UI icons.

📂 Project Structure
Plaintext
Weather_dashboard/
│
├── index.html      # Main layout, search UI, and library CDN links
├── style.css       # Theming, responsive design, and dark mode variables
└── script.js       # API fetching, map initialization, and chart rendering
⚙️ Installation & Setup
Because this is a purely frontend, vanilla JavaScript application, no complex backend or node modules are required!

Clone the Repository:

Bash
git clone <your-repo-url>
cd Weather_dashboard
API Key Setup:

The app uses the OpenWeatherMap API.

Open script.js and locate the API_KEY variable at the top. Ensure it has a valid OpenWeatherMap API key (a default one is included for testing, but you should replace it with your own for production).

Run the Application:

Option 1: Simply double-click index.html to open it in your default web browser.

Option 2 (Recommended): Open the project folder in VS Code, right-click index.html, and select "Open with Live Server" to prevent any CORS issues when loading local assets or external APIs.

🚀 How to Use
Allow Location: When prompted by your browser, allow location access to immediately see the weather for your current city.

Search: Use the top search bar to type in any city name (e.g., "Tokyo", "London", "New York") and hit the search button or press Enter.

Analyze: Review the current stats, check the interactive temperature chart, and explore the Leaflet map to see the geographical location of the weather system.

Toggle Theme: Click the Moon/Sun icon in the top right to switch between Dark Mode and Light Mode.

🔮 Future Improvements
Save "Recent Searches" to local storage for quick access.

Add a toggle to switch between Celsius (°C) and Fahrenheit (°F).

Implement weather alerts or severe weather warnings based on API data.

Made with ❤️ by Kinza Zahra
