export const state = () => ({
    
  })

export const mutations = {

}

export const actions = {
    getData({ commit }) {
        try {
            this.$axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/')
                .then((res) => {
                    console.log(res.data)
                })
        } catch(e) {
            console.log(e)
        }
    }
}