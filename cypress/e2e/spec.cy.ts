export {};

describe("weather-app", () => {
  it(`check your own location, find the weather for New York, check its coordinates, 
  return to your own location check the weather and coordinates, 
  check if the current weather and forecast data container is minimizing`, () => {
    cy.visit("http://localhost:3000");

    cy.get("button[data-testid=containerGoToLocalisationBtn]")
      .as("goLocalisationBtn")
      .click();

    cy.get('section[data-testid="containerInfoBox"]:nth-child(3)')
      .as("currentWeatherContainer")
      .should("exist");
    cy.get('section[data-testid="containerInfoBox"]:nth-child(4)')
      .as("forecastWeatherContainer")
      .should("exist");

    cy.get(
      'img[class="leaflet-marker-icon leafletIcon leaflet-zoom-animated leaflet-interactive"]'
    )
      .as("positionMarker")
      .click();

    cy.get('h2[data-testid="cityName"]')
      .as("cityName")
      .then((yourLocationCityName) => {
        cy.get('div[class="leaflet-popup-content"]')
          .as("position")
          .then((yourLocationPosition) => {
            cy.get('section[data-testid="containerSearchBar"]')
              .find('input[data-testid="input"]')
              .as("searchBar")
              .type("nowy jork");

            cy.get("@currentWeatherContainer").should("exist");
            cy.get("@forecastWeatherContainer").should("exist");
            cy.get("@searchBar").should("have.value", "nowy jork");
            cy.get("@cityName").should("have.text", "Nowy Jork");
            cy.get("@position").should("have.text", "40.7143N, -74.006E");

            cy.get("@goLocalisationBtn").click();

            cy.get("@currentWeatherContainer").should("exist");
            cy.get("@forecastWeatherContainer").should("exist");
            cy.get("@cityName").should(
              "have.text",
              yourLocationCityName.text()
            );
            cy.get("@position").should(
              "have.text",
              yourLocationPosition.text()
            );
            cy.get("@searchBar").should("have.value", "");

            cy.get("@currentWeatherContainer")
              .find('button[data-testid="containerMinimizeIcon"]')
              .as("currentWeatherContainerMinimizeBtn")
              .click();

            cy.get("@currentWeatherContainer").should("not.exist");
            cy.get("@forecastWeatherContainer").should("exist");

            cy.get("@forecastWeatherContainer")
              .find('button[data-testid="containerMinimizeIcon"]')
              .as("forecastWeatherContainerMinimizeBtn")
              .click();

            cy.get("@currentWeatherContainer").should("not.exist");
            cy.get("@forecastWeatherContainer").should("not.exist");
          });

        cy.get('button[data-testid="containerMinimizeIcon"]:nth-child(3)')
          .as("currentWeatherBtn")
          .click();
        cy.get('button[data-testid="containerMinimizeIcon"]:nth-child(4)')
          .as("forecastWeatherBtn")
          .click();

        cy.get("@currentWeatherContainer").should("exist");
        cy.get("@forecastWeatherContainer").should("exist");
      });
  });
});
