<template>
  <div class="chat-message">
    <div class="chat-side--bar">
      <user-pop :user="message.user" :main="message.user.name"></user-pop>
    </div>
    <div class="chat-inner--sec">
      {{message.message}}
    </div>
  </div>
</template>
<script>
export default {
  props:['message'],
  data: function(){
    return {
    }
  }
}
</script>

<style>
.chat-message{
  width: 100%;
  border:none;
  box-shadow: 0px 1px 4px #202020;
  padding: 4px;
  min-height: 50px;
  margin-top:12px;
}

.chat-side--bar{
  width:20%;
}

.chat-inner--sec{
  width: 80%;
}
</style>

