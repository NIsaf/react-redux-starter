Boilerplate using Create React App (React 16.3), React Redux, Redux Thunk, Redux Devtools, React Router (v4), React Helmet, and Enzyme.

NOTES: 
- React Router allows for sub routing (this boilerplate only provides an example of top level routing)
- In this boilerplate, the redux store's entire state is saved to sessionstorage on each update, this can be easily scoped to certain parts of the state and/or at certain times only (such as on route changes)
- A custom LiveRegion component is provided to give a quick way to do aria-live updates without using a portal
- Enzyme is used to allow for shallow rendering for more straightforward component-level tests (setupTests.js is a setup file that enzyme automatically picks up)
- Error boundaries can wrap any part of the component tree. The boilerplate example simply wraps the entire app to provide the user with basic feedback in the event the app crashes in production.
- By instantiating our history object outside of the component tree it is possible to access it and use it for push state in redux thunks (which are not a part of the react component hierarchy by default). Browser history is used by default, but hash or memory can be switched out with a single line change.
- A custom eslint settings file has flags for a11y accessibility warnings
- Complex proptypes can be defined separately for reuse. This boilerplate defines an example in /interfaces
- This boilerplate assumes minimal use of polyfills (instead of importing a library they are added case by case to /polyfills: 2 common polyfills are included by default)
- Connected_View_Boilerplate component is an empty component with redux and helmet and router ready to go
- Profile component demonstrates a simple dynamic page based on an API call using redux
- Form component demonstrates handling formstate through redux state instead of locally
- Home route demonstrates a simple HOC authentication pattern
- Login demonstrates a simple login page with redirecting and using history push state in a thunk
- PrivateRoute demonstrates a typical private route implementation with react-router
- PureComponents are not necessary (and not the preferred choice in all cases) but have the benefit of a preconfigured shoulComponentUpdate lifecycle function
- Using react-router (which takes advantage of context) with purecomponents creates a problem because the component will not necessarily rerender on route changes. Wrapping the components in withRouter means the router changes are exposed to shouldComponentUpdate
- /sass_partials has a single example file demonstrating that sass imports are functioning