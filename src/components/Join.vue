<template>
  <h1>{{title}}</h1>






  <div id="joindiv" class="wrapper fadeInDown zero-raduis">
    <form action="Vue20_memberList.vue" ref="frm" id="joinfrm">
    <fieldset>
      <legend>JOIN</legend>
      <div>
        <label for="id" class="title" >ID</label>
        <input type="text" ref="id" id="id" name="id">
      </div>
      <div>
        <label for="name" class="title">Name</label>
        <input type="text" ref="name" id="name" name="name">
      </div>
      <div>
        <label for="pass" class="title">Password</label>
        <input type="password" ref="pass" id="pass" name="pass">
      </div>
      <div>
        <label for="repass" class="title">Re Password</label>
        <input type="password" ref="repass" id="repass">
      </div>

      <div id="divHobby">
        <label class="title mt-4">Hobby</label>
        <label :for="item" v-for="(item, i) in state.hobbyList" :key="i">
          {{item}}<input type="checkbox" name="hobby" :id="item" :value="item" v-model="state.hobby" class="form-check-input">
        </label>

      </div>
      <div id="divGender">
        <label class="title mt-4">Gender</label>
        <label :for="item" v-for="(item, i) in state.genderList" :key="i">
          {{item}}<input type="radio" name="gender" :id="item" :ref="item" :value="item" v-model="state.gender" class="form-check-input">
        </label>

      </div>
      <div id="divMobile">
        <label for="id" class="title mt-4">Mobile</label>
        <select v-model="state.mobile" ref="m1" class="form-select" id="exampleSelect1" >
          <option :value="item" v-for="(item, i) in state.mobileList" :key="i">{{item}}</option>
        </select>-<input type="text" ref="m2" class="m">-<input type="text" class="m" ref="m3">
        <input type="hidden" name="mobile" ref="mobile">
      </div>
      <div id="divBtn">
        <label class="title"></label>
        <button ref="btnJoin" @click.prevent="join" class="btn btn-outline-primary" >가입</button>
        <button ref="btnCancel" @click.prevent="cancel" class="btn btn-outline-secondary" >취소</button>
      </div>
    </fieldset>
  </form>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
export default {
  name: 'ToJoin',
  setup(){
    const title = ref('Join')
    const state = reactive({
      hobby:[],
      hobbyList:['축구','배구','농구'],
      gender:'여성',
      genderList:['남성','여성'],
      mobile:'010',
      mobileList:['010','011','016'],
    })
    const frm = ref(null)
    const id = ref(null)
    const name = ref(null)
    const pass = ref(null)
    const repass = ref(null)
    const m1 = ref(null)
    const m2 = ref(null)
    const m3 = ref(null)
    const mobile = ref(null)

    function join(){
      if(id.value.value == ''){ alert('아이디를 입력하세요'); id.value.focus(); return;}
      if(name.value.value == ''){ alert('이름을 입력하세요'); name.value.focus();return;}
      if(pass.value.value == ''){ alert('비밀번호를 입력하세요'); pass.value.focus(); return;}
      if(repass.value.value != pass.value.value){ alert('비밀번호 다름');repass.value.focus(); return;}
      if(m2.value.value.length != 4){ alert('4자리로 입력하세요');m2.value.focus(); return;}
      if(m3.value.value.length != 4){ alert('4자리로 입력하세요');m3.value.focus(); return;}
      mobile.value.value = m1.value.value+m2.value.value+m3.value.value
      frm.value.submit();
    }
    function cancel(){
      frm.value.reset()
      document.querySelector("#여성").checked = true //단순히 document의 값을 초기화
    }

    return {title,state,join,cancel,frm,id,name,pass,repass,m1,m2,m3,mobile}
  }
}

// import{ref} from '@vue/reactivity';
// export default {
//   name : 'ToJoin',
//   setup(){
//     const title = ref('Join')
//     return {title}
//   },
//     data: ()=>({
//     hobby:[],
//     hobbyList:['축구','배구','농구'],
//     gender:'여',
//     genderList:['남','여'],
//     mobile:'010',
//     mobileList:['010','011','016'],
//   }),
//     methods: {
//     join(){
//       const frm = this.$refs.frm
//       const id = this.$refs.id
//       const name = this.$refs.name
//       const pass = this.$refs.pass
//       const repass = this.$refs.repass
//       const m1 = this.$refs.m1
//       const m2 = this.$refs.m2
//       const m3 = this.$refs.m3
//       const mobile = this.$refs.mobile
//       if(id.value == ''){ alert('아이디를 입력하세요'); id.focus(); return;}
//       if(name.value == ''){ alert('이름을 입력하세요'); name.focus();return;}
//       if(pass.value == ''){ alert('비밀번호를 입력하세요'); pass.focus(); return;}
//       if(repass.value != pass.value){ alert('비밀번호 다름');repass.focus(); return;}
//       if(m2.value.length != 4){ alert('4자리로 입력하세요');m2.focus(); return;}
//       if(m3.value.length != 4){ alert('4자리로 입력하세요');m3.focus(); return;}
//       mobile.value = m1.value+m2.value+m3.value
//       frm.submit();
//     },
//     cancel(){
//       this.$refs.frm.reset()
//       document.querySelector("#여").checked = true //단순히 document의 값을 초기화
//     }
//   }
// }
</script>

<style>
 #joindiv{
  border-radius: 8px;
  background: white;
  width: 500px;
  margin: auto;
   margin-top: 90px;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  min-height: 100%;
  padding: 20px;
   -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.3);
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.3);
 }
  .title {display:inline-block;width:120px;margin: 5px;text-align: left;}
</style>