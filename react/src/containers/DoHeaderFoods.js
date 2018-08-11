import { connect } from 'react-redux'
import { HeaderFoods } from '../components/HeaderFoods'
import { changeGoods } from '../store/action/index'

let mapStateToProps

const mapDispatchToProps = (dispatch, ownProps)=> ({
    changeGoods: (goods)=> dispatch(changeGoods(goods, ownProps))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderFoods)