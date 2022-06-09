<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand"  >JIYOUNG</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active"   ><router-link to="/">Home</router-link>
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  ><router-link to="/portfolio">Portfolio</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  ><router-link to="/join">Join</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  ><router-link to="/login">Login</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  ><router-link to="/list">List</router-link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-view/>
</template>
<script>
export default {
}
</script>
<style>
@import "../public/css/a.css";
</style>