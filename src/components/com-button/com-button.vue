<template>
  <div class="com-button-wrapper">
    <lui-button type="primary" round>{{ txt }}</lui-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class ComButton extends Vue {
  @Prop() private txt!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
