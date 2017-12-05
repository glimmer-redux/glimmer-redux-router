import { connect } from 'glimmer-redux';
import Component, { tracked } from '@glimmer/component';
import makeHistorySingleton from '../../../middleware/singleton';

let history = makeHistorySingleton();

class Router extends Component {

  constructor(args) {
    history.listen(() => {
      this.update(history.location.pathname);
    });
    super(args);
  }

};

const dispatchToActions = dispatch => ({
  update: (path) => dispatch({type: 'ATTEMPT_LOCATION_CHANGE', path})
});

export default connect(null, dispatchToActions)(Router);
