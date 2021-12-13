export const state = () => ({
    listClass: []
})

export const mutations = {
    setList(state, list) {
        state.listClass = list;
    }
}

export const actions = {
    async getList({ state, commit }) {
        let res = await this.$axios.$get('study/levels');
        commit('setList', res);
    }
}

export const getters = {

}