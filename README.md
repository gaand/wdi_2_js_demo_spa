![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Javascript Single Page App (SPA)

## Objectives
- Create a namespace for the application.
- Use an Immediately Invoked Function Expression to implement encapsulation/privacy.
- Implement the Module Pattern.

## Instructions

1. Fork and clone.
2. `npm install`.   
	 *This will install javascript packages needed during development like grunt, jasmine, etc.*
3. `bower install`.  
	*This will install javascript packages and libraries needed for the client side code, that is, in the page itself. This app will need jquery.*


## Review: Closures

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

## Bonus (Optional Section)

If you're looking for extra challenge or practice once you've completed the above, try to...

## Notes

Gotcha's and extra information

## Additional Resources

List additional related resources such as videos, blog posts and official documentation.

- Item 1
- Item 2
- Item 3
