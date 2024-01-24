
<template>
  <header>
    <nav>
      <ul class="nav-links">
        <li>
          <router-link to="/">Home</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    height: 5rem;
    background-color: #d4f2d2;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  li {
    margin: 0 2rem;
  }

  router-link {
    text-decoration: none;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    color: #161616;
    padding: 0.5rem 1.5rem;
    display: inline-block;

    &:hover {
      color: #768569;
      cursor: pointer;
    }
  }
</style>
<script setup>
</script>