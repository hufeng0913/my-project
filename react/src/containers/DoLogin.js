import { connect } from 'react-redux'
import { Login } from '../components/Login'
import { changeNav, updataInput, fetchPosts, loadding} from '../store/action'

const mapStateToProps = (state, ownProps)=> ({
    username: state.userData.username,
    password: state.userData.password
})

const mapDispatchToProps = (dispatch, ownProps)=> ({
    changeNav: (()=> dispatch(changeNav(3,false)))(),
    updataInput: (name, value)=> dispatch(updataInput(name, value)),
    checkInput: (
        ({username, password, history})=> {
            if(username !== '' && password !== '') return dispatch(fetchPosts({doStyle:'logIn', username, password, history}))
            else if(username === '' || password === '') alert('Srroy,用户名与密码不能为空')
        }
    )
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)