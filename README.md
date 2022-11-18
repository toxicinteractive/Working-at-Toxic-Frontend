# Pre-interview assignment

## System description

This is an online library over popular TV shows. In the library, the user want to be able to list all th shows with cover and title, when the user hovers over a show, they will see the rating of the show (avarge vote). You should be able to find a show given a title or language, and list the shows by latest air date.
When the user clicks on a show, a new page with detailed information about the selected show will appear.

## Instructions

- Fork or clone this repository (click "Use this Template")
- Make an estimate on how long you think it would take to complete this project
- Use any frontend framework
- Used the api, data.json or signup and us https://www.themoviedb.org/tv
- Include instructions on how to run your project in this README
- Spend approximately 4-6 hours on this project

When you're done, preferably within a week of seeing this, send us a pull request with your work in this repo! Bonus points if your commitments are descriptive, and what future development of the project could be.

##Estimate
About 6 hours, probably the most work will go to starting a new project, since i rarely do that. Im used to working on developing existing content.

### Hour 1

Created app using npx create-react-app. I wanted to expriment with Vite since appearently its faster to both create the app and works well with typrscript. But I literally found out about it yesterday, so im not riksinging it. This time.
Frontend framework: Bootstrap. Im somewhat used to it, and it is commonly used.
I want to learn more about post man so im gonna use the api instead of the data provided by the assignment.
Signing up for the API key was a process, they demanded to know what state I live in, even though i checked that im from Sweden. I just wrote "No state". Hopefully they won't get angry.
Postman usage exploration has officially started.
Reading API documentation.
api_key=59b4bf87e337717965103693e06ba19c
https://api.themoviedb.org/3/movie/550?api_key=59b4bf87e337717965103693e06ba19c worked in postman, gave me a movie. Great start. Fight Club, appearently.
Currently having trouble figuring out the API...
https://api.themoviedb.org/3/search/movie?api_key=59b4bf87e337717965103693e06ba19c&query=Jack+Reacher searches up the movie jack reacher. Good for implementing "search for movie" functionality. Now lets figure out how to list movies.
Trying to figure out where the API key goes in the "get popular movies" API call https://api.themoviedb.org/3/discover/movie?sorty_by=popularity.desc
https://api.themoviedb.org/3/tv/popular?api_key=59b4bf87e337717965103693e06ba19c worked fined and gave me an array of movies, now this i can work with.

### Hour 2

Created component folder
Ate breakfast
Trying to list movies images, realized it doesnt give a full link to the image. So i cant just map the url into an image tag in the MovieeList component.
The "try it out" on TMDB documentation seems to not work/is down. Unkucky!

### Hour 3

Will work on image later. Everything is hardcoded atm, image problem will be solved later when im actually using the api. SO,
i created the async function getMovieRequest. It sets the state of the movies-state to the api call.
Ok images was not hard at all. The base url of the img is https://image.tmdb.org/t/p/w500/ (which i read several times in the documentation but for some reason decided not to believe in). Knowing this information i just add the api data poster_path to the end of the string.
Time to start working on showing average vote on hover.

uses npm install mdb-react-ui-kit . Probably should have set up docker. (ok installed it for nothing, might be making my own hover)

### Hour 4

Solved hover with state instead inside of the MovieList component.
Spent way too much time on hover styling, and me plus design from scrach = bad combo. So it looks a bit ungly for now.

### Hour 5

Start working on search.
Search works, but not optimally.

### Hour 6

Sorted by date descending. Modified the hover display. Might have done it worse though, i dont know design, what looks good and whatnot.

## Summary

I did not finish this assignment in time, but I'm not dissappointed about it. A majority of goals were hit and I learned postman along the way!
To start the project follow the readme inside the toxic-frontend-lucas folder.

### Future development

- On hover should just hover THE movie not all movies , so playing around with IDs would be neccessary I bet.
- Speaking of movieID, when a movie is clicked it should take the user to a detaied page of the movie. Create new folder called "Pages" and route to the movie page.
- Modify the API url instead having two different ones for (i think). At least handle them differently than today.
- In addition to as is now, render most popular if no search results are available.
- Beg someone for a design sketch so that i can fix all the "wonky" styling that the page uses and make it look actually good.
- Make website responsible by using Responsive Web Design Media Queries.
- Component library as an npm package would be neat
- Make button and hover box into a component. And keep making new components in the future.
- Change the file structure. Don't have all css in app.css. Each component should have their own folder with a corresponding css.
- Make api "search" call when clicking on a button instead of on change in the input.
- Search should always be available, even when browsing most popular.
- Add more filtering options.
- If i had time i'd use docker, if this project were to grow big and more people develop on it, docker would be god-sent.
