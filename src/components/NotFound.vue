<template>
  <h1 style="margin-top: 20px">{{title}}</h1>
  <div class="noti">
    <b>{{notiNum}}.</b> <span class="info">That’s an error.</span><br>
    The requested URL <span class="warn">{{wrongAddress}}</span> 
    was not found on this server.<br>
    <span class="info">That’s all we know.</span>
  </div>
  <div class="empty"></div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'NotFound',
  setup(){
    const title = ref('NotFound')
    const wrongAddress = getUrl(decodeURI(window.location.href))
    const notiNum = '404'

    function getUrl(str){
      // http://localhost:8080/hello
      const tmp = str.substring(str.indexOf(':')+3)
      return tmp.substring(tmp.indexOf("/"))
    }

    return {title, wrongAddress, notiNum}
  }
}
</script>

<style>

.noti{
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

</style>