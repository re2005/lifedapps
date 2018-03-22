<template>
    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary" md-elevation="1">
                <md-button class="md-icon-button">
                    <router-link :to="{ name: 'home' }">
                        <md-icon>keyboard_backspace</md-icon>
                    </router-link>
                </md-button>
                <span class="md-title">Life Dapps</span>
            </md-app-toolbar>

            <md-app-content>
                <div>
                    <div class="viewport">
                        <md-toolbar :md-elevation="1">
                            <span class="md-title">{{dappSlug.name}}</span>
                        </md-toolbar>

                        <md-list class="md-double-line">
                            <div v-if="dappSlug.sites.websiteUrl">
                                <md-subheader>Sites</md-subheader>

                                <md-list-item>
                                    <md-icon class="md-primary">web</md-icon>

                                    <div class="md-list-item-text">
                                        <a :href="dappSlug.sites.websiteUrl"
                                           target="_blank">{{dappSlug.sites.websiteUrl}}</a>
                                    </div>

                                    <div class="md-list-item-text">
                                        <a :href="dappSlug.sites.dappUrl"
                                           target="_blank">{{dappSlug.sites.dappUrl}}</a>
                                    </div>

                                </md-list-item>
                            </div>

                            <md-subheader>Status</md-subheader>

                            <md-list-item>
                                <md-avatar v-bind:class="dappSlug.status">
                                </md-avatar>

                                <div class="md-list-item-text">
                                    <span>{{dappSlug.status}}</span>
                                </div>

                            </md-list-item>

                            <md-subheader>Created</md-subheader>

                            <md-list-item>
                                <md-icon class="md-primary">date_range</md-icon>
                                <div class="md-list-item-text">
                                    <span>{{dappSlug.created}}</span>
                                </div>
                            </md-list-item>

                            <md-subheader>Description</md-subheader>

                            <md-list-item>
                                <md-icon class="md-primary">description</md-icon>

                                <div class="md-list-item-text">
                                    <span>{{dappSlug.description}}</span>
                                </div>
                            </md-list-item>

                            <md-subheader>Authors</md-subheader>

                            <md-list-item v-for="author in dappSlug.authors"
                                          :key="author.name">
                                <md-icon class="md-primary">account_circle</md-icon>
                                <div class="md-list-item-text">
                                    <span>{{author}}</span>
                                </div>
                            </md-list-item>

                            <md-subheader>Contracts</md-subheader>

                            <md-list-item v-for="contract in dappSlug.contracts"
                                          :key="contract.network">
                                <md-icon class="md-primary">account_circle</md-icon>
                                <div class="md-list-item-text">
                                    <span>{{contract.network}}</span>
                                    <span>{{contract.address}}</span>
                                </div>
                            </md-list-item>

                            <md-subheader>Socials</md-subheader>

                            <md-list-item v-for="social in dappSlug.socials"
                                          :key="social.name">
                                <md-icon class="md-primary">public</md-icon>
                                <div class="md-list-item-text">
                                    <span>{{social.platform}}</span>
                                    <a :href="social.url"
                                       target="_blank">{{social.url}}</a>
                                </div>
                            </md-list-item>

                            <md-subheader>Tags</md-subheader>

                            <md-list-item>
                                <md-icon class="md-primary">code</md-icon>
                                <div class="md-list-item-text"
                                     v-for="tag in dappSlug.tags"
                                     :key="tag">
                                    <span>{{tag}}</span>
                                </div>
                            </md-list-item>

                            <md-subheader>Created</md-subheader>

                            <md-list-item>
                                <md-icon class="md-primary">date_range</md-icon>
                                <div class="md-list-item-text">
                                    <span>{{dappSlug.created}}</span>
                                </div>
                            </md-list-item>

                            <md-subheader>Description</md-subheader>

                            <md-list-item>
                                <md-icon class="md-primary">description</md-icon>

                                <div class="md-list-item-text">
                                    <span>{{dappSlug.description}}</span>
                                </div>
                            </md-list-item>

                        </md-list>
                    </div>
                </div>
            </md-app-content>
        </md-app>
    </div>
</template>
vue material
<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'Dapp',
        data() {
            return {
                menuVisible: false
            };
        },
        computed: {
            ...mapGetters([
                'dappSlug'
            ])
        },
        methods: {
            ...mapActions([
                'fetchDappSlug'
            ])
        },
        props: {
            dapp: {
                type: String
            }
        },
        created() {
            this.fetchDappSlug(this.dapp);
            window.scrollTo(0, 0);
        }
    };
</script>

<style lang="scss" scoped>

</style>
