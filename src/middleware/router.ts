import makeHistorySingleton from './singleton';

let history = makeHistorySingleton();

export default function() {
  return next => action => {
    if (action.type !== 'ATTEMPT_LOCATION_CHANGE') {
      return next(action);
    }

    const { path } = action;
    history.push(path);
    return next({type: 'LOCATION_CHANGE', path});
  };
};
