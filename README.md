# Countries Explorer App

A React application that allows users to explore countries around the world using real data from the REST Countries API.

Users can search for countries by name, filter them by region, and view key information such as population and region.  
This project was built as part of **Week 3 — Countries Explorer Assignment**.

## GitHub Repository

https://github.com/somaiamosadeq1212/assignment_3

## Screenshots

### Home Page
![Home Screenshot](https://github.com/somaiamosadeq1212/assignment_3/raw/main/screenshots/home.PNG)
### Search / Filter Results
![Results Screenshot](https://github.com/somaiamosadeq1212/assignment_3/raw/main/screenshots/results.PNG)

## Features

- Load real country data from REST Countries API
- Search countries by name (debounced search)
- Filter countries by region
- Sort countries by population (high → low)
- Handle loading and error states
- Display “No results found” message
- Safe UI rendering for missing data fields

## Technologies Used

- React (Hooks)
- Vite
- REST Countries API
- Bootstrap
- Lucide React Icons

## API Endpoints Used

This app uses the **REST Countries API** (no API key required):

- **All countries**  
  https://restcountries.com/v3.1/all?fields=name,flags,region,population,cca3

- **Search by country name**  
  https://restcountries.com/v3.1/name/{name}?fields=name,flags,region,population,cca3

- **Filter by region**  
  https://restcountries.com/v3.1/region/{region}?fields=name,flags,region,population,cca3

## ⚠️ API Note

The default `/all` endpoint may sometimes return unstable or large responses.  
To improve reliability and performance, this project uses API endpoints with the `fields` parameter to fetch only the required data.

## How to Run the Project Locally
### Clone the repository:

  ```bash
  git clone https://github.com/somaiamosadeq1212/assignment_3.git
  ```

### Navigate to the project directory:

  ```bash
  cd assignment_3
  ```

### Install dependencies:

  ```bash
  npm install
  ```

### Start the development server:

  ```bash
  npm run dev
  ```

### Open the app in your browser:

  ```bash
  http://localhost:5173
  ```

### Project Structure

  ```bash
  assignment_3/
  ├─ src/
  │  ├─ components/
  │  │  ├─ SearchBar.jsx
  │  │  ├─ CountryList.jsx
  │  │  ├─ CountryCard.jsx
  │  │  └─ SkeletonGrid.jsx
  │   ├─ App.jsx
  │  └─ main.jsx
  ├─ screenshots/
  │  ├─ home.png
  │  └─ results.png
  ├─ package.json
  ├─ README.md
  └─ vite.config.js
  ```

### Assignment Checklist
  - [x] Fetch data using useEffect
  - [x] Search by country name
  - [x] Filter by region
  - [x] Loading and error handling
  - [x] Proper state management
  - [x] Correct list keys
  - [x] Defensive UI (no crashes on missing fields)

### Bonus Features Implemented
  - Debounced search (500ms)
  - Sort by population (descending)
  - “No results found” UI

## Author
  - Somaya Mosadiq

⭐ This project was created for educational purposes as part of a frontend development assignment.
