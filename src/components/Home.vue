<template>
    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary" md-elevation="0">
                <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">Life Dapps</span>
            </md-app-toolbar>

            <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
                <md-toolbar class="md-transparent" md-elevation="0">
                    <span>Filter</span>

                    <div class="md-toolbar-section-end">
                        <md-button class="md-icon-button md-dense" @click="toggleMenu">
                            <md-icon>keyboard_arrow_left</md-icon>
                        </md-button>
                    </div>
                </md-toolbar>

                <md-list>
                    <md-list-item @click="setFilter(status.value)"
                                  v-for="status in dappStatus"
                                  :key="status.name">
                        <md-avatar v-bind:class="status.name">
                        </md-avatar>
                        <span class="md-list-item-text">{{status.name}}</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>

            <md-app-content>
                <md-list class="md-triple-line">
                    <div v-for="i in filteredList"
                         v-bind:key="i.slug">
                        <md-list-item :to="i.slug">
                            <md-avatar v-bind:class="i.status">
                            </md-avatar>
                            <div class="md-list-item-text">
                                <span>{{i.name}}</span>
                                <p>{{i.teaser}}</p>
                            </div>
                        </md-list-item>
                        <md-divider class="md-inset"></md-divider>
                    </div>
                </md-list>

                <md-button class="md-raised md-primary"
                           @click="listSize = listSize + 50"
                           v-if="listSize <= filteredList.length">
                    Show more 50
                </md-button>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'Home',
        data() {
            return {
                menuVisible: false,
                filter: '',
                listSize: 50,
                dappStatus: [
                    {name: 'all', value: ''},
                    {name: 'live', value: 'live'},
                    {name: 'beta', value: 'beta'},
                    {name: 'prototype', value: 'prototype'},
                    {name: 'wip', value: 'wip'},
                    {name: 'concept', value: 'concept'},
                    {name: 'stealth', value: 'stealth'}
                ]
            };
        },
        computed: {
            ...mapGetters([
                'getDapps',
                'dappSlug'
            ]),
            filteredList() {
                if (!this.getDapps) return;
                let results = this.getDapps.filter(dapp => {
                    return dapp.status.toLowerCase().includes(this.filter.toLowerCase());
                });
                return results.splice(0, this.listSize);
            }
        },
        methods: {
            ...mapActions([
                'fetchDappList',
                'fetchDappSlug'
            ]),
            toggleMenu() {
                this.menuVisible = !this.menuVisible;
            },
            setFilter(filter) {
                this.filter = filter;
                this.menuVisible = false;
            }
        },
        created() {
            if (this.getDapps.length > 0) return;
            this.fetchDappList();
        }
    };
</script>

<style lang="scss" scoped>

    .md-persistent-mini {
        .md-avatar {
            transition: .2s all ease-in-out;
            transform: scale(.6);
            margin-left: -7px;

            .md-active & {
                transform: scale(.4);
            }
        }
    }

    .page-container {
        min-height: 300px;
        overflow: hidden;
        position: relative;
        border: 1px solid rgba(0, 0, 0, 0.12);
    }

    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }

    .md-content {
        padding: 16px;
    }

    .md-app {
        min-height: 800px;
        border: 1px solid rgba(#000, .12);
    }

    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>
