import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
// Redux
//import ReduxState from './ReduxState';
import {createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
export default function ({reducer}) {
  const Store = createStore(reducer,
    applyMiddleware(thunk)
  );
  //,window.devToolsExtension ? window.devToolsExtension() : f => f()
  return {
    Meteor,
    // FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Store: Store,
    dispatch: Store.dispatch,
    //ReduxState: new ReduxState(),
    Tracker
  };
}
