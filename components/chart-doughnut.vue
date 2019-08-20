<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">Vendas por Região</h2>
    </div>

    <div class="card-img-bottom">
      <chartjs-doughnut
        :bind="true"
        :datasets="datasets"
        :labels="labels"
        :option="option"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datasets: [
        {
          data: [2,12,13,24,5,106,19,2],
          backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB",
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
          ],
          hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"]
        }
      ],
      labels: ['Alexânia 2', 'Asa Norte', 'Asa Sul', 'Brazlândia', 'Candagolândia', 'Ceilândia', 'Cidade Ocidental', 'Cocalzinho de Goiás'],
      option: {}
    };
  }
};
</script>