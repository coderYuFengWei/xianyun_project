//用户管理
export const state = () => ({
  //采用接口返回的数据结构
  userInfo: {
    token: "",
    user: {},
  }
});


//同步数据
export const mutations = {
  setUserInfo(state, data) {
    state.userInfo = data;
  },

  cleanUserInfo(state, info) {
    if (process.browser) {
      localStorage.removeItem("userInfo");
    }
    state.userInfo = {};
  }
};

//异步数据
export const actions = {
  login(store, data) {
    return this.$axios({
      url: "/accounts/login",
      method: "POST",
      data
    }).then(res => {
      const data = res.data;
      store.commit("setUserInfo", data);
      return data;
    })

  },

  //发送验证码
  async sendCapcha(store, tel) {
    const res = await this.$axios({
      url: "/captchas",
      method: "POST",
      data: {
        tel
      }
    });

    return res;
  }
};
