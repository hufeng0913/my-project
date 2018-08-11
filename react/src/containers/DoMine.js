import { connect } from 'react-redux'
import { Mine } from '../components/Mine'
import { changeNav } from '../store/action'

let mapStateToProps

const mapDispatchToProps = (dispatch, ownProps)=> ({
    changeNav: (()=> dispatch(changeNav(3,true)))()
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mine)