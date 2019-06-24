# Would You Rather?: A Game of Choices

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Would You Rather?** was created as part of *Udacity's React Nanodegree Program* and fulfills the Would You Rather? application rubric.

## Project Description

This application allows for users to post and answer user-submitted *Would you Rather* polls/questions, and tracks their progress in a leaderboard (`/leaderboard`) where they can compete with their friends to see who has participated the most with the platform.

At the main route (`/`), users will be prompted to login before viewing the Dashboard (`/`), where all polls answered or unanswered by the current user can be viewed. Users can view additional details about a poll by clicking the "view poll" buttons on this page.

At the add new poll route (`/add`), users can create new polls which will display on the home page once submitted and view their progress on the leaderboard (`/leaderboard`).

Finally, users may not view any pages without being logged in, so once a user has logged out using the "logout" button in the navigation, they will be brought back to `/` and be prompted to login before viewing the app again.

## Running the Project

Before starting the project, you will need to add the required scripts to your project. These dependencies are noted in `package.json` and can be added to your project by running:

```
$ npm install
```

Once dependencies are installed and you're ready to start the project, you can run:

```
$ npm start
```

This runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Further Reading

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).