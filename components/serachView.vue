<template>
    <div class="search-conatiner">
      <div class="dropdown-boxes">
        <div class="country-list">
          <select class="select-style" name="country" v-model="SearchCountry">
            <option value="">Select Country</option>
            <option
              v-for="(list, key) in countryData"
              :value="key"
              :key="key"
              :selected="key == SearchCountry ? true : false"
            >
              {{ list }}
            </option>
          </select>
        </div>
        <div class="category-list">
          <select class="select-style" name="category" v-model="SearchCategory">
            <option value="">Select Category</option>
            <option :value="key" v-for="(list, key) in categoryData" :key="key">
              {{ list }}
            </option>
          </select>
        </div>
        <div class="keywords-input">
          <input
            class="select-style setbox-input"
            type="text"
            placeholder="keywords (optional)"
            v-model="SearchQuery"
          />
        </div>
      </div>
      <div class="search-btn">
        <button
          class="cta-btn"
          @click="handelSearch"
        >
          Search
        </button>
      </div>
  </div>
</template>
<script>
import { countries } from '../static/countries'
import { categories } from '../static/categories'
export default {
  data () {
    return {
      countryData: countries,
      categoryData: categories,
      SearchQuery: "",
      SearchCountry: "",
      SearchCategory: "",
    }
  },
  computed: {
    
  },
  methods: {
    handelSearch () {
      const payload = {
        searchQuery: this.SearchQuery,
        searchCountry: this.SearchCountry,
        searchCategory: this.SearchCategory
      }
      this.$store.dispatch('updatePageSize', 21)
      this.$emit('getSearchParams', payload)
    },
  }
}
</script>

<style>
.search-conatiner {
  width: 100%;
  /* height: 80px; */
  padding: 20px;
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.dropdown-boxes {
  display: flex;
  align-content: center;
  gap: 20px;
}
select, input {
  width: 200px;
  height: 35px;
  padding: 5px 10px;
  border: none;
  outline: none;
  border-radius: 8px;
}
.cta-btn {
  width: 100px;
  height: 35px;
  border: none;
  outline: none;
  border-radius: 8px;
}

@media (max-width: 768px) { 
  .search-conatiner {
    display: flex;
    flex-direction: column;
  }
  .dropdown-boxes {
    display: flex;
    flex-direction: column;
  }
}
</style>