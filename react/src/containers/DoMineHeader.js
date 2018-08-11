import { connect } from 'react-redux'
import { MineHeader } from '../components/MineHeader'
import { updataInput } from '../store/action'

const mapStateToProps = (state, ownProp)=> ({
    username: state.userData.username
})

const mapDispatchToProps = (dispatch, ownProp)=> ({
    updataInput: (name, value)=> dispatch(updataInput(name, value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MineHeader)