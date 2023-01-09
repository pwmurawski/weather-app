<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://weather-app-pwmurawski.vercel.app">
    <img src="public/favicon.ico" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">weather-app</h3>

  <p align="center">
    <a href="https://weather-app-pwmurawski.vercel.app">View Demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

![Product Screen Shot][product-screenshot]
 <div align="center">
    <img src=".github/Lighthouse.png" alt="Lighthouse" />
 </div>
 
 <br/>
 
Aplikacja pogodowa umożliwia użytkownikom wyświetlenie aktualnych informacji pogodowych dla wybranej lokalizacji.
<br/>
Proces ten rozpoczyna się od wskazania miejsca na mapie za pomocą interfejsu graficznego lub wpisania nazwy miejsca.
<br/>
Następnie aplikacja pobiera dane pogodowe z API, i prezentuje je w formie przyjaznej dla użytkownika.
<br/>
Aplikacja umożliwia również wyświetlenie prognozy pogody na nadchodzące dni. Wszystkie te funkcje są dostępne z poziomu intuicyjnego interfejsu, który umożliwia użytkownikom łatwe i szybkie korzystanie z aplikacji.

### Built With

* [![React][React.js]][React-url]
* [![TypeScript][TypeScript.ts]][TypeScript-url]
* [![React-Leaflet][React-Leaflet.js]][React-Leaflet-url]
* [![Styled-Components][Styled-Components]][Styled-Components-url]
* [![Jest][Jest]][Jest-url]
* [![Testing-Library][Testing-Library]][Testing-Library-url]
* [![Cypress][Cypress]][Cypress-url]

<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Get a free API Key at https://openweathermap.org
2. Clone the repo
   ```sh
   git clone https://github.com/pwmurawski/weather-app.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env.local`
   ```js
   REACT_APP_API_APPID=your_API_Key
   ```
5. Runs the app in the development mode
   ```sh
   npm start
   ```
   Open http://localhost:3000 to view it in the browser.
   
6. Builds the app for production to the build folder
   ```sh
   npm run build
   ```

<!-- CONTACT -->
## Contact

pwmurawski123@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: .github/weather-app-pwmurawski.vercel.app.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript.ts]: https://img.shields.io/badge/TypeScript-20232A?style=for-the-badge&logo=typescript&logoColor=3791d2
[TypeScript-url]: https://www.typescriptlang.org
[React-Leaflet.js]: https://img.shields.io/badge/React%20Leaflet-20232A?style=for-the-badge&logo=Leaflet&logoColor=4dcb9b
[React-Leaflet-url]: https://react-leaflet.js.org
[Styled-Components]: https://img.shields.io/badge/Styled%20Components-20232A?style=for-the-badge&logo=Styled%20Components&logoColor=e9cd16
[Styled-Components-url]: https://styled-components.com
[Jest]: https://img.shields.io/badge/Jest-20232A?style=for-the-badge&logo=Jest&logoColor=7a0530
[Jest-url]: https://jestjs.io
[Testing-Library]: https://img.shields.io/badge/Testing%20Library-20232A?style=for-the-badge&logo=Testing%20Library&logoColor=e86868
[Testing-Library-url]: https://testing-library.com
[Cypress]: https://img.shields.io/badge/Cypress-20232A?style=for-the-badge&logo=Cypress&logoColor=666666
[Cypress-url]: https://www.cypress.io
