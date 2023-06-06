import axios from "axios";

const skills = {
  namespaced: true,
  state: {
    skillsInfo: [],
  },
  actions: {
    getSkillsInformation(context) {
      axios.get("/API/data.json").then((response) => {
        const skillsInfo = response.data.skills;
        context.commit("setSkillsInformation", skillsInfo);
      });
    },
  },
  mutations: {
    setSkillsInformation(state, skillsInfo) {
      state.skillsInfo = skillsInfo;
    },
  },
  getters: {
    skillsList(state) {
      return state.skillsInfo;
    },
  },
};

export default skills;
