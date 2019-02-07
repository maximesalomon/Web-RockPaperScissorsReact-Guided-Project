# Objectives
  * Learn about application state.
  * Learn to organize application state into a state object.
  * Understand that the UI in its totality is a function of app state. `const app = (appState) => UI`
  * Learn to use a top-level container component to hold (1) the state and (2) the methods that operate on this state.
  * Learn to use presentational components that take slices of this state as props, and return UI based on these slices.
  * Understand that presentational components change state indirectly, using functions passed in as props.

# Requirements
We need `node` & `npm`, as well as packages `live-server` and `eslint` installed _globally_. VSCode's `eslint` extension is recommended. Command line commands are run inside the project folder. This guide uses npm but should work the same using yarn.