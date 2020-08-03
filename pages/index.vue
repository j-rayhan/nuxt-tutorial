<template>
  <div class="container">
    <div class="home-page">
      <section class="intro">
        <h1>Get the latest tech news!</h1>
      </section>
      <section class="featured-posts">
        <nuxt-link :to="'/posts/' + 1" class="post-preview">
          <artical>
            <div class="post-thumbnail"></div>
            <div class="post-content">
              <h1>Post Title</h1>
              <p>Preview Text</p>
            </div>
          </artical>
        </nuxt-link>
        <nuxt-link :to="'/posts/' + 2" class="post-preview">
          <artical>
            <div class="post-thumbnail"></div>
            <div class="post-content">
              <h1>Post Title 2</h1>
              <p>Preview Text 2</p>
            </div>
          </artical>
        </nuxt-link>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}
/* .featured-posts a {
  width: 90%;
} */
@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
