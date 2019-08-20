<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">Vendas por Cidades</h2>
    </div>

    <chartjs-polar-area 
      :labels="mylabels" 
      :datasets="mydatasets"
    ></chartjs-polar-area>
  </div>
</template>

<script>
export default {
        data() {
            return {
            mylabels: ['Alexânia 2', 'Asa Norte', 'Asa Sul', 'Brazlândia', 'Candagolândia', 'Ceilândia', 'Cidade Ocidental', 'Cocalzinho de Goiás'],
            mydatasets:[{
                data: [2,12,13,24,5,700,19,2],
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
                label: 'My dataset' // for legend
        
                }]
        }
        },
}
</script>

<style>

</style>