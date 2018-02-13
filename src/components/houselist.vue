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

        <div class="filter_block">
            <div class="filter">
                <span class="filter_type">楼盘</span>
                <input type="checkbox" id="housingproject0"><label for="housingproject0">城启荔港南湾</label> 
                <input type="checkbox" id="housingproject1"><label for="housingproject1">富力半岛花园</label> 
            </div>
            <div class="filter">
                <span class="filter_type">售价</span>
                <input type="checkbox" id="price0"><label for="price0">100万以下</label> 
                <input type="checkbox" id="price1"><label for="price1">100-200万</label> 
                <input type="checkbox" id="price2"><label for="price2">200-400万</label> 
                <input type="checkbox" id="price3"><label for="price3">400-600万</label> 
                <input type="checkbox" id="price4"><label for="price4">600-1000万</label> 
                <input type="checkbox" id="price5"><label for="price5">1000万以上</label>                          
            </div>
            <div class="filter">
                <span class="filter_type">面积</span>
                <input type="checkbox"><span>40平以下</span>
                <input type="checkbox"><span>40-60平</span>
                <input type="checkbox"><span>60-80平</span>
                <input type="checkbox"><span>80-100平</span>
                <input type="checkbox"><span>100-120平</span>
                <input type="checkbox"><span>120-150平</span>
                <input type="checkbox"><span>150-200平</span>                
                <input type="checkbox"><span>200平以上</span>                
            </div>
            <div class="filter">
                <span class="filter_type">房型</span>
                <input type="checkbox"><span>一室</span>
                <input type="checkbox"><span>二室</span>
                <input type="checkbox"><span>三室</span>
                <input type="checkbox"><span>四室</span>
                <input type="checkbox"><span>五室</span>
            </div>
            <div class="filter">
                <span class="filter_type">用途</span>
                <input type="checkbox"><span>普通住宅</span>
                <input type="checkbox"><span>别墅</span>
                <input type="checkbox"><span>商用</span>
                <input type="checkbox"><span>商住两用</span>
                <input type="checkbox"><span>四合院</span>
            </div>
        </div>
        <h3 class="result_tips">共找到<span class="blue">102</span>套房子</h3>
        <div class="houselist_block">

            <div class="house flex">

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
        keyword: '',
        housingProduct: []
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

h3 {
    border-bottom: 1px solid lightgray;
    text-align: left;
    margin-top: 10px;
}

.house_list {
    padding-top: 20px;
}

.search_block {
    width: 1000px;
}

.filter_block {
    margin: auto;
    width: 980px;
    padding: 10px 0;
    text-align: left;
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;
    background-color: #f6f6f6;
}

.filter {
    line-height: 30px;
    border-bottom: 1px solid lightgray;
    font-size: 13px;
}

.filter input {
    vertical-align: middle;
    margin: 0 5px 0 10px;
}

.filter_type {
    font-weight: bold;
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

.houselist_block {
    margin-top: 20px;
    width: 1000px;
    text-align: left;
}

.house {
    border-bottom: 1px solid lightgray;
    padding: 20px 0;
    height: 200px;
    width: 1000px;
}

</style>


