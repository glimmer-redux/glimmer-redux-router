import { connect } from 'glimmer-redux';
import Component, { tracked } from '@glimmer/component';

class Route extends Component {

  @tracked('history')
  get match() {
    let activePath = this.history;
    return {
      path: activePath
    }
  }

  @tracked('match')
  get isActive() {
    if (this.args.path !== this.match.path) {
      return false;
    }
    return true;
  }

};

const stateToComputed = state => ({
  history: state.location.history
});

export default connect(stateToComputed)(Route);
