<template>
  <section class="post-list">
    <PostPreview
      v-for="v in posts"
      :id="v.id"
      :key="v.id"
      :title="v.title"
      :preview-text="v.previewText"
      :thumbnail="v.thumbnail"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Post title 1',
          previewText: 'Preview text 1',
          thumbnail:
            'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          title: 'Post title 2',
          previewText: 'Preview text 18',
          thumbnail:
            'https://c4.wallpaperflare.com/wallpaper/286/1013/130/simple-background-blue-gradient-wallpaper-preview.jpg',
        },
        {
          id: 3,
          title: 'Post title 3',
          previewText: 'Preview text 15',
          thumbnail:
            'https://c4.wallpaperflare.com/wallpaper/286/1013/130/simple-background-blue-gradient-wallpaper-preview.jpg',
        },
        {
          id: 4,
          title: 'Post title 4',
          previewText: 'Preview text 12',
          thumbnail:
            'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
      ],
    }
  },
}
</script>

<style>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
