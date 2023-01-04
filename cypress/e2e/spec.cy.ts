export {};

describe("weather-app", () => {
  it("searchbar", () => {
    cy.visit("http://localhost:3000");

    cy.get('section[data-testid="containerSearchBar"]')
      .find('input[data-testid="input"]')
      .as("searchBar")
      .type("warszawa");

    cy.get("@searchBar").should("have.value", "warszawa");

    cy.get('h2[data-testid="cityName"]')
      .as("cityName")
      .should("have.text", "Warszawa");
    cy.get('section[data-testid="containerInfoBox"]:nth-child(3)')
      .as("currentWeatherContainer")
      .should("exist");
    cy.get('section[data-testid="containerInfoBox"]:nth-child(4)')
      .as("ForecastWeatherContainer")
      .should("exist");

    cy.get(
      'img[class="leaflet-marker-icon leafletIcon leaflet-zoom-animated leaflet-interactive"]'
    )
      .as("positionMarker")
      .click();

    cy.get('div[class="leaflet-popup-content"]')
      .as("position")
      .should("have.text", "52.2298N, 21.0118E");
  });

  it("click map get position", () => {
    cy.visit("http://localhost:3000");

    cy.get(
      'div[class="leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"]'
    )
      .as("map")
      .click();

    cy.get(
      'img[class="leaflet-marker-icon leafletIcon leaflet-zoom-animated leaflet-interactive"]'
    )
      .as("positionMarker")
      .click();

    cy.get('div[class="leaflet-popup-content"]').should("exist").as("position");
    cy.get('section[data-testid="containerInfoBox"]:nth-child(3)')
      .as("currentWeatherContainer")
      .should("exist");
    cy.get('section[data-testid="containerInfoBox"]:nth-child(4)')
      .as("ForecastWeatherContainer")
      .should("exist");
  });

  it("go to your localisation", () => {
    cy.visit("http://localhost:3000");

    cy.get("button[data-testid=containerGoToLocalisationBtn]")
      .as("goLocalisationBtn")
      .click();

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

            cy.get("@searchBar").should("have.value", "nowy jork");
            cy.get("@cityName").should("have.text", "Nowy Jork");
            cy.get("@position").should("have.text", "40.7143N, -74.006E");

            cy.get("@goLocalisationBtn").click();

            cy.get("@cityName").should(
              "have.text",
              yourLocationCityName.text()
            );
            cy.get("@position").should(
              "have.text",
              yourLocationPosition.text()
            );
            cy.get("@searchBar").should("have.value", "");
          });
      });
  });

  it("minimize currentWeatherContainer and ForecastWeatherContainer", () => {
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

  it("maximize currentWeatherContainer and ForecastWeatherContainer", () => {
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

    cy.get("@currentWeatherContainer")
      .find('button[data-testid="containerMinimizeIcon"]')
      .as("currentWeatherContainerMinimizeBtn")
      .click();
    cy.get("@forecastWeatherContainer")
      .find('button[data-testid="containerMinimizeIcon"]')
      .as("forecastWeatherContainerMinimizeBtn")
      .click();

    cy.get("@currentWeatherContainer").should("not.exist");
    cy.get("@forecastWeatherContainer").should("not.exist");

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
