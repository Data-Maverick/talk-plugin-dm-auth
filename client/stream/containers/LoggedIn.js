import { connect } from 'react-redux';
import { isLoggedInSelector } from 'plugin-api/beta/client/selectors/auth';

const mapStateToProps = state => ({
        isLoggedIn: isLoggedInSelector(state),
});

function ProfileContainer(props) {
    console.log({ props });
    var containerEl = document.getElementById("talk-embed-stream-container");
    console.log(containerEl);
    if (props.isLoggedIn) {
        containerEl.classList.add("isLoggedIn");
        containerEl.classList.remove("notLoggedIn");
    } else {
        containerEl.classList.add("notLoggedIn");
        containerEl.classList.remove("isLoggedIn")
    }
    return null;
}

export default connect(mapStateToProps)(ProfileContainer);
