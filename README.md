# GITHUB OAUTH API

A serverless function to return the personal token used for GitHub Projects.

## Requirements

- Firebase Project
- Firebase CLI
- Node.js > v14
- npm

## Installation Instructions

1. Clone Repo
2. Replace `default` projects property value in `.firebaserc` file with your project id
3. Create a `.env` file using the `.env.example` file and paste your GitHub personal access token in the file
4. Navigate to the functions directory and install the dependencies with `npm install`
5. Run `npm run serve` to build and test the cloud function locally.
6. Run `npm run deploy` to deploy the functions to the live environment.
