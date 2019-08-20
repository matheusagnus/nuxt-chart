<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">Vendas por Etapa</h2>
    </div>

    <div class="card-img-bottom">
      <canvas id="fooCanvas" count="3" />

      <chartjs-bar
        v-for="(item, index) in types"
        :key="index"
        :backgroundcolor="item.bgColor"
        :beginzero="beginZero"
        :bind="true"
        :bordercolor="item.borderColor"
        :data="item.data"
        :datalabel="item.dataLabel"
        :labels="labels"
        :option="myoptions"
        :tooltip="mytooltip"
        target="fooCanvas"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beginZero: true,
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
      types: [
        {
          bgColor: "#5eff69",
          borderColor: "#00c40d",
          data: [220, 379, 208, 379, 220, 522, 800],
          dataLabel: "Aprovadas"
        },
        {
          bgColor: "#6e6868",
          borderColor: "#000000",
          data: [30, 21, 134, 30, 21, 12, 40],
          dataLabel: "Canceladas"
        },
        {
          bgColor: '#ff5c5c',
          borderColor: '#8f0000',
          data: [41, 26, 132, 26, 8, 36,695],
          dataLabel: 'Recusadas'
        }
      ],
      myoptions: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value, index, values) {
                return 'R$ ' + value;
              }
            }
          }]
        }
      },
    };
  }
};
</script>