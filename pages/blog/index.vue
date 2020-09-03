<template>
  <section>
    <b-container class="bv-example-row">
      <h1>Blog</h1>
      <b-row>
        <b-col v-for="(post, i) in blog" :key="i">
          <a :href="'blog/'+ post.uid">
            <b-card
              :title="$prismic.asText(post.data.title)"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>{{ $prismic.asText(post.data.content) | truncate }}</b-card-text>
            </b-card>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "blog",
  head() {
    return {
      title: this.$nuxt.$options.head.title + " | " + "Blog",
    };
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content

      const document = await $prismic.api.query(
        $prismic.predicates.at("document.type", "blog"),
        { orderings: "[my.post.date desc]" }
      );
      return {
        // Set slices as variable
        blog: document.results,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
