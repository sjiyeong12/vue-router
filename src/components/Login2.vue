<template>
  <h1>{{title}}</h1>
    <form action="Vue20_memberList.vue" ref="frm">
    <fieldset>
      <legend id = "loginLe"><p>로그인</p></legend>
      <div>
        <label for="id" class="title" >ID</label>
        <input type="text" ref="id" id="id">
      </div>
      <div>
        <label for="pass" class="title">Password</label>
        <input type="password" ref="pass" id="pass">
      </div>
      <div id="divBtn">
        <label class="title"></label>
        <button ref="btnLogin" @click.prevent="join" class="btn-margin">로그인</button>
        <button ref="btnCancel" @click.prevent="cancel" >취소</button>
      </div>
    </fieldset>
  </form>
</template>

<script>
import{ref} from '@vue/reactivity';
export default {
  name : 'ToLogin',
  setup(){
    const title = ref('Login')
    
    return {title}
  },
   methods: {
    join(){
      const frm = this.$refs.frm
      const id = this.$refs.id
      const pass = this.$refs.pass
      if(id.value == ''){ alert('아이디를 입력하세요'); id.focus(); return;}
      if(pass.value == ''){ alert('비밀번호를 입력하세요'); pass.focus(); return;}
      frm.submit();
    },
    cancel(){
      this.$refs.frm.reset()
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
  #loginLe {
    border-radius: 30%;
    width: 200px;
    height: 40px;
    
    }



</style>
