import { ActionCreatorGeneric } from 'redux-typed';
import * as FeesClaimExpenses from './FeesClaimExpenses';
import { reducer as reduxForm } from 'redux-form'
import { createStore, combineReducers } from 'redux'

// The top-level state object
export interface ApplicationState {
    feesClaimExpenses: FeesClaimExpenses.FeesState,
    address: FeesClaimExpenses.AddressState,
    person: FeesClaimExpenses.PersonState,
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    feesClaimExpenses: FeesClaimExpenses.reducer,
    form: reduxForm
};

//const reducer = combineReducers(reducers);
//const store = createStore(reducer);

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export type ActionCreator = ActionCreatorGeneric<ApplicationState>;
