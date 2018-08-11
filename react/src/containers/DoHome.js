import { connect } from 'react-redux'
import { Home } from '../components/Home'
import { changeNav, loadding } from '../store/action'

let mapStateToProps

const mapDispatchToProps = (dispatch, ownProps)=> ({
    changeNav: (()=> dispatch(changeNav(0,true)))()
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)