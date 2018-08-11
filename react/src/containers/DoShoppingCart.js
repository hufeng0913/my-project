import { connect } from 'react-redux'
import { ShoppingCart } from '../components/ShoppingCart'
import { changeNav } from '../store/action'

let mapStateToProps

const mapDispatchToProps = (dispatch, ownProps)=> ({
    changeNav: (()=> dispatch(changeNav(2,true)))()
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCart)