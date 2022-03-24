# The Power And Elegance of Redux-Toolkit + Sagas

Thunks are cool, Sagas are much cooler.

## Settings Page

Reordering the Players: the MoveUp and MoveDown buttons on the cards dispatch
a "reorderPlayers" action with the card's current position and direction of move.
The action is retrieved by the redux GameSlice.reducer.reorderPlayers which reorders
the players and writes the new order to global state, which automatically retriggers
a rerender of the cards in their new order. Meanwhile the saga GameSaga is watching
for the "reorderPlayers" action with GameSaga.watchReorderPlayers. Once the GameSlice reducer has finished processing the action, the saga intercepts the action and dispatches another action "testSagaReorder" that GameSlice.reducer.testSagaReorder processes by incrementing counter testSagaReorder in global state, which is rerendered in the counter on the Settings Page!

The combination of redux and sagas is the optimum solution for react state management,
specifically because the built-in react solution using Context appears to cause excessive
rendering of child components. useMemo and useCallback are "patches" to try and fix this,
but it is rather convoluted, whereas redux works from the get-go.

It should be noted however, that when Next.js static site generator or server side rendering is involved or App.getInitialProps is used, things start to get complicated as another store instance is needed on the server to render Redux-connected components. Rerendering of components that have not changed can happen!

The solution is adding next-redux-wrapper (coming up shortly)

#Getting Started

1. Install dependencies yarn install or npm install
2. Run the dev server yarn dev or npm run dev
