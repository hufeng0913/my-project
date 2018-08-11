<template>
    <div>
        <Search/>
        <div class="mui-content">
            <div class="devider b-line"></div>
            <form class="mui-input-group">
                <div class="mui-input-row b-line" v-for="item of userData" :key="item.id">
                    <label v-text="item.label"></label>
                    <input :type="item.type" :class="item.class" :placeholder="item.placeholder" v-model="item.value">
                </div>
                <div class="mui-button-row" :style="item.style" v-for="item of buttonData" :key="item.id">
                    <a :type="item.atype" :class="item.aclass" v-text="item.content" @click="login(item.content)"></a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    const Search = ()=> import(/* webpackChunkName: "group-search" */ '@/components/Search')
    import { mapActions } from 'vuex'
    export default {
        name: 'login',
        data() {
            return {
                userData: [
                    {id:1, type:'text', label:'用户名：', placeholder:"请输入您的用户名", class:'', value:''},
                    {id:2, type:'password', label:'密码：',placeholder:"请输入您的密码", class:'mui-input-clear', value:''}
                ],
                buttonData: [
                    {id:3, atype:'button', class:'mui-button-row', style:'padding-top:20px; padding-bottom:10px; height:auto', aclass:'mui-btn mui-btn-primary login', content:'立即登录'},
                    {id:4, atype:'', class:'', style:'padding-bottom:10px; text-align:right; padding-right:15px', aclass:'', content:'注册账号'}
                ]
            }
        },
        components: {
            Search
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.getBoolean({
                    searchPic: 'mui-icon-arrowleft',
                    chatbubblePic: '',
                    searchContent: '登录'
                })
                vm.changeHref('/home')
            })
        },
        methods: {
            ...mapActions([
                'getBoolean', 'changeHref'
            ]),
            login(content) {
                if(content === '立即登录') {
                    if(this.userData[0].value === '' || this.userData[1].value === '') alert('Sorry, 用户名和密码不能为空')
                    else{
                        this.axios.defaults.withCredentials = true
                        this.axios.get('http://localhost:9999/login', {
                            params: {
                                doStyle: 'logIn',
                                username: this.userData[0].value,
                                password: this.userData[1].value
                            }
                        })
                        .then( response=> {
                            if(response.data.username === "OK", response.data.password === "OK") {
                                localStorage.setItem("username", this.userData[0].value);
                                this.$router.push('/home');
                            }
                            else if(response.data.username === "NG") alert('Sorry, 用户名不存在')
                            else if(response.data.password === "NG") alert('Sorry, 用户名与密码不符合')
                        })
                        .catch( error=> {
                            console.log(error);
                        })
                    }
                }
                else {
                    this.$router.push('/register')
                }
            }
        }
    }
</script>

<style scoped>
    .login {
        width:90%; 
        padding:10px 0
    }
    .mui-content {
        padding-top: 44px;
    }
</style>

