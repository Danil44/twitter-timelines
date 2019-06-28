/* eslint-disable import/no-named-as-default */
import { connect } from 'react-redux';
import TimelinesList from './TimelinesList';
import { getTimelinesFromState } from '../../redux/timelines/timelinesSelectors';
import { getTimelinesStart } from '../../redux/timelines/timelinesActions';

const mapStateToProps = state => ({
  items: getTimelinesFromState(state),
});

const mapDispatchToProps = dispatch => ({
  getTimelines: query => dispatch(getTimelinesStart(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimelinesList);
