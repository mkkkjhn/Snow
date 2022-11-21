import { createStore } from 'vuex'
import { portfolioModule } from '@/store/portfolioModule'

export default createStore({
  modules: {
    portfolioModule
  }
})
