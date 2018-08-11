import { connect } from 'react-redux'
import { ShoppingCartSettlement } from '../components/ShoppingCartSettlement'

const mapStateToProps = (state, ownProps)=> ({
    totalPrice: state.totalPrice,
    length: state.catDatas.length
})

let mapDispatchToProps

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCartSettlement)