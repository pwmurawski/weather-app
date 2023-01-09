import { createGlobalStyle } from "styled-components";

export const LeafletStyles = createGlobalStyle`
  .leaflet-container {
    width: 100vw;
    height: 100vh;
    cursor: default;
  }
  
  .leafletIcon {
    top: -15px;
  }

  .leaflet-left {
    left: unset;
    right: 0;
  }

  .leaflet-top {
    top: unset;
    bottom: 0;
  }

  .leaflet-left .leaflet-control {
    margin-right: 10px;
  }

  .leaflet-top .leaflet-control {
    margin-bottom: 25px;
  }
`;
