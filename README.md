# Gybe Coding Challenge Part 1

The project has been set up to be simple to deploy. There is no backend and the whole app runs entirely on the client.

## How to run locally

Prerequisites: You'll need a basic Clojure and npm/yarn setup on your machine.

1. Clone the repo
1. Run `npm install` in the root of the project
1. Run `clj -A:dev` to start the http server
1. You should now have the app running at `http://localhost:5444/`

## Original Challenge Instructions

Using a Clojure dialect, make a very simple timezone converter website and deploy it using GitHub pages or similar. The UI should have the following inputs:

- input time
- input timezone
- output timezone

and should display the corresponding time in the output timezone.
