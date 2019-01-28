import { gql } from 'react-apollo';
import Comment from '../components/Comment';
import { connect } from 'plugin-api/beta/client/hocs';
import { isLoggedInSelector } from 'plugin-api/beta/client/selectors/auth';
import { getSlotFragmentSpreads } from 'plugin-api/beta/client/utils';

const mapStateToProps = state => ({
  isLoggedIn: isLoggedInSelector(state),
});

const slots = [
  'commentReactions',
  'commentAuthorName',
  'commentTimestamp',
  'commentContent',
];

export default connect(
    mapStateToProps
)(Comment);
