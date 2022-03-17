
# API  With Google-Sheets

## About
This project consists of a service that will be consumed by some application to create, read, update or remove an object from a google spreadsheet (Google Sheets). This project is used by a react native application, so in its logic there are routes for authentication/login but mainly routes for requesting data from specific spreadsheets according to the needs of the application.

## Configuration
This application uses NodeJs with express  and [Google-spreadsheet](https://github.com/theoephraim/node-google-spreadsheet). To connect to your Spreadsheet, take its ID and place it in the appropriate location (in Credentials.json), this file can be generated within Google's own platform to authorize access, just insert it into the project.