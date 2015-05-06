![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Javascript Single Page Application (SPA)

## Objectives
- Create a Single Page Application(SPA) for Spotify.
- Transform a description of a project to a set of **User Stories** and **Domain Objects/Models**.
- Create a **Namespace** for the application.
- Use an Immediately Invoked Function Expression(**IIFE**) to implement encapsulation/privacy.

## Instructions

1. Fork and clone.
2. `npm install`.
	 *This will install javascript packages needed during development like grunt, jasmine, etc.*
3. `bower install`.
	*This will install javascript packages and libraries needed for the client side code, that is, in the page itself. This app will need jquery.*

## Overview

As a Spotify employee I'm tasked with the implementation of a Song Playlist. This will run in the browser and at some point in time, *in the future*, it will allow Spotify users the ability to manage, organize and play their songs.

As explained to the developer, *Initially, the user should be able to see a list of their songs and manage them.*

This is just a first step in a the construction of a larger project so we're **not** going to think about user registration, login or even sync'ng the list with the Spotify backend servers. *Lot's of stuff we're not doing yet.*


## Step 1: Create User Stories.

User Stories are **small** focused descriptions of functionality that can be done by a developer in a small amount of time.

They are a task, and we work with **stakeholders**, typically a business analyst or end user, to create these stories/tasks. Each story describes:

* How important a task is. _It's **priority** relative to other stories._  **Lets set Priority to be from 1 to 5. 1 is the highest priority**

* When the task is to be done. We need to determine what is this task's **dependencies**. Another words, what needs to be completed before we can complete this task. What does this story depend on. **Let break our work into 2 week iterations. Iteration 1 will have all the high priority stories and stories that other stories are depending on.**


* It's difficultly. **Often we assign a number like 1,2,4 or 8 to indicate the estimated difficulty. 8 being the most difficult.**

* *(Sometimes)* A very rough estimate of how long it will take. _Usually in hours._

Creating these Stories is a **part** of an ongoing conversation we, as developers, are having with stakeholders. We'll be checking in with stakeholders all the time to make sure we are in sync about exactly what it is we're building!

Let's repeat the task as stated by the Spotify business analyst, she's the *stakeholder*.

*Initially, the user should be able to see a list of their songs and manage them.*

Let's create some User Stories!
**Save them to the user_stories.txt file**

#### User Story 1
As a user when I go to the main page I should see a list of Songs.
**(Priority: 1, Iteration: 1, Difficulty: 1)**

#### User Story 2
As a user when I go to the main page I should see each Song's title.
**(Priority: 1, Iteration: 1, Difficulty: 1)**

#### User Story 3
As a user when I go to the main page I can select a Song to view it's duration, price and artist name.
**(Priority: 2, Iteration: 1, Difficulty: 2)**

I'm not sure what the stakeholder means when she says "manage"? After some discussion with her she says she want's users to be able to **add** and **remove** Songs.

### User Story 5
As a user on the main page I should be able to add a Song to the Playlist.
**(Priority: 2, Iteration: 1, Difficulty: 2)**

### User Story 6
As a user on the main page I should be able to remove a Song from the Playlist.
**(Priority: 2, Iteration: 1, Difficulty: 2)**

## Step 2: Find Domain Objects/Models.

The **Domain** of this app is the same business that Spotify is in. Allowing users to organize and play songs through the Spotify web application. Of course, there are other companies in this business domain.

Let's repeat the task as stated by the stakeholder.

*Initially, the user should be able to see a list of their songs and manage them.*

I can see that the nouns in this statement are User, SongList/Playlist and Song. We'll create a User object later, when we add site registration and login.

### Domain Objects are:

* Song
* Song List/Playlist

After talking with the stakeholder she mentioned that each Song should have a title, duration (minutes), price (dollars) and artist name.

### Modelling the Domain Objects.

Let's draw a model of the Domain Objects, Song and Playlist on a whiteboard. Let's model properties and behavior for these objects:

Song:

* title property
* duration property
* price property
* artist propery
* render method - This will draw a HTML representation of the Song.

Playlist:

* render method - This will draw the list, including all the songs in this playlist.
* add method - Given a song it will be added to the Playlist.
* remove method - Given a song, or song title, it will remove the song from the Playlist.

Let's take a snapshot of these domain objects, their properties and their relationships. And save them in the repo.


## Lab

Create User Stories and Domain Objects/Models for a Todo application.

As explained to the developer, *Initially, the user should be able to see a list of their tasks and manage them.*

Each task should have a title, description, id, (must be unique) and a status (not started, in-progress or done).

A user should be able to add items to, and remove items from, the todo list.

Work in groups of two or three to create these users stories. Save these stories in each group member's repo as todo_user_stories.txt.

Make sure you assign priority (1-5), difficulty level (1,2, 4 or 8) and which 2 week iteration it will be done in, typically 1.

Show you domain model diagrams and user stories to an instructor!

## Step 3: Implementation

Now that we've done a some planning and software design work we're going to write some code and make it happen.

*Note that many dive into coding too fast. Much teeth gnashing in a special part of hell for those who do. They typically regret coding before, at least some, structured planning and design.*

### User Story 1 (Implementation)
As a user when I go to the main page I should see a list of Songs.

**Add these lines to the app/index.html**

```html
<ul id="spotify-songs"></ul>
...
<script src="js/play_list.js" type="text/javascript"></script>
```
**Create a file app/js/play_list.js**

```javascript
/* global Spotify */

// This will create one global variable for our app.
// It will act as a namespace for our application
var Spotify = Spotify || {};

Spotify.PlayList = {
  getSongs: function(){
    var songs = [];
    songs.push({title: 'Lost Cause', duration: 183, price: 1.99, artist:'Beck'});
    songs.push({title: 'Teenage spirit', duration: 243, price: 1.09, artist:'Nivarna'});
    songs.push({title: 'Whole lotta love', duration: 203, price: 2.99, artist: 'Zeppelin'});
    songs.push({title: 'Mother', duration: 605, price: 1.49, artist:'Pink Floyd'});
    return songs;
  },
  // set the HTML Element for the playlist
  init: function(appPlayListElement){
    this.$playListElement = appPlayListElement;

    // Will eventually be a remote call to get songs from the server
    return this.getSongs();
  },
  // Render each song into HTML
  render: function(songs){
    var id = 1;
    songs.forEach(function(song){
     this.$playListElement.append('<li id="song-' + id.toString() + '" >' + song.title + '</li>');
     id++;
    });
  }
};
```
**Add this code to app/js/app.js**

```javascript
/* global Spotify, $ */

$(document).ready(function(){
  var songs = Spotify.PlayList.init($('#spotify-songs'));
  Spotify.PlayList.render(songs);
});
```

**Run this app on the command line.**

```bash
$ grunt serve
```

What is that funky code at the top of the file?

```javascript
/* global Spotify */
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

One of the problems that we see is that the names of global variables inside of your app will have the same name as a global variable defined in javascript code or libraries your using.

This is called *name collision* and we want to avoid it.

We want to avoid this by **severely** limiting the number of global variables we create in our app. We're typically going to create only **one** global variable for our applications.

In the above code we declare **one** global variable, `Spotify`, all the code we write in our app, (functions, object literals, ...), will be prefixed by this **one** global variable that is an object literal.

```javascript
var Spotify = {} || Spotify;
```

This just says that you should create a global variable that is an object literal UNLESS you already have one defined. *Typically, you'll break your code into multiple files. Whichever file is loaded first and has this code will create our app's global variable.*

Then we give that Spotify global object literal a property, 'PlayList', whose value is another object literal that we will use to define the playlist.

```javascript
Spotify.PlayList = { ... };
```

We then define methods, (getSongs, init and render), on the Spotify.PlayList object literal.

## Big Reminder

Notice that we used an object literal when we need **ONLY ONE** instances of something. In this case the app needs **ONLY ONE** Playlist. At least, for now.

## Lab

Implment a Todo App. It will have a list of items/tasks. You'll implement the todo list user story you created from the last lab. Base this implementation on what we've done above.

## Demo

Honestly, I'm not crazy about how we are coding up each Song. We're using object literals to represent Songs in code. I mean, what if the song needs behavior, like render the song to HTML. Do I just add a method for that behavior to every single object literal?

Ok, say we do that. Although it seems like a lot of duplication. What happens when we want to change how that method is implemented?

Then we have to change, **every single method for every single song object literal**. Thats just crazy!

Lets create a Song Constructor function that we can use to **instantiate** each Song object.

**Create a file app/js/song.js**

```javascript
/* global Spotify */

var Spotify = Spotify || {};

// Constructor function for a Song
Spotify.Song = function(songTitle, songPrice, songDuration, songArtist){
  this.title = songTitle;
  this.price = songPrice;
  this.duration = songDuration;
  this.artist = songArtist;
};

Spotify.Song.prototype.render = function($playListElement, id){
  this.$playListElement.append('<li id="song-' + id.toString() + '" >' + this.title + '</li>');
}
```

And use it in the playlist. **Change app/js/play_list.js**

```javascript
...
getSongs: function(){
    var songs = [];
    songs.push(new Spotify.Song('Lost Cause', 183, 1.99,'Beck'));
    songs.push(new Spotify.Song('Teenage spirit', 243, 1.09,'Nivarna'));
    songs.push(new Spotify.Song('Whole lotta love', 203, 2.99,'Zeppelin'));
    songs.push(new Spotify.Song('Mother', 605, 1.49, 'Pink Floyd'));
    return songs;
  }
...

render: function(songs){
    var id = 1;
    songs.forEach(function(song){
     song.render(this.$playListElement, id);
     id++;
    });
  }
```

**Add this line to the app/index.html**

```
<script src="js/song.js" type="text/javascript"></script>
```

Now getSongs will use the Song constructor and the render behavior for a song is implemented as a method on the Song.

If we need to change the render method we do it **Once**, in one place.

## Lab
Make the same changes to your Todo list app as a team.

Show an instructor your *beautiful DRY code.*


## Demo

I'm still not happy about some of this. Specifically, we expose a playlist method, getSongs, to client code. This method is only used by another playlist method. So lets hide or make this getSongs method **private**.

We also expose the internal array of songs used in a playlist. This should also be hidden away from the client code. As an implementer I should be able to change this in my code without worrying if some client code depends on it being an array.

And generating a Song id should be a responsibility of the Song class. Why should the Playlist know that a Song needs an id? It shouldn't.

### Encapsulation with Closure and IIFE.

Remember that when we invoke an outer function that it will have all it's variables and inner functions contained within that outer function's **scope**.

#### Encapsulation
We can hide, **encapsulate**, that outer function's variables and inner functions from all client code outside of that function. In other words, we'll be making these inner functions and variables **private**.

Also, we make them **private** because we don't want to give client code the ability to change our internal implementation of a song list.

#### Closure
We can also return inner functions or variables defined inside that outer function. And that returned inner function still has access to all of that outer function's **scope**. This ability or behavior is called **closure**.

#### Immediate Invoked Function Expression(IIFE)

Let's look at how an IIFE can implement **encapsulation** and **closure**.

**Change app/js/play_list.js**

```javascript
/* global Spotify */
var Spotify = Spotify || {};

Spotify.PlayList = function(){
  // private songs list
  var _songs = [],
  _$playListElement;

  // private method, only used by _init method
  function _getSongs(){
    _songs.push(new Spotify.Song('Lost Cause', 183, 1.99,'Beck'));
    _songs.push(new Spotify.Song('Teenage spirit', 243, 1.09,'Nivarna'));
    _songs.push(new Spotify.Song("Whole lotta love", 203, 2.99,'Zeppelin'));
    _songs.push(new Spotify.Song("Mother", 605, 1.49, 'Pink Floyd'));
  };

  function _init(appPlayListElement){
    _$playListElement = appPlayListElement;
    _getSongs(); // call private _getSongs method
  };

  // Render each song into HTML
  function _render(){
    var id = 1;
    // song list is now private.
    _songs.forEach(function(song){
     song.render(_$playListElement, id);
     id++;
    });
  };

  return {
    init: _init,
    render: _render
  }
};
```

Better, now we are keeping our song list, _songs, and _getSongs method private. Clients don't need and can't invoke getSongs. And they should not be able to change how the internal song list is implemented. Good.

**Change app/js/app.js**

But, we need to change the client code now.

```javascript
/* global Spotify */
$(document).ready(function(){
  // Invoke the function and return the object literal defined
  // inside the Spotify.Playlist scope.
  var pl = Spotify.PlayList()

  // Invoke playlist methods.
  pl.init($('#spotify-songs'));
  pl.render();
});
```

See, this client code cannot access getSongs the Playlist's internal representation of the song list. Good!

But, wait look at that `Spotify.Playlist()` code. Huh, whats that for? We'll we have to actually invoke the function to get the object literal representing the playlist.

Let's get around this and clean this up using an **IIFE**.

It would be nice if we could **Immediate Invoke** the function used to get the playlist. Lets try this.

```javascript
...
// Change.
// Spotify.PlayList = function(){
Spotify.PlayList = (function(){
...
// And at the end of the file
// };
}();
```

Here we wrap the function inside parens and invoke the function immediatly. *Sorry, yes we do need the parens*

Now this is an **Immediately Invoked Function Expression(IIFE)**.

**Change app/js/app.js**

```
/* global Spotify */
$(document).ready(function(){
  Spotify.PlayList.init($('#spotify-songs'));
  Spotify.PlayList.render();
});
```

See no funky `Spotify.Playlist()`.

**The IIFE is a very common JS Pattern**


Finally, lets update the Song as well to use an IIFE.

**Change app/js/song.js**

```javascript
/* global Spotify */
var Spotify = Spotify || {};

Spotify.Song = (function(){
  // set the private id variable.
  var _id = 1;

  // Inner Constructor function for a Song
  function Song(songTitle, songPrice, songDuration, songArtist){
    this.title = songTitle;
    this.price = songPrice;
    this.duration = songDuration;
    this.artist = songArtist;
    this.id = _id++;
  };

  Song.prototype.render = function($playListElement){
    $playListElement.append('<li id="song-' + this.id.toString() + '" >' + this.title + '</li>');
  };

  // return the Constructor function.
  return Song;
})();
```

Noticed how we made the Song id private and used it in the render function. Good, now playlist doesn't need to know about Song ids.

**Change app/js/play_list.js**

```javascript
...
 function _render(){
    _songs.forEach(function(song){
     song.render($playListElement);
    });
  };
...
```

No id in the playlist render function.

## Lab

Update your Todo list to use an IIFE as we have done above.


## Bonus (Optional Section)

Create the Playlist add and remove methods. Notice that we'll need to create a form with a couple of input fields for the Song properites.

#### Implement User Story 5, (Add a song to the playlist)
We'll need a button that has a click handler, perhaps a method on the playlist called add, that will read the Song form and create a new Song instance then add this new song object to the playlist internal _songs array.

#### Implement User Story 6, (Remove a song from the playlist)

We'll need a button or link on a each song in the playlist that will invoke a handler that will  find the selected song by title and remove it from the playlist's _songs array.

## Extra Super Wow Bonus (Optional Section)

Add add and remove to the Todo List.


## Additional Resources

- [IIFE Pattern](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
