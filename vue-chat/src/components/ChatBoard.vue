<template>
    <div>
        <v-list>
            <!-- <template 
                v-for="comment in comments"   
            > -->
            <!-- <v-list-item
                :key="comment.id"
                avatar
            > -->
                <v-list-item-content>
                    <v-list-item-avater>
                        <v-img 
                            src="@/assets/img/icon.png"
                            alt="チャット主"
                            class="avatar_icon"
                            aspect-ratio="1.5"
                            max-height="60"
                            contain
                        >
                        </v-img>
                    </v-list-item-avater>
                    <v-list-item-title>最初のコメント</v-list-item-title>
                    <v-list-item-content>2021-01-10 13:00:00</v-list-item-content>
                </v-list-item-content>
            <!-- </v-list-item> -->
            <!-- </template> -->
        </v-list>
    </div>
</template>
<style scoped>
.avatar_icon {
    width: 100%;
}
</style>
<script>
// import {db} from '../plugins/firebase';
export default {
    name: "ChatBoard",
    data() {
        return {
            // comments: {
            //     avatar: '@/assets/img/icon.png'
            // }
        }
        // firestore() {
        //     return {
                
        //     }
        // }
    }
}
</script>