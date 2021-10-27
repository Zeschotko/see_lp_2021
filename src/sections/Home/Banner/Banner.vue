<template lang="pug">
    section#banner
        .img
            img(:src="require('@images/banner.jpg')")
        .icon
            img(:src="require('@images/icons/mouse.png')")

</template>

<script>
export default {
    name: "section-banner",
}
</script>

<style lang="stylus" scoped src="./Banner.styl"></style>