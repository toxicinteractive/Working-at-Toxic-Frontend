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

## How to run the app
* Clone this repository
* Navigate to the \victor-toxic-frontend folder in your console
* Run the command npm install
* Run the command npm start and the server should start on localhost(127.0.0.1) port 3000, if you have any other applications running on that port close them


## How i worked
I worked in three approximently two hour sessions and inbetween i tried researching what i needed to get to the next stage of the project.
Unfortunantly I did not have enough time to complete the entire project in the timeframe but will in my freetime try to figure it out!

## First session
I started with the basics, I had never coded in React before but realised quickly it was alot like React Native so it was not so challanging at first.
I had already made a similar application with the API for schoolwork so I started with getting all the popular movies from the API.

The secound thing I did during that session was to create the MovieCard component which was going to display all the movies, I was going to use a foreach
but after looking through some tutorials online the Map function seemed to make more sense since the movie data would change in the search function later on.

After mapping every movie from the popular section I styled the page, I realise this might have been a mistake since it took up a lot of my time when i could have
just used css frameworks. I also added a onHover to show the rating like the documentation said. I made sure to use display flex to and try to avoid using pixels as much as I could to keep the website responsive which i think turned out good.

## Second session
This session I added the searchbar into the page, I chose to use a Select since that made the most sense to me at the time, I used a useState to keep track if Search was 
selected or not, it took some time to figure out how to pass booleans through the select element but i figured it out eventually.

I also created a navbar where the search and select and a title could be located.

To make sure not all popular movies were shown i added a condition check to see if the select "isSearch" was true or false and based on that condition i either rendered the popular movies or searched movies.

I also utilized the useEffect to check ever time the searchWord was change and when it was it ran the function to get the movies of that searchWord. Also if there were no matches i made it display "No results".

After i thought i was done with my session i read through the instructions again and noticed that the movies were suppoused to be arranged by date so i quickly added that in aswell with a sort on the results from the query.

## Third and final session

The focus of this final session was to implement the detailed page for the movies, I started looking into routing, I implemented links on all the movieCards but for some reason the routing did not work and unfortunantly I ran out of time.

I also commented on some of the code and cleaned up some warnings and errors + this README.md.

## Overall
I am proud of what I managed to come up with, I know it came up short but coming in to this project I had never coded in pure React and I learned a lot of things and even though I probably did not even scratch the surface of what react has to offer it was a fun experience overall!

## Improvments
First of all i would finish all the instructions by adding the detailed movies page. In it I would add all the information and maybe even a trailer if there was one in the query results, I would also add a similar movies row at the bottom with movies that are similar whitch you can get from here https://developers.themoviedb.org/3/movies/get-similar-movies

I would also like to sort movies by language, then I would try and improve the user experience when searching for movies. When searching for movies in the current app the images take a while to load in and can overlap, I would try and fix that with maybe some sort of indicator that the image is loading. I was looking into the useQuery which seemed to have that sort of built in but i simply did not have enough time.

The option to favorite certain movies and save it in the users session or cookie could also be a nice feature or if you want to mark movies you have already watched. You could also implement a rating system since the API alows you to submit ratings https://developers.themoviedb.org/3/movies/rate-movie

The last thing I would consider adding would be pagination to the list of movies, right now you only get the first page of movies.

## Extra pullRequest
I figured out routing and added a veeery simple description page for movies! Anyway this took a little longer than the 6 hours so just look at the original pull request.