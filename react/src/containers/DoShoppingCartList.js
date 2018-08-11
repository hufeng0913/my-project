import { connect } from 'react-redux'
import { ShoppingCartList } from '../components/ShoppingCartList'
import { add, reduce, checked} from '../store/action'

const mapStateToProps = (state, ownProps)=> ({
    catDatas: state.catDatas
})

const mapDispatchToProps = (dispatch, ownProps)=> ({
    add: (id)=> dispatch(add(id)),
    reduce: (id)=> dispatch(reduce(id)),
    checked: (id)=> dispatch(checked(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCartList)
