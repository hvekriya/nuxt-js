<template>
  <header class="site-header">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <div v-for="(nav, id) in $store.state.menu.nav" :key="id">
              <b-nav-item-dropdown
                v-if="nav.items.length != 0"
                :text="$prismic.asText(nav.primary.label)"
                right
              >
                <div v-for="(item, id) in nav.items" :key="id">
                  <prismic-link
                    class="dropdown-item"
                    :field="item.sub_nav_link"
                  >{{ $prismic.asText(item.sub_nav_link_label) }}</prismic-link>
                </div>
              </b-nav-item-dropdown>
              <li class="nav-item" v-else>
                <prismic-link
                  :field="nav.primary.link"
                  class="nav-link"
                >{{ $prismic.asText(nav.primary.label) }}</prismic-link>
              </li>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-prismic",
};
</script>