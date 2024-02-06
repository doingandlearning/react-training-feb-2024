# Component Techniques

## Overview
In this lab you'll enhance the "library" web page from the previous lab so that it defines effect hooks .

## Roadmap
Here's a brief summary of the exercises in this lab. More detailed instructions follow later in this lab document:
1.	Familiarization with the 'solution' web pages
2.	Getting started with the 'student' web page
3.	Storing and retrieving the 'likes' count in local storage 
4 (if time persists): Persist the show as list/table preference to local storage
 
## Exercise 1: Familiarization with the 'solution' web pages
Open either of the following web pages in a browser:
    solution/index.html
		
This web page is semantically equivalent, and the UI is the same as in the previous lab. The one difference is that if you refresh the page, the like counter will persist.
 
 
## Exercise 2: Getting started with the 'student' web page
Now go to the student folder and open the following web page in a text editor:
    student/index.html

This file is the same as the solutions from the previous lab. Take a moment to get familiar. Notice that if you refresh the page on this one, the like counter does not persist.


## Exercise 3: Storing and retrieving the 'likes' count in local storage

Enhance the LikePanel component so that it stores and retrieves the 'likes' count in local storage. Local storage is an HTML5 feature that enables you to store state persistently on the local file system (similar to cookies). 

Imagine you have a variable named likes. You can save it in local storage as follows:

```js
window.localStorage.likes = likes
```

You can read the likes value from local storage as follows:

```js
let likes = window.localStorage.likes
```

So, let's do it…
-	Define an effect hook that is only invoked the first time the component is loaded. Try to get the 'likes' count value from local storage. If the value exists, copy the value into the component's state.
-	Define an effect hook that is conditionally invoked if the value of the 'likes' count has changed. Write the current value of the 'likes' count to local storage. In this way, local storage stays in sync with the current value of the 'likes' count in memory.
- After you've made these changes, your LikePanel component should remember the 'likes' count when you close the web page and then reopen it later. Verify this is what happens.


## Exercise 4 (if time persists): Persist the show as list/table preference to local storage

If you have changed between list/table, whenever you refresh the page it will always be in table mode.

We're going to persist this option to localStorage as well.
- Initialize State Correctly: Modify the initial state of tabularFormat to be null to indicate that the preference has not been loaded yet.

### Retrieve the Preference:

- Implement a React.useEffect hook that runs once when the component mounts.
- Retrieve the tabularFormat preference from local storage.
- Convert the retrieved string value to a boolean and update the state.

### Store the Preference:

- Implement another React.useEffect hook that runs whenever tabularFormat changes.
- Store the current state of tabularFormat in local storage.

### Test the Functionality:

- Ensure that toggling the view updates the preference in local storage.
- On reloading the page, the last set preference should be applied.