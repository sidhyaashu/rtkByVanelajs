const store = require("./app/store.js")
const cakeActions = require("./features/cake/cakeSlice").cakeActions

console.log("initialState",store.getState());
const unsubscribe = store.subscribe(()=>{
    console.log("Updated stste",store.getState());
});


store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(6));

unsubscribe();