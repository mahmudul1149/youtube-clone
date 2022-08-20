import items from '../data/items'
import searchitem from '../data/searchitem';

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
    initSearch({ commit }) {
        commit("SET_Items", searchitem);
    },
};