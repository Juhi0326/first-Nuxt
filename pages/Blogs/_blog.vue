/* eslint-disable no-console */ /* eslint-disable no-console */
<template>
  <div>
    {{ slug.blog }}
  </div>
</template>

<script>
export default {
  // middleware: 'test',
  validate ({ params }) {
    return /^\d+$/.test(params.blog)
  },
  data () {
    return {
      slug: this.$route.params
    }
  },
  created () {
    // eslint-disable-next-line no-console
    console.log(this.$route.params)
  }
}
</script>

<style lang="scss" scoped></style>
