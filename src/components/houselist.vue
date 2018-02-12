<template>
    <div class='house_list'>
        <div class="search_block">
            <div class="search_types">
                <div class="search_type" :class="{ search_type_selected:type==0 }" @click="changeType(0)">买房</div>
                <div class="search_type" :class="{ search_type_selected:type==1 }" @click="changeType(1)">租房</div>
            </div>
            <div class="searcher">
                <div class="search_pic">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADHklEQVRYR71X7XUTMRCcrSChgiQVkFSA9xogVECoAKgAUwFJBTgV4DTgNRUQKiDpACpY3txb6ck63fnyAfpjPz9pd7Q7mlkLHrHM7Njdj0TkXlXvHhEiH5E5h83sHMBrAAsAx40zBLF2923XdTdzYqY9kwAi8ZeRpGN5bgF8VNXtHCBNAGZ2COBb3DjHcfefIrKuAh+6+0JEXla/rwLI7ykgAwBmdgrgKwB+wt3/iMglgNVUv8kLAEsAb4uErMabqXM7AOLmvwCwAkz+XUQuHkK0IOi6qAj5caaqzUpkAJHc0s0BXKvqRbqNmfH7gape7ettxGLVUjW2qqqtcyUAlu9TbLpRVTIfJR/Iga7r+tbMWZvNZisir2IviUlQO6sHUJbe3e9F5JQlCz6wKmxJM8AUEMZ19zsROQDAFpzUrUgAiOx9BHunqqvUEnc/EZGFqpJQD17ROpKaa3CJHsBmsyHKo7LEZpZaQhbXT+9BQFJ8ALeqelYelijzj/jxs6oyMUGxZLdd11H9nrTMrKww25DlmwBK8vG59KUOFSR7J4VkDrKIRWHj2qnoDgBVneUNc5KWe8aqzD0EQMns3+tzAoi468QfM/O6zQlA7s8zA2DCzKkpAJkDzwUgfIGS3gPY14IPAGi50YV5NjrFAzNLMXtSVySkKmerJgfoYkTLdaWqPPykxXfPAF3X9cNLyTMAL8qXtSNEAO5U9eQp2YtnXSpq77AtL0lSXGpBf/AxIArZzU5a6UxbiivTmPTvFrBoI3l0HlMTvYNmxhZQZXn7bHJljDE7Hmh2JSx0R2oHP2nbyaIzhxrzRdNT6omIpsPpl4vf2Y6BFJfPKm7GvZdJ4xvJ83xRV3AwknG0LsYp+gJBzLZiM6N50X7L8Z3n+fwGl2kNpexXCYKgSUqWdxRIJOZENeaeTRCj5lNZaKpcb9EAypmfCcmBfpAtFmfHZaOiO5XY98dk4e7LYq7b+zpjkl4mtYsXVrc1g5hlv0E6gjmvwfB/A6sSf1jofoP/ilMgZgHYe+0ZG1ogOJ79NwDhCTXB/80EtMcpSdYk9Rd/AXaI2vor3CCHAAAAAElFTkSuQmCC">
                </div>
                <input type="text" v-model="keyword" :placeholder="placeholder">
                <button>搜索</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "HomeList",
  data() {
    return {
        placeholder: '请输入您感兴趣的地区或者楼盘',
        type: this.$route.params.type,
        keyword: ""
    };
  }, 
  methods: {
      changeType: function (num) {
          this.type = num;
      }
  }
};
</script>


<style scoped>

.search_block {
    margin-top: 10px;
}

.searcher {
    width: 600px;
    height: 36px;
    border-radius: 20px;
    border: 2px solid #4BA2F9;
    margin: auto;
    display: flex;
    display: -webkit-flex;
    overflow: hidden;
    background-color: #4BA2F9;
}

.search_pic {
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background-color: #fff;
}

.search_pic img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
}

.searcher input {
    flex-grow: 1;
    -webkit-flex-grow: 1;
    border: none;
    background-color: #fff;
    outline: none;
}

.searcher button {
    border: none;
    width: 80px;
    background-color: #4BA2F9;
    color: #fff;
    font-size: 18px;
}

.house_list {
  width: 1000px;
  margin: auto;
}

.search_types {
    width: 540px;
    height: 26px;
    line-height: 26px;
    color: #4BA2F9;
    margin: auto;
    text-align: left;
    font-size: 12px;

}

.search_type {
    display: inline-block;
    text-align: center;
    width: 40px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;
}

.search_type_selected {
    color: #fff;
    background-color: #4BA2F9;
}

</style>


