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
        <!-- <li class="nav-item">
          <a class="nav-link"  ><router-link to="/login2">Login2</router-link></a>
        </li> -->
        <li class="nav-item">
          <a class="nav-link"  ><router-link to="/about">About</router-link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  <!-- <div id="nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/portfolio">Portfolio</router-link>
      </li>
      <li>
        <router-link to="/join">Join</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link to="/login2">Login2</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </div> -->
  <router-view/>
</template>

<style>
@import "../public/css/a.css";
</style>