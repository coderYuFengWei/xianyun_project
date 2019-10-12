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
  login({
    commit
  }, data) {
    return this.$axios({
      url: "/accounts/login",
      method: "POST",
      data: data
    }).then(res => {
      const data = res.data;
      commit("setUserInfo", data);
      return data;
    })

  }
};
