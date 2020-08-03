<template>
  <div class="post-page">
    <section class="post">
      <h1 class="post-title">This is post title</h1>
      <div class="post-details">
        <div class="post-detail">Post updated on:</div>
        <div class="post-detail">Written by:</div>
      </div>
      <p class="post-content">Content of the post</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post
        <a href="mailto:johir.rayhan01@gmail.com">Send your feedback</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
.post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}
.post {
  width: 100%;
}
@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
  .post-details {
    flex-direction: row;
  }
}
.post-title {
  margin: 0;
}
.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-self: center;
  align-items: center;
  flex-direction: column;
}
.post-details {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}
.post-content {
  padding: 5px;
}
.post-feedback a {
  color: red;
  text-decoration: none;
}
</style>
