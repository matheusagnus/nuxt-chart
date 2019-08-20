<template>
  <no-ssr>
    <div>
      <h1>Chart Demo</h1>

      <div class="grid">
        <ChartBar />
        <ChartDoughnut />
        <ChartLine />
        <PolarArea />
      </div>
    </div>
  </no-ssr>
</template>

<script>
import ChartBar from "@/components/chart-bar";
import ChartDoughnut from "@/components/chart-doughnut";
import ChartLine from "@/components/chart-line";
import PolarArea from "@/components/polar-area"

export default {
  components: {
    ChartBar,
    ChartDoughnut,
    ChartLine,
    PolarArea
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  row-gap: 2rem;
}
</style>