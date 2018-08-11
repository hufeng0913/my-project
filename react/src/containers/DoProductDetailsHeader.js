import { connect } from 'react-redux'
import { ProductDetailsHeader } from '../components/ProductDetailsHeader'

const mapStateToProps = (state, ownProps)=> ({
    goodDetail: state.goodDetail
})

let mapDispatchToProps 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetailsHeader)