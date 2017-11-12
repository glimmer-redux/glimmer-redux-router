import { createBrowserHistory } from 'history';

let history;
const makeHistorySingleton = () => {
  if (!history) {
    history = createBrowserHistory();
  }
  return history;
}

export default makeHistorySingleton;
