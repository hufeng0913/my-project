import { connect } from 'react-redux'
import { ProductDetailsFooter } from '../components/ProductDetailsFooter'
import { addCat } from '../store/action'

const mapStateToProps = (state, ownProps)=> ({
    goodsNum: state.goodsNum
})

const mapDispatchToProps = (dispatch, ownProps)=> ({
    addCat: ()=> dispatch(addCat())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetailsFooter)