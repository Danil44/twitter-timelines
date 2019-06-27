import { connect } from 'react-redux';
import TimelinesList from './TimelinesList';
import { getTimelinesFromState } from '../../redux/timelines/timelinesSelectors';

const mapStateToProps = state => ({
  items: getTimelinesFromState(state),
});

export default connect(mapStateToProps)(TimelinesList);
