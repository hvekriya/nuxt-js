<template>
  <b-container>
    <section>
      <h1>{{ $prismic.asText(document.title) }}</h1>
      <prismic-rich-text :field="document.content" />
      <!-- Slices block component -->
      <slices-block :slices="slices" />
    </section>
  </b-container>
</template>

<script>
// Imports for Prismic Slice components
import SlicesBlock from "~/components/SlicesBlock.vue";

export default {
  name: "page",
  components: {
    SlicesBlock,
  },
  head() {
    return {
      title:
        this.$nuxt.$options.head.title +
        " | " +
        this.$prismic.asText(this.document.title),
    };
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const document = (await $prismic.api.getByUID("blog", params.uid)).data;

      return {
        // Set slices as variable
        document: document,
        slices: document.page_content,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
