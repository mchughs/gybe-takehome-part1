# Gybe Coding Challenge Part 1

The project has been set up to be simple to deploy. There is no backend and the whole app runs entirely on the client.

## How to run locally

Prerequisites: You'll need a basic Clojure and npm/yarn setup on your machine.

1. Clone the repo
1. Run `npm install` in the root of the project
1. Run `clj -A:dev` to start the http server
1. You should now have the app running at `http://localhost:5444/`

## Possible Improvements

1. Refine the build and deploy process with hooks and branches so that deploys are distict from a feature work.
1. Add some testing, though if we trust the libraries we're using, there is almost no business logic directly present in the app itself.
1. Consider using [UIX](https://github.com/pitch-io/uix) in place of Reagent. UIX is a light React wrapper which lets you write code which is much closer to the latest react idioms, and therefor makes interop with 3rd party components easier.
1. Beyond making the styling and layout prettier, it would be nice if the UI picker components offered multiple selection methods. For example the timezone picker could either have a full-text search to match any city/town to it's equivalent timezone, or even let the user pick their location on a map with a pin. That being said, most people are aware of which big city shares their timezone so this is a 'nice to have' in my opinion.

## Original Challenge Instructions

Using a Clojure dialect, make a very simple timezone converter website and deploy it using GitHub pages or similar. The UI should have the following inputs:

- input time
- input timezone
- output timezone

and should display the corresponding time in the output timezone.
