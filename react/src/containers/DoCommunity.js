import { connect } from 'react-redux'
import { Community } from '../components/Community'
import { changeNav } from '../store/action'

let mapStateToProps

const mapDispatchToProps = (dispatch, ownProps)=> ({
    changeNav: (()=> dispatch(changeNav(1,true)))()
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Community)