import { connect } from 'glimmer-redux';
import Component from '@glimmer/component';

class LinkTo extends Component {

  handleClick(event: MouseEvent): void {
    event.preventDefault();
    this.update(this.args.path);
  }

};

const dispatchToActions = dispatch => ({
  update: (path) => dispatch({type: 'ATTEMPT_LOCATION_CHANGE', path})
});

export default connect(null, dispatchToActions)(LinkTo);
