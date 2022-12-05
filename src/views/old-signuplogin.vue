<template>
    <div class="container about">
      <p>{{ msg }}</p>
  
      <div v-if="loggedinUser">
        <h3>
          Loggedin User:
          {{ loggedinUser.fullname }}
          <button @click="doLogout">Logout</button>
        </h3>
      </div>
      <div v-else>
        <h2>Login</h2>
        <form @submit.prevent="doLogin">
          <select v-model="loginCred.username">
            <option value="">Select User</option>
            <option v-for="user in users" :key="user._id" :value="user.username">{{ user.fullname }}</option>
          </select>
          <!-- <input type="text" v-model="loginCred.username" placeholder="User name" />
          <input
            type="text"
            v-model="loginCred.password"
            placeholder="Password"
          /> -->
          <button>Login</button>
        </form>
        <p class="mute">user1 or admin, pass:123 </p>
        <form @submit.prevent="doSignup">
          <h2>Signup</h2>
          <input type="text" v-model="signupCred.fullname" placeholder="Your full name" />
          <input type="text" v-model="signupCred.password" placeholder="Password" />
          <input type="text" v-model="signupCred.username" placeholder="Username" />
          <img-uploader @uploaded="onUploaded"></img-uploader>
          <button>Signup</button>
        </form>
      </div>
      <hr />
      <details>
        <summary>
          Admin Section
        </summary>
        <ul>
          <li v-for="user in users" :key="user._id">
            <pre>{{ user }}</pre>
            <button @click="removeUser(user._id)">x</button>
          </li>
        </ul>
      </details>
    </div>
  </template>