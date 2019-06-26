import { connect } from 'react-redux';
import { getTimelinesStart } from '../../redux/timelines/timelinesActions';
import TimelinesSearch from './TimelinesSearch';

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(getTimelinesStart(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(TimelinesSearch);
