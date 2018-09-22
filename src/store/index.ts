import { combineReducers, Reducer } from 'redux';

// Import state types and reducers here
import { StaticState } from './scene/types';
import sceneReducer from './scene/reducer';

// The top-level state object
export interface ApplicationState {
  scene: StaticState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  scene: sceneReducer
});
