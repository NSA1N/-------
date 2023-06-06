import axios from "axios";

const slider = {
  namespaced: true,
  state: {
    sliderItem: [],
  },
  actions: {
    getSliderInformation(context) {
      axios.get("/API/data.json").then((response) => {
        const sliderItem = response.data.social;
        context.commit("setSliderInformation", sliderItem);
      });
    },
  },
  mutations: {
    setSliderInformation(state, sliderItem) {
      state.sliderItem = sliderItem;
    },
  },
  getters: {
    sliderList(state) {
      return state.sliderItem;
    },
  },
};

export default slider;
