import store from '../../store';
import * as firebase from 'firebase';

const constants = {};

const state = {
    dappsList: [],
    dappSlug: {}
};

const getters = {
    getDapps: state => state.dappsList,
    dappSlug: state => state.dappSlug
};

const mutations = {
    UPDATE_DAPPS_LIST(state, value) {
        state.dappsList = value;
    },
    UPDATE_DAPPS_SLUG(state, value) {
        state.dappSlug = value;
    }
};

const actions = {
    fetchDappList() {
        firebase.database().ref('/dapps-list/').once('value').then(function (snapshot) {
            store.commit('UPDATE_DAPPS_LIST', snapshot.val());
        });
    },
    fetchDappSlug(slug, value) {
        firebase.database().ref('/dapps-details/' + value).once('value').then(function (snapshot) {
            console.log(snapshot.val());
            store.commit('UPDATE_DAPPS_SLUG', snapshot.val());
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
    constants
};
