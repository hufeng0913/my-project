import { connect } from 'react-redux'
import { ProductDetails } from '../components/ProductDetails'
import { changeNav } from '../store/action'

let mapStateToProps

const mapDispatchToProps = (dispatch, ownProps)=> ({
    changeNav: (()=> dispatch(changeNav(1,false)))()
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetails)