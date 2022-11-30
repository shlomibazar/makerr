<template>
    <article class="custom-card flex column items-center">
      <header>
        <slot name="card-header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </article>
  </template>
  