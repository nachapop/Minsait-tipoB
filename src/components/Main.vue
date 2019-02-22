<template>
  <section class="section">
    <h3 class="section__title">
      {{ title }}
    </h3>
    <div class="section__Accordion">
      <div
        v-for="(item, index) in data"
        :key="index">
        <ms-accordion-item
          :item="item"
          @openModal="onModal"/>
      </div>
    </div>
    <ms-modal
      :index="currentIndex"
      :item="current"
      :visible="modalVisible"
      @showModal="modalVisible=false"
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
      currentIndex: -1,
      modalVisible: false
    }
  },

  mounted() {
    axios.get("https://api.punkapi.com/v2/beers/").then(response => {
      this.data = response.data
    })
  },

  methods: {
    onModal(item) {
      this.modalVisible = true
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
@import "../styles/global.scss";

.section {
  padding: 45px 49px;
  width: 568px;
  height: 608px;
  overflow-y: scroll;
  box-shadow: 4px 4px 4px 0 rgba(223, 223, 223, 0.5);
  &__title {
    font-size: 64px;
    font-weight: 300;
    margin: 0;
    line-height: 1.06;
    color: $--dark-blue-grey;
  }
  &__Accordion {
    margin-top: 45px;
  }
}
</style>
