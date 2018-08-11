import { connect } from 'react-redux'
import { Nav } from '../components/Nav'
import { changeNav } from '../store/action'

const mapStateToProps = (state, ownProps)=> ({
    navDatas: {...state.navDatas}
})

const mapDispatchToProps = (dispatch, ownProps)=> ({
    changeNav: (index,show)=> dispatch(changeNav(index,show))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav)