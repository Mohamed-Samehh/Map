# Map (Dynamic Data Map)

This project is an Angular application that integrates the **Leaflet library** to create an interactive, dynamic map. The map features a switchable view between street and satellite layers and dynamically displays points and legends based on data fetched from a backend service.

## Live Demo

🚀 **Explore the live version of the Angular Map Project on Netlify:** [Dynamic Data Map on Netlify](https://data-mapp.netlify.app/)

Netlify provides a convenient way to deploy Angular applications, ensuring that the live version is automatically updated whenever changes are pushed to the repository. This deployment allows users to interact with the map and explore its features online.

## Table of Contents

- [Live Demo](#live-demo)
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

## Overview

This project aims to provide a simple yet powerful example of how to integrate Leaflet maps into an Angular application. With this map, users can toggle between different map views (street and satellite) and see dynamic points of interest and legends that update based on data fetched through an Angular service.

## Features

- **Interactive Map**: The map is fully interactive, allowing users to zoom in, zoom out, and pan across the map.
- **Switchable Map Views**: Easily switch between a standard street view and a satellite view with the built-in layer control.
- **Dynamic Data Rendering**: The map dynamically displays points and legends according to the data fetched from a backend service, demonstrating how to integrate real-time data into the map.
- **Responsive Design**: The map is responsive and adjusts to different screen sizes, providing a good user experience on both desktop and mobile devices.

## Technologies Used

- **Angular 10.2.4**: A powerful front-end framework for building single-page applications.
- **Node.js 12.22.12**: The runtime environment required for running Angular CLI and managing dependencies.
- **Leaflet**: A lightweight, open-source library for mobile-friendly interactive maps.
- **Esri World Imagery**: Used as the satellite tile layer provider for high-quality satellite imagery.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, used throughout the application.

## Installation

Follow these steps to install and run the Angular Leaflet Map project:

1. **Clone the Repository**:
    - First, clone the repository from GitHub:
    ```bash
    git clone https://github.com/Mohamed-Samehh/Map
    cd Map
    ```

2. **Install Dependencies**:
    - Install the required dependencies using npm:
    ```bash
    npm install
    ```

3. **Run the Application**:
    - After installing the dependencies, start the Angular development server:
    ```bash
    ng serve
    ```

4. **Access the Application**:
    - Open your browser and navigate to `http://localhost:4200/` to view the application.

## Usage

After launching the application:

- The map will load centered at the default coordinates `[13.453223, -16.681229]` with a zoom level of 13.
- Use the layer control in the top-right corner of the map to switch between the "Street Map" and "Satellite Map" views.
- The map automatically updates to display points and legends based on the data fetched from the `DataService`.

### Interactive Map Features:

- **Zooming and Panning**: You can zoom in/out and pan around the map using mouse controls or touch gestures.
- **Pop-ups**: Click on any map point to see a pop-up with information about that point.
- **Legend Control**: The map displays a dynamic legend on the bottom right, reflecting the different types of data points displayed on the map.

## Deployment

The project can be ready for deployment using the following steps:

1. **Build the Project**:
   ```bash
   ng build --prod --output-path docs --base-href /Map/
