import items from '../data/items'
export const state = () => ({
    items: [],

});

export const getters = {
    items(state) {
        return state.items;
    },

};
export const mutations = {


    SET_Items(state, items) {
        state.items = items;
    }
};

export const actions = {
    initItems({ commit }) {
        commit("SET_Items", items);
    },
};