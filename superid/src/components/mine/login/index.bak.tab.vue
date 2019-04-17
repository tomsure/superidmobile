<!--  -->
<template>
    <div class="tab-box" :style="backgroundDiv">
        <div class="loginImg">
            <img src="../../../assets/logo1.png" alt>
        </div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="mobile">手机登录</mt-tab-item>
            <mt-tab-item id="email">邮箱登录</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="mobile">
                <mobile></mobile>
            </mt-tab-container-item>
            <mt-tab-container-item id="email">
                <Email></Email>
            </mt-tab-container-item>
        </mt-tab-container>
        <div class="footer-box">
            <div @click="forgetPassword">忘记密码？</div>
            <div @click="toRegister">注册</div>
        </div>
    </div>
</template>
<script>
import Email from '@/components/mine/login/Email.vue'
import mobile from '@/components/mine/login/mobile.vue'
export default {
    components: { Email, mobile },
    data() {
        return {
            popupVisible: false,
            country: '',
            mobilePrefix: '86',
            username: "",
            password: "",
            selected: 'mobile',
            slots: [{
                    flex: 1,
                    values: [],
                    className: "slot1",
                    textAlign: "center",
                    defaultIndex: 1
                },

            ],
            paramData: null,
            backgroundDiv: {
            backgroundImage: 'url(' + require('@/assets/bg.png') + ')'
             }
                 };
    },



    computed: {},

    methods: {
        selectPrefix() {
            this.popupVisible = true

            this.getcountry()
        },
        getcountry() {
            requestGet("/api/v1/mobile_prefix").then(res => {
                if (res.data.status == "success") {
                    let arr = [];
                    res.data.data.forEach(el => {
                        arr.push({ cn_name: el.cn_name + '(' + el.mobile_prefix + ')', id: el.id, mobile_prefix: el.mobile_prefix });
                    });
                    this.slots[0].values = arr;


                }
            });
        },
        onDataChange(picker, values) {
            if (values[0]) {
                this.country = values[0].cn_name;
                this.mobilePrefix = values[0].mobile_prefix
            }
        },
        close() {
            this.popupVisible = false
        },

        toLogin() {
            let url = null
            let data = null
            var str = this.username;
            var reg = RegExp(/@/);
            if (reg.test(str)) {

                url = '/api/v1/user/email_login'
                data = {
                    email: this.username,
                    password: this.password
                }
            } else {
                data = {
                    mobile_prefix: this.mobilePrefix,
                    mobile: this.username,
                    password: this.password,
                    //  mobile_prefix:''

                }
                url = '/api/v1/user/mobile_login'
            }
            requestPost(url, data).then(res => {

                if (res.data.status == "fail") {

                    Toast({
                        message: res.data.msg,
                        position: "top",
                        duration: 2000
                    });
                } else if (res.data.status === "success") {
                    Toast({
                        message: "登录成功",
                        position: "top",
                        duration: 2000
                    });
                    localStorage.setItem("user_info", JSON.stringify(res.data.data));

                    setToken(res.data.data.token);

                    this.$router.push({ path: "/", query: { status: "login" } });
                }
            })
        },
        forgetPassword() {
            // alert('change')
            this.$router.push({ path: "/forgetPassword" });
        },
        toRegister() {
            this.$router.push({ path: "/register" });
        },

    }
};
</script>

<style lang="less" scoped>
.submit-btn {
    width: 95%;
    margin: 0 auto;
}

.btn-box {
    text-align: center;
    margin-top: 1rem;
}

.loginImg {
    // width: 2.665245202558635rem;
    // height: 2.665245202558635rem;
    width: 2.745202558635394rem;
    height:3.73134328358209rem;
    border-radius: 100px; // border: 1px solid red;
    overflow: hidden;
    // margin: 1rem auto;
    margin: 0 auto;

    img {
        width: 100%;
        height: 100%;
    }
}

.footer-box {
    // position: fixed;
    width: 100%;
    bottom: 0;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    div {
        flex: 1;
    }
}
</style>
