![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Javascript Single Page App (SPA)

## Objectives
- Transform a description of a project to a set of **User Stories**.
- Create a **Namespace** for the application.
- Use an Immediately Invoked Function Expression **IIFE** to implement encapsulation/privacy.
- Implement the Module Pattern.

## Instructions

1. Fork and clone.
2. `npm install`.   
	 *This will install javascript packages needed during development like grunt, jasmine, etc.*
3. `bower install`.  
	*This will install javascript packages and libraries needed for the client side code, that is, in the page itself. This app will need jquery.*

## Overview

As a Spotify employee I'm tasked with the implimentation of a Song Playlist. This will run in the browser and at some point in time, *in the future*, it will allow Spotify users the ability to manage, organize and play their songs. 

As explained to the developer, *Initially, the user should be able to see a list of their songs and manage them.* 

This is just a first step in a the construction of a larger project so we're **not** going to think about user registration, login or even sync'ng the list with the Spotify backend servers. *Lot's of stuff we're not doing yet.*


## Step 1: Create User Stories.

User Stories are **small** focused descriptions of functionality that can be done by a developer in a small amount of time.

It's a task, and we work with stakeholders to create these stories/tasks. Each story describes: 

* How important a task is. _It's **priority** relative to other stories._  **Lets set Priority to be from 1 to 5. 1 is highest priority**

* When the task is to be done. We need to determine what is this task's **dependencies**. Another words, what needs to be completed before we can complete this task. What does this story depend on. **Let break our work into 2 week iterations. Iteration 1 will have all the high priority stories and stories that other stories are depending on.**


* It's difficultly. **Often we assign a number like 1,2,4 or 8 to indicate the estimated difficulty. 8 being the most difficult.**

* *(Sometimes)* A very rough estimate of how long it will take. _Usually in hours._

Creating these Stories is a **part** of an ongoing conversation we, as developers, are having with stakeholders. We'll be checking in with stakeholders all the time to make sure we are in sync about exactly what it is we're building!

Let's repeat the task as stated by stated by the Spotify business analyst, he's the *stakeholder*.

*Initially, the user should be able to see a list of their songs and manage them.*

Let's create some User Stories!   
**Save them to the user_stories.txt file**

### User Story 1

As a user when I go to the main page I should see a list of Songs. **(Priority: 1, Iteration: 1, Difficulty: 1)**

### User Story 2
As a user when I go to the main page I should see each Song's title. **(Priority: 1, Iteration: 1, Difficulty: 1)**

### User Story 3
As a user when I go to the main page I can select a Song to view it's duration, price and artist name. **(Priority: 2, Iteration: 1, Difficulty: 2)**

I'm not sure what the stakeholder means when she says "manage"? After some discussion with her she says she want's users to be able to **add** and **remove** Songs.

### User Story 5
As a user on the main page I should be above to add a Song. **(Priority: 2, Iteration: 1, Difficulty: 2)**

### User Story 6
As a user on the main page I should be able to remove a Song. **(Priority: 2, Iteration: 1, Difficulty: 2)**

## Step 2: Find (Domain) Objects.

Let's repeat the task as stated by stated by the business analyst, he's the *stakeholder*.

*Initially, the user should be able to see a list of their songs and manage them.*

I can see that the nouns in this statement are User, List and Song. We'll create a User object later, when we add site registration and login. 

### Domain Objects are:

* Song
* Song List

After talking with the stakeholder she mentioned that each Song should have a title, duration (minutes), price (dollars) and artist name.

### Modelling the Domain Objects.

Let's draw a model of the Domain Objects, Song and Song list on a whiteboard.

Let's find properties and behavior for these objects:

Song: 
* title property
* duration property
* price property
* artist propery
* render method - This will draw a HTML representation of the Song. 

Song List (Playlist): 
* render method - This will draw the list, including all the songs in this playlist.
* add method - Given a song it will be added to the Playlist.
* remove method - Given a song it will be remove the song from the Playlist.

Let's take a snapshot of this these domain objects, their properties and their relationship/s.


## Lab

Create User Stories and Domain Objects/Models for a Todo application. 

As explained to the developer, *Initially, the user should be able to see a list of their tasks and manage them.* 

Each task should have a title, description, id, (must be unique) and a status(reviewed, in-progress or done).

A user should be able to add and remove todo items to the todo list. 

Work in groups of two or three to create these users stories. Save these stories in each group member repos as todo_user_stories.txt.

Make sure you assign priority (1-5), difficulty level (1,2, 4 or 8) and which 2 week iteration it will be done in, typically 1


## Step 3: Implementation

Now that we've done a some planning and software design work we're going to write some code and make it happen. 

*Note that many dive into coding to fast. Much teeth gnashing is a special part of hell for those who do. They typically regret coding before structured thinking.*

### User Story 1 (Implementation)
As a user when I go to the main page I should see a list of Songs.

**Add these lines to the app/index.html**

```
<ul id="spotify-songs"></ul>

<script src="js/play_list.js" type="text/javascript"></script>
```
**Add this code to app/js/app.js**

```
$(document).ready(function(){
  var songs = Spotify.PlayList.init($('#spotify-songs'));
  Spotify.PlayList.render(songs);
});
```

**Create a file app/js/play_list.js**

```javascript

// This will create one global variable for our app.
// It will act as a namespace for our application
var Spotify = Spotify || {};

Spotify.PlayList = {
  getSongs: function(){
    var songs = [];
    songs.push({title: "Lost Cause", duration: 183, price: 1.99, artist:'Beck'});
    songs.push({title: "Teenage spirit", duration: 243, price: 1.09, artist:'Nivarna'});
    songs.push({title: "Whole lotta love", duration: 203, price: 2.99, artist: 'Zeppelin'});
    songs.push({title: "Mother", duration: 605, price: 1.49, artist:'Pink Floyd'});
    return songs;
  },
  // set the HTML Element for the playlist
  init: function(appPlayListElement){
    $playListElement = appPlayListElement;

    // Will eventually be a remote call to get songs from the server 
    return this.getSongs();
  },
  // Render each song into HTML
  render: function(songs){
    var id = 1; 
    songs.forEach(function(song){
     $playListElement.append('<li id="song-' + id.toString() + '" >' + song.title + '</li>');
     id++;
    }); 
  }
};
```

What is that funky code at the top of the file? 

```javascript
var Spotify = Spotify || {};

Spotify.PlayList = {
  getSongs: function(){
  ...
  }
  ...
};  
```

Namespaces dude, namespaces.

## Namespaces

One of the problems that we see is that the names of global variables inside of your app will have the same name as global variable defined in javascript code or libraries your using.

This is called *name collision* and we want to avoid it. 

We want to avoid this by **severely** limiting the number of global variables we create in our app. We're typically create only **one** global variable.

In the above code we declare **one** global variable, `Spotify`, all the code we write in our app, (functions, object literals, ...), will be prefixed by this **one** global variable that is a object literal.

```
var Spotify = {} || Spotify; 
```

Just says that you should create a global variable that is an object literal UNLESS you already have one defined.

Then we give that Spotify object literal a property, 'PlayList', whose value is another object literal.

```
Spotify.PlayList = { ... };
```

We then define methods, 'getSongs, init and render', on the Spotify object literal.

## Big Reminder

Notice that we used an object literal when we need **ONLY ONE** instances of something. 

In this case the app needs **ONLY ONE** Playlist. At least, for now.

## Lab

Create a Todo App. It will have a list of items/tasks. You'll 
### User Story 2 (Implementation)
## Review: Closures

Create a file app/scripts

```javascript
// Because this function returns another function that has access to the
// "private" var i, the returned function is, effectively, "privileged."

function makeCounter() {
  // `i` is only accessible inside `makeCounter`.
  var i = 0;

  return function() {
    console.log( ++i );
  };
}

// Note that `counter` and `counter2` each have their own scoped `i`.

var counter = makeCounter();
counter(); // logs: 1
counter(); // logs: 2

var counter2 = makeCounter();
counter2(); // logs: 1
counter2(); // logs: 2

i; // ReferenceError: i is not defined (it only exists inside makeCounter)
```


### Implement User Story
**Create a file app/js/song.js**

```javascript
// This will create one global variable for our app.
// It will act as a namespace for our application
var Spotify = Spotify || {};

// Constructor function for a Song
Spotify.Song = function(songTitle, songPrice, songDuration, songArtist
  this.title = songTitle;
  this.price = songPrice;
  this.duration = songDuration;
  this.artist = songArtist;
};

```
## Bonus (Optional Section)

If you're looking for extra challenge or practice once you've completed the above, try to...

## Notes

Gotcha's and extra information

## Additional Resources

List additional related resources such as videos, blog posts and official documentation.

- Item 1
- Item 2
- Item 3
