<template>
  <header>
    <h1>{{ title }}</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  color: #262525;
}

h1 {
  margin: 0;
  font-size: 2rem;
}

nav ul {
  list-style: none;
  display: flex;
}

nav li {
  margin-right: 1rem;
}

nav a {
  color: #262525;
  text-decoration: none;
  font-weight: bold;
}
</style>
