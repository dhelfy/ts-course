# About the Application

The application was written to learn how to use **TypeScript** with **React**. It was developed by following [this video](https://www.youtube.com/watch?v=92qcfeWxtnY) from Ulbi. My approach was to first watch a video segment to understand what we were about to implement and what tools the author used for each feature. Then, I would create a task in Obsidian where I described:

* What needed to be implemented (without details, for example, if I needed to write a universal list component, I would just note: the component's name, what it should accept as input, and what it should return).

* I would list the technologies I needed for the implementation (in the case of the list, it was an article on using generics with functional components).

Once the task was ready, I would start working on it. If I had no idea what to do, I would return to the video and refer to the solution.

When the implementation was complete, I would go back to the video, see how it was done there, and look for areas where I could improve my solution.

# Running the Application and Its Contents

## What the Application Uses
The project uses **Vite** as a bundler.

**Axios** is used for server requests.

**React-router-dom** is used for routing.

## Running the App
To run the app, you need to clone the repository to your local machine and install the dependencies with the command `npm i`.

Once the installation is complete, start the application using the command `npm run dev`.

## Application Structure

The app consists of several pages:
* `About` - A page with a brief description of the app
* `TodosPage` - A page with to-do items
* `UsersPage` - A page with user information
* `UserItemPage` - A page with details about a specific user

The app does not have any specific purpose or underlying idea; it was developed solely for practice.

# What Was Learned and Implemented

* How to create and type functional components in **React** when using **TypeScript**
* How to work with `children` during typing
* How to use enums in TypeScript
* How to type `useState`
* How to type server responses when using `axios`
* How to create flexible components with generic types
* How to type event objects
* How to type `useRef`
* How to handle certain typing scenarios in routing with `react-router-dom`

## Conclusion
This project turned out to be a great learning experience, providing me with a lot of knowledge about using React with TypeScript and various libraries like `axios` or `react-router-dom`. It gave me the confidence to move on to more complex projects.

As I mentioned before, the project was built by following a video by Timur Ulbi. I'm extremely grateful to him for such high-quality and comprehensive material available for free. Just like with the project I wrote to learn React, I'm leaving a [link](https://www.youtube.com/@UlbiTV) here as a token of appreciation.
