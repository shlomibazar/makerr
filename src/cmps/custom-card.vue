<template>
    <article class="custom-card flex column items-center">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </article>
  </template>
  
  <style scoped>
  .custom-card {
    justify-content: space-between;
    background: white;
   
    width: 20.25rem;
    border: 1px solid black;
    border-radius: 5px;
  }
  
  .custom-card header {
     height:12.125rem;
     width: 100%;
    font-size: 2rem;
    border: 3px solid black;
  }
  
  .custom-card main {
    height: 8.75rem;
    text-align: center;
    background-color: blue;
  }
  
  .custom-card footer {
    height: 3.75rem;
    font-size: 1rem;
    color: gray;
  }
  </style>
  