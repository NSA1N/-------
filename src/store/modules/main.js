import axios from "axios";

const main = {
  namespaced: true,
  state: {
    promo: [],
  },
  actions: {
    getPromo(context) {
      axios.get("/API/data.json").then((response) => {
        const promo = response.data.promo;
        context.commit("setPromo", promo);
      });
    },
  },
  mutations: {
    setPromo(state, promo) {
      state.promo = promo;
    },
  },
  getters: {
    promoList(state) {
      return state.promo;
    },
  },
};

export default main;
