<template>
    <v-navigation-drawer
        v-model="navigation"
        temporary
        style="position: fixed; display:flex"
    >
        <v-list-item style="flex: 0; margin: 20px 0px;">
            <v-list-item-content>
                <v-list-item-title>
                    <div class="headerTitle" style="display: flex; justify-content: center;">
                        <span>Vue Sample</span>
                    </div>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense style="margin: 20px 0px;">
            <v-list-item
                v-for="(menu, i) in menuList"
                :key="i"
                class="sideitem"
            >
                <v-list-item-icon class="sideiconwrap">
                    <i right :class="menu.icon"></i>
                </v-list-item-icon>
                <v-list-item-content @click="goRoute(menu.route_name)">
                    <v-list-item-title class="sidetxt">{{menu.name}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-list-item style="align-self: flex-end; display:flex;width: 100%;">
            <v-list-item-content class="sidebase">
                <a v-for="(sns, i) in snsList" :key="i" :href="sns.link" style="flex: 0; color: black;">
                    <i right :class="sns.icon"></i>
                </a>
            </v-list-item-content>
        </v-list-item>
    </v-navigation-drawer>
</template>

<script>
import { bus } from "@/main";
import {menuList, snsList} from "@/constant"

export default {
    name:"sidebar",
    data(){
        return{
            menuList: menuList,
            snsList: snsList,
            navigation: null
        }
    },
    methods:{
        goRoute(name){
            // var noready = ["post", "project"]
            // if (noready.includes(name)){
            //     alert("아직 준비중인 페이지 입니다")
            //     return
            // }
            this.$router.push({ name: name });
        },
    },
    created() {
        bus.$on("sidebaron", () => {
            this.navigation = true;
        });
        bus.$on("sidebaroff", () => {
            this.navigation = null;
        });
    }
}
</script>

<style>
.off{
    width: 0px !important;
}
</style>