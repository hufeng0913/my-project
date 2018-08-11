import { connect } from 'react-redux'
import { Register } from '../components/Register'
import { changeNav, updataInput, fetchPosts} from '../store/action'

const mapStateToProps = (state, ownProps) => ({
    username: state.userData.username, 
    password: state.userData.password,
    rePassword: state.userData.rePassword
})

const mapDispatchToProps = (dispatch, ownProps)=> ({
    changeNav: (()=> dispatch(changeNav(3,false)))(),
    updataInput: ((name, value)=> dispatch(updataInput(name, value))),
    checkInput: (
        ({username, password, rePassword, history})=> {
            if(username === "" && password === "" && rePassword === "") alert("Sorry,用户名和密码相关栏内容不能为空")
            else if(password !== rePassword) alert("Sorry,再次确认密码不和第一次密码一样，请重新输入")
            else return dispatch(fetchPosts({doStyle:'register', username, password:rePassword, history}))
        }
    )
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)