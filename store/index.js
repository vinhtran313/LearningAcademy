export const state = () => ({
    counter: 0
})

export const mutations = {
    increment(state) {
        state.counter++
    }
}
export const actions = {
    async nuxtServerInit({ commit }, { req }) {
        let auth = null
        if (req.headers.cookie) {
            try {
                const data = this.$auth.$storage.getCookie('user', true);
                auth = data
            } catch (err) {
                auth = null
            }
        }
        this.$auth.setUser(auth);
    },
}
