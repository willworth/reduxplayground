# Redux playground

this starts from a "Redux Crash Course With React" by Brad Traversy.  If you want to follow along with his course, pay attention to the fact that componentWillMount is now deprecated, so you should use componentDidMount instead.  (That's what you'll see in this repo.)


[the youtube tutorial](https://www.youtube.com/watch?v=93p3LxR9xfM)



## notes



npm i redux react-redux redux-thunk



bring in a provider = the glue for react and redux

//app.js

import {  Provider } from 'react-redux';


wrap app in provider


then 

<Provider store={store}>