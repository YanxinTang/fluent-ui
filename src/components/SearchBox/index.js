import SearchBox from './SearchBox.vue';

SearchBox.install = Vue => {
  Vue.component(SearchBox.name, SearchBox);
};

export default SearchBox;
