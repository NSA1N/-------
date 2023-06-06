import axios from "axios";

const post = {
  namespaced: true,
  state: {
    content: [],
  },
  actions: {
    getData(context) {
      axios.get("/API/data.json").then((response) => {
        const content = response.data.posts;
        context.commit("setContent", content);
      });
    },
  },
  mutations: {
    setContent(state, content) {
      state.content = content;
    },
  },
  getters: {
    postContent(state) {
      return state.content;
    },
  },
};

export default post;
