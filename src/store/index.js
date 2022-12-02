import { createStore } from 'vuex'
import { portfolioModule } from '@/store/portfolioModule'
import { blogModule } from '@/store/blogModule'

export default createStore({
  modules: {
    portfolioModule, blogModule
  }
})
