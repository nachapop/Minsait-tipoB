<template>
  <section>
    <h1 class="h1__title">
      {{ title }}
    </h1>
    <div
      v-for="(item, index) in data"
      :key="index">
      <ms-accordion-item
        :item="item"
        @openModal="onModal"/>
    </div>
    <ms-modal
      ref="modal"
      :index="currentIndex"
      :item="current"
      @currentIndex="onChangeIndex"/>
  </section>
</template>

<script>
import axios from "axios"
import AccordionItem from "./resources/AccordionItem.vue"
import Modal from "./resources/Modal.vue"

export default {
  components: {
    "ms-accordion-item": AccordionItem,
    "ms-modal": Modal
  },

  data() {
    return {
      title: "Beer list",
      data: [],
      current: {},
      currentIndex: -1
    }
  },

  mounted() {
    axios.get("https://api.punkapi.com/v2/beers/").then(response => {
      this.data = response.data
    })
  },

  methods: {
    onModal(item) {
      this.$refs.modal.$refs.myModal.style.display = "block"
      this.current = item
      this.currentIndex = this.data.findIndex(
        d => d.name === this.current.name
      )
    },

    onChangeIndex(index) {
      if (index < 0) {
        this.currentIndex = this.data.length - 1
      } else if (index >= this.data.length) {
        this.currentIndex = 0
      } else {
        this.currentIndex = index
      }
      this.current = this.data[this.currentIndex]
    }
  }
}
</script>

<style lang="scss" scoped>
.h1__title {
  font-size: 64px;
  font-weight: 300;
  line-height: 1.06;
  letter-spacing: normal;
  color: #2f4f4f;
}
</style>
