<template>
    <div>
        <v-list>
            <template 
                v-for="comment in comments"   
            >
            <v-list-item
                :key="comment.id"
                avatar
            >
                <v-list-item-content>
                    <v-list-item-title>最初のコメント</v-list-item-title>
                    <v-list-item-content>2021-01-10 13:00:00</v-list-item-content>
                    <v-list-item-avater>ここに顔写真</v-list-item-avater>
                </v-list-item-content>
            </v-list-item>
            </template>
        </v-list>
    </div>
</template>
<script>
import {db} from '../plugins/firebase';
export default {
    name: "ChatBoard",
    data() {
        return {
            comments: []
        },
        firestore() {
            return {
                
            }
        }
    }
}
</script>