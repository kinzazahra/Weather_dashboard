# 🌤️ Interactive Weather Dashboard

A sleek, modern web application that delivers real-time weather insights, an interactive global map, and a visually rich 5-day forecast experience. Designed with a glassmorphism aesthetic and full dark mode support, this dashboard makes exploring weather data both intuitive and engaging.

---

## ✨ Features

### 🌍 Real-Time Weather Tracking

* Search any city worldwide and instantly view:

  * 🌡 Temperature (°C)
  * 💧 Humidity
  * 🌬 Wind Speed
  * 🔽 Pressure
  * 👁 Visibility
* Dynamic weather icons that update based on live conditions (Sunny, Rainy, Snowy, etc.)

---

### 📊 5-Day Forecast & Insights

* Clean, card-based layout for upcoming weather
* Interactive temperature trend chart powered by **Chart.js**
* Easily analyze fluctuations over time

---

### 🗺 Interactive Map Integration

* Live map powered by **Leaflet.js**
* Automatically zooms and pans to the selected city
* Visualize exact geographic weather location

---

### 🧠 Smart User Experience

* 📍 **Geolocation Support**
  Automatically detects your location and shows local weather on load

* 🌙 **Dark / Light Mode Toggle**
  Smooth theme switching with preference saved in local storage

---

### 🎨 Modern UI Design

* Glassmorphism-inspired interface
* Frosted glass effects & gradient backgrounds
* Smooth animations and hover interactions
* Fully responsive across devices

---

## 🛠 Tech Stack

### Frontend

* HTML5
* CSS3 (Flexbox, Grid, CSS Variables, Glassmorphism)
* Vanilla JavaScript (ES6+)

### APIs & Libraries

* **OpenWeatherMap API** → Weather data
* **Chart.js** → Temperature charts
* **Leaflet.js** → Interactive maps
* **Font Awesome** → Icons

---

## 📂 Project Structure

```
Weather_dashboard/
│
├── index.html      # Layout, UI structure, CDN links
├── style.css       # Styling, themes, responsiveness
└── script.js       # API calls, logic, charts, map handling
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd Weather_dashboard
```

### 2. Set Up API Key

* Open `script.js`
* Locate:

```js
const API_KEY = "your_api_key_here";
```

* Replace with your own **OpenWeatherMap API key**

---

### 3. Run the Application

**Option 1 (Quick Start):**

* Open `index.html` directly in your browser

**Option 2 (Recommended):**

* Use **VS Code Live Server**
* Prevents potential CORS issues and improves development experience

---

## 🚀 How to Use

1. **Allow Location Access**
   Get instant weather updates for your current city

2. **Search for a City**
   Enter any city name (e.g., *Tokyo, London, New York*)

3. **Explore Data**

   * View current weather stats
   * Analyze the 5-day forecast chart
   * Check location on the interactive map

4. **Switch Themes**

   * Use the Sun/Moon toggle in the top-right corner

---

## 🔮 Future Improvements

* 🔎 Save **recent searches** for quick access
* 🌡 Toggle between **Celsius (°C) and Fahrenheit (°F)**
* ⚠️ Add **weather alerts & severe condition warnings**
* 📱 Further mobile UX enhancements

---

## ❤️ Acknowledgment

Built with creativity, curiosity, and clean logic by **Kinza Zahra**.

---

> *Turning raw weather data into a beautiful, interactive experience.*
