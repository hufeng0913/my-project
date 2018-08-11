import { connect } from 'react-redux'
import { Loadding } from '../components/Loadding'

const mapStateToProps = (state)=> ({
    isFetching: state.isFetching
})

let mapDispatchToProps 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Loadding)