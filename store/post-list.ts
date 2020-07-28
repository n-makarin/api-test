import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '~/store'
import { IPost } from '~/types/post'

export const state = () => ({
  data: [] as IPost[]
})

export type PostListModuleState = ReturnType<typeof state>

export const mutations: MutationTree<PostListModuleState> = {
  SET_DATA: (state, data: IPost[]) => (state.data = data)
}

export const actions: ActionTree<PostListModuleState, RootState> = {
  setData ({ commit }, data: IPost[]): void {
    console.log(data)
    commit('SET_DATA', data)
  },

  async fetchData ({ dispatch }): Promise<void> {
    await this.$axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/posts'
    })
      .catch((error) => {
        console.log(error)
      })
      .then((response) => {
        if (!response || response.status !== 200) {
          return
        }
        dispatch('setData', response.data)
      })
  }
}

export const getters: GetterTree<PostListModuleState, RootState> = {
  data: state => state.data
}
