<template>
  <div class="chat-main">
    <Message v-for="message in messages" :key="message.username" :message="message"/>
  </div>
</template>
<script>
import Message from './Message'
export default {
  data(){
    return {
      messages:[
        {
          user: {name: 'Neo Ighodaro',username: 'neoighodaro',email: 'neo@gmail.com',profile: {profile_image:'https://avatars3.githubusercontent.com/u/807318?s=400&v=4'},
          },
          message: 'How have you been'
        },
        {
          user: {name: 'Osita Chibuike',username: 'mozartted',email: 'mozart@gmail.com', profile: {profile_image:'https://avatars2.githubusercontent.com/u/11639772?s=460&v=4'},
          },
          message: "I'm alright, This is an article right??"
        },
        {
          user: {name: 'Neo Ighodaro',username: 'neoighodaro',email: 'neo@gmail.com',profile: {profile_image:'https://avatars3.githubusercontent.com/u/807318?s=400&v=4'},
          },
          message: 'Yea, I think so'
        },
      ]
    }
  },
  components:{
    Message
  }
}
</script>

<style>
.chat-main{
  width:500px;
  height: auto;
  box-shadow: 0px 1px 4px #202020;
  border: none;
  padding: 12px;
  margin:0 auto;
}

</style>
