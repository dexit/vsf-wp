import { Wordpress } from '../types/Wordpress';
import { GetterTree } from 'vuex';

export const getters: GetterTree<Wordpress, any> = {
    posts (state) {
        return state.posts
    },
    categories (state) {
        return state.categories
    },
    currentPost (state) {
        return state.currentPost
    },
    currentCategory (state) {
        return state.currentCategory
    }
}