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
                    <a :type="item.atype" :class="item.aclass" v-text="item.content" @click="register(item.content)"></a>
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
                    {id:2, type:'password', label:'密码：',placeholder:"请输入您的密码", class:'mui-input-clear', value:''},
                    {id:3, type:'password', label:'确认密码：',placeholder:"请再次输入您的密码", class:'mui-input-clear', value:''}
                ],
                buttonData: [
                    {id:4, atype:'button', class:'mui-button-row', style:'padding-top:20px; padding-bottom:10px; height:auto', aclass:'mui-btn mui-btn-primary login', content:'注册'},
                    {id:5, atype:'', class:'', style:'padding-bottom:10px; text-align:right; padding-right:15px', aclass:'', content:'已有账号登录'}
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
                    searchContent: '注册'
                })
                vm.changeHref('/home')
            })
        },
        methods: {
            ...mapActions([
                'getBoolean', 'changeHref'
            ]),
            register(content) {
                if(content === '注册') {
                    if(this.userData[0].value === '' || this.userData[1].value === '' || this.userData[2].value === '') alert('Sorry, 用户名和密码不能为空')
                    else if(this.userData[1].value !== this.userData[2].value ) alert('Sorry, 您输入的两次密码不匹配，请重新确认')
                    else{
                        this.axios.defaults.withCredentials = true
                        this.axios.get('http://localhost:9999/login', {
                            params: {
                                doStyle: 'register',
                                username: this.userData[0].value,
                                password: this.userData[2].value
                            }
                        })
                        .then( response=> {
                            if(response.data.register === 'OK') {
                                localStorage.setItem("username", this.userData[0].value);
                                this.$router.push('/home');
                            }
                            else alert('Sorry, 您注册的用户名已存在')
                        })
                        .catch( error=> {
                            console.log(error);
                        })
                    }
                }
                else {
                    this.$router.push('/login')
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

