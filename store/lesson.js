export const state = () => ({
    curLesson: ''
})

export const mutations = {
    setCurLesson(state, value) {
        state.curLesson = value;
    }
}

export const actions = {
    async getCurLesson({ commit }, value) {
        commit('setCurLesson', value);
    }
}

export const getters = {

}