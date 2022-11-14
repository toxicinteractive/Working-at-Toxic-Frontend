# Pre-interview assignment

## System description
This is an online library over popular TV shows. In the library, the user want to be able to list all th shows with cover and title, when the user hovers over a show, they will see the rating of the show (avarge vote). You should be able to find a show given a title or language, and list the shows by latest air date.
When the user clicks on a show, a new page with detailed information about the selected show will appear.

## Instructions
* Fork or clone this repository (click "Use this Template")
* Make an estimate on how long you think it would take to complete this project
* Use any frontend framework
* Used the api, data.json or signup and us https://www.themoviedb.org/tv
* Include instructions on how to run your project in this README
* Spend approximately 4-6 hours on this project

When you're done, preferably within a week of seeing this, send us a pull request with your work in this repo! Bonus points if your commitments are descriptive, and what future development of the project could be.

# Applicant Notes

## How to run
* Install Node & Node Package Manager
* Clone this branch
* Navigate to project folder ex. through terminal
* Once within root folder enter "npm ci" to download all packages
* Enter "npm start" to build & run server
* Access the provided address through a browser (default: http://localhost:1234)

## Missing
* Cannot filter by language - I ran out of time

## Further improvements
* Add filter by language (idea: dropdown list with filter types: "name", "languages", etc. that changes a Component State which could adjust the filtering property.
* Add error handling to functions and also an ErrorBoundary component
* Re-factor list sorting and filtering. I do some funny stuff there...
* Consider using a Context component instead of passing callback function through props.