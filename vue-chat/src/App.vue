<template>
  <div>
    <Header />
    <ChatBoard />
  </div>
</template>
<script>
import Header from './components/Header'
import ChatBoard from './components/ChatBoard'
export default {
  name: 'App',

  components: {
    Header,
    ChatBoard
  },

  data: () => ({
    //
  }),
};
</script>
