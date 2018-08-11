import { ProductDetailsContent } from '../components/ProductDetailsContent'
import { connect } from 'react-redux'
import { switchList } from '../store/action'

const mapStateToProps = (state, ownProps)=> ({
    userToEvaluate: state.userToEvaluate,
    activeNum: state.activeNum
})

const mapDispatchToProps = (dispatch, ownProps)=> ({
    switchList: (target, index) => dispatch(switchList(target, index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContent)