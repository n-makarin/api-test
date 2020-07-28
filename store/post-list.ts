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
  setData ({ commit }, data: IPost[]) {
    commit('SET_DATA', data)
  }
}

export const getters: GetterTree<PostListModuleState, RootState> = {
  data: state => state.data
}
