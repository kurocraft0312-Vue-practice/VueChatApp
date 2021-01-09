import Vue from 'vue'
import * as VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD0nIFFWFd-6ZdTfMPUBskL31Nm8t7BXh0",
    authDomain: "vuechatapp-34532.firebaseapp.com",
    projectId: "vuechatapp-34532",
    storageBucket: "vuechatapp-34532.appspot.com",
    messagingSenderId: "345911534233",
    appId: "1:345911534233:web:e6c75a4435ed00a4e9ce08",
    measurementId: "G-LV0WH1P1G9"
});

export const db = firebaseApp.firestore();