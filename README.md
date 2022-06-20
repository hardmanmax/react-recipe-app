# Max’s notes:
To run this locally, you need to create a .env file in the root and sign up for a free API key from Spoonacular (https://spoonacular.com/food-api). Once you have this, add the following to the .env file:
REACT_APP_API_KEY= yourSpoonacularKey

## A live version of this site can be found at 
https://symphonious-cajeta-e4c1d8.netlify.app/

## Local storage
This application also uses local storage. As the free tier of Spoonacular’s API has a limit of 150 requests per day, I implemented a local storage function to reduce the number of API calls. This will mean that the same results appear every time the home page and cuisine pages are refreshed. To remove this from your local storage:
In your browser, go to Developer Tools > 
Application >
Storage >
Local Storage >
(url of site) >
Right click on each of the options to delete. 
If the number of daily requests has been exceeded, an error message will appear on-screen. 

## Reflections:
The API had a few limitations in the data that could consistently be called (eg, every recipe lists a cooking time of 45 minutes). It would have been nice to include a recipe summary, but these varied so much in their length and format that it looked terrible. This was also true of the instructions and ingredients. There may be some inconsistencies on the recipe detail page, but I’ve done my best to standardise these. Some of the cuisines described in the docs were also missing. 
For styling, I used Material UI and React-Splide (as carousels were not a feature of MUI at time of writing). This also made it much easier to make this app mobile-friendly. 
I also began a create-your-own recipes feature, which would list user-created recipes on the home page alongside existing data, using context API. But it proved difficult to make this interact in the same way as the components built with API data, and this also would have required significant upheaval of the routing setup, which I was not prepared/able to do. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
