<!--  -->
<template>
    <div>
        <div>
            <mt-cell title="国际区号" :value='mobilePrefix' @click.native='selectPrefix' is-link></mt-cell>
            <mt-field label="账号" placeholder="请输入手机号" v-model="username"></mt-field>
        </div>
        <mt-field label="密码" placeholder="请输入登录密码" type="password" v-model="password"></mt-field>
        <div class="btn-box">
            <mt-button type="primary" class="submit-btn" @click.native="toLogin">立即登录</mt-button>
        </div>
    
        <mt-popup v-model="popupVisible" position="bottom">
            <mt-picker value-key="cn_name" @change='onDataChange' :slots="slots"></mt-picker>
            <div class="submit-box-common">
                <mt-button type="primary" size="large" @click="close">确定</mt-button>
            </div>
        </mt-popup>
    </div>
</template>

<script>
import { requestPost, requestGet } from "@/api/api.js";
import { tips } from '@/api/common.js'
import { setToken, getToken, removeToken } from "@/utils/auth.js";
import { Toast } from "mint-ui";
export default {
    name: 'mobile',
    data() {
        return {
            popupVisible: false,
            country: '',
            mobilePrefix: '86',
            username: "",
            password: "",
            slots: [{
                    flex: 1,
                    values: [],
                    className: "slot1",
                    textAlign: "center",
                    defaultIndex: 1
                },

            ],
            paramData: null
        };
    },
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
            let data = {
                mobile_prefix: this.mobilePrefix,
                mobile: this.username,
                password: this.password,
            }
            requestPost('/api/v1/user/mobile_login', data).then(res => {
                if (res.data.status == "fail") {
                    tips(res.data.msg)
                } else if (res.data.status === "success") {
                    tips("登录成功")
                    localStorage.setItem("user_info", JSON.stringify(res.data.data));
                    setToken(res.data.data.token);
                    this.$router.push({ path: "/", query: { status: "login" } });
                }
            })
        }


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
    width: 2.665245202558635rem;
    height: 2.665245202558635rem;
    border-radius: 100px; // border: 1px solid red;
    overflow: hidden;
    margin: 1rem auto;
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