<template>
  <div class='house_list'>
    <div class="search_block">
      <div class="search_types">
        <div class="search_type" :class="{ search_type_selected:isForSell == 1 }" @click="changeType(1)">买房</div>
        <div class="search_type" :class="{ search_type_selected:isForSell == 0 }" @click="changeType(0)">租房</div>
      </div>
      <div class="searcher">
        <div class="search_pic">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADHklEQVRYR71X7XUTMRCcrSChgiQVkFSA9xogVECoAKgAUwFJBTgV4DTgNRUQKiDpACpY3txb6ck63fnyAfpjPz9pd7Q7mlkLHrHM7Njdj0TkXlXvHhEiH5E5h83sHMBrAAsAx40zBLF2923XdTdzYqY9kwAi8ZeRpGN5bgF8VNXtHCBNAGZ2COBb3DjHcfefIrKuAh+6+0JEXla/rwLI7ykgAwBmdgrgKwB+wt3/iMglgNVUv8kLAEsAb4uErMabqXM7AOLmvwCwAkz+XUQuHkK0IOi6qAj5caaqzUpkAJHc0s0BXKvqRbqNmfH7gape7ettxGLVUjW2qqqtcyUAlu9TbLpRVTIfJR/Iga7r+tbMWZvNZisir2IviUlQO6sHUJbe3e9F5JQlCz6wKmxJM8AUEMZ19zsROQDAFpzUrUgAiOx9BHunqqvUEnc/EZGFqpJQD17ROpKaa3CJHsBmsyHKo7LEZpZaQhbXT+9BQFJ8ALeqelYelijzj/jxs6oyMUGxZLdd11H9nrTMrKww25DlmwBK8vG59KUOFSR7J4VkDrKIRWHj2qnoDgBVneUNc5KWe8aqzD0EQMns3+tzAoi468QfM/O6zQlA7s8zA2DCzKkpAJkDzwUgfIGS3gPY14IPAGi50YV5NjrFAzNLMXtSVySkKmerJgfoYkTLdaWqPPykxXfPAF3X9cNLyTMAL8qXtSNEAO5U9eQp2YtnXSpq77AtL0lSXGpBf/AxIArZzU5a6UxbiivTmPTvFrBoI3l0HlMTvYNmxhZQZXn7bHJljDE7Hmh2JSx0R2oHP2nbyaIzhxrzRdNT6omIpsPpl4vf2Y6BFJfPKm7GvZdJ4xvJ83xRV3AwknG0LsYp+gJBzLZiM6N50X7L8Z3n+fwGl2kNpexXCYKgSUqWdxRIJOZENeaeTRCj5lNZaKpcb9EAypmfCcmBfpAtFmfHZaOiO5XY98dk4e7LYq7b+zpjkl4mtYsXVrc1g5hlv0E6gjmvwfB/A6sSf1jofoP/ilMgZgHYe+0ZG1ogOJ79NwDhCTXB/80EtMcpSdYk9Rd/AXaI2vor3CCHAAAAAElFTkSuQmCC">
        </div>
        <input type="text" v-model="keyword" :placeholder="placeholder">
        <button @click="search" style="cursor: pointer;">搜索</button>
      </div>
    </div>

    <div class="filter_block">
      <div class="filter">
        <el-radio-group v-model="price" @change="getList">
          <el-radio label="0">全部价格</el-radio>
          <el-radio label="0-100">100万以下</el-radio>
          <el-radio label="100-200">100-200万</el-radio>
          <el-radio label="200-400">200-400万</el-radio>
          <el-radio label="400-600">400-600万</el-radio>
          <el-radio label="600-1000">600-1000万</el-radio>
          <el-radio label="1000-∞">1000万以上</el-radio>
        </el-radio-group>
      </div>
      <div class="filter">
        <el-radio-group v-model="area" @change="getList">
          <el-radio label="0">全部面积</el-radio>
          <el-radio label="0-40">40平以下</el-radio>
          <el-radio label="40-60">40-60平</el-radio>
          <el-radio label="60-80">60-80平</el-radio>
          <el-radio label="80-100">80-100平</el-radio>
          <el-radio label="100-120">100-120平</el-radio>
          <el-radio label="120-150">120-150平</el-radio>
          <el-radio label="150-200">150-200平</el-radio>
          <el-radio label="200-∞">200平以上</el-radio>
        </el-radio-group>
      </div>
      <div class="filter">
        <el-radio-group v-model="houseType" @change="getList">
          <el-radio label="0">全部房型</el-radio>
          <el-radio label="1">一室</el-radio>
          <el-radio label="2">二室</el-radio>
          <el-radio label="3">三室</el-radio>
          <el-radio label="4">四室</el-radio>
          <el-radio label="5">五室或以上</el-radio>
        </el-radio-group>
      </div>
      <div class="filter">
        <el-radio-group v-model="usage" @change="getList">
          <el-radio label="0">全部用途</el-radio>
          <el-radio label="1">普通住宅</el-radio>
          <el-radio label="2">别墅</el-radio>
          <el-radio label="3">商用</el-radio>
          <el-radio label="4">商住两用</el-radio>
          <el-radio label="5">四合院</el-radio>
        </el-radio-group>
      </div>
    </div>
    <h3 class="result_tips">共找到<span class="blue">{{ resultCount }}</span>套房子</h3>
    <div class="houselist_block" v-loading="loading">

      <div class="house flex" v-for="item in houseList" :key="item.id" :hid="item.id" @click="houseDetails">
        <div class="house_img">
          <img :src="JSON.parse(item.image)[0]">
        </div>
        <div class="house_info fg">
          <div class="house_title">{{ item.title }}</div>
          <div class="house_spec">{{ item.properties }} | {{ item.room }}室{{ item.livingroom }}厅 | {{ item.area }}㎡ | {{ item.direction }} | {{ item.decoration }}</div>
          <div class="house_spec">{{ item.floor/item.total_floor < 1/3 ? '低' : item.floor/item.total_floor < 2/3 ? '中' : '高' }}楼层(共{{ item.floor }}层){{ item.build_year }}年建塔楼 - {{ item.district }}</div>
          <div class="house_spec">{{ item.post_time }}发布</div>
          <div class="house_spec">
            <span class="house_advantage">{{ item.house_label }}</span>
          </div>
        </div>
        <div class="house_price">
          <div class="price">¥ <span class="rmb">{{ item.price/10000 }}</span> 万</div>
          <div class="unitprice">单价 <span style="font-weight: bold;">{{ parseInt(item.unit_price) }}</span> 元/平米</div>
        </div>
      </div>

    </div>
    <div class="page_block">
      <el-pagination layout="prev, pager, next" :total="total" @current-change="changePage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "HouseList",
  data() {
    return {
      placeholder: "请输入您感兴趣的地区或者楼盘",
      isForSell: this.$route.params.type,
      price: 0,
      keyword: '', 
      price: '0',
      area: '0',
      houseType: '0',
      usage: '0',
      currentPage: 1,
      houseList: [],
      total: 0,
      resultCount: 0,
      loading: false
    };
  },
  methods: {
    search: function () {
      this.currentPage = 1;
      this.getList();
    },
    changePage: function (val) {
      this.currentPage = val;
      this.getList(); 
    },
    getList: function () {
      var that = this;
      this.loading = true;
      var queryString = 'http://localhost:3333/house/getHouseList?page=' + this.currentPage + '&keyword=' + this.keyword + '&isForSell=' + this.isForSell;
      if ( this.price != 0 ) {
        var priceArray = this.price.split('-');
        var minPrice = priceArray[0];
        var maxPrice = priceArray[1];
        queryString += '&minPrice=' + minPrice * 10000 + (maxPrice == '∞' ? '' : ('&maxPrice=' + maxPrice * 10000));
      }
      if ( this.area != 0 ) {
        var areaArray = this.area.split('-');
        var minArea = areaArray[0];
        var maxArea = areaArray[1];
        queryString += '&minArea=' + minArea + (maxArea == '∞' ? '' : ('&maxArea=' + maxArea));
      }
      if ( this.houseType != 0 ) {
        queryString += '&room=' + this.houseType;
      }
      if( this.usage != 0) {
        queryString += '&usage=' + this.usage;
      }
      this.$ajax
      .get(queryString)
      .then(function(res) {
        that.resultCount = res.data.count;
        that.houseList = res.data.list;
        that.total = res.data.count;
        that.loading = false;
      });
    }, 
    changeType: function(num) {
      this.isForSell = num;
      this.getList(); 
      this.$router.push('/house_list/' + num);
    },
    houseDetails: function() {
      this.$router.push(
        "/house_details/" + event.currentTarget.getAttribute("hid")
      );
    }
  }, 
  created: function () {
    this.getList();
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
  border: 2px solid #4ba2f9;
  margin: auto;
  display: flex;
  display: -webkit-flex;
  overflow: hidden;
  background-color: #4ba2f9;
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
  background-color: #4ba2f9;
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
  color: #4ba2f9;
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
  background-color: #4ba2f9;
}

.houselist_block {
  width: 1000px;
  text-align: left;
  min-height: 200px;
}

.house {
  border-bottom: 1px solid lightgray;
  padding: 20px 0;
  height: 200px;
  width: 1000px;
  cursor: pointer;
}

.house_img {
  height: 200px;
  width: 250px;
}

.house_img img {
  width: 100%;
  height: 100%;
}

.house_info {
  padding-left: 20px;
}

.house_title {
  font-size: 20px;
  font-weight: bold;
}

.house_spec {
  margin-top: 10px;
  color: dimgray;
}

.house_advantage {
  color: #849aae;
  background-color: #f4f7f9;
  padding: 5px 10px;
  font-size: 12px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: inline-block;
}

.house_price {
  width: 150px;
  text-align: right;
}

.price {
  color: #db4c3f;
  margin-top: 50px;
}

.rmb {
  font-size: 30px;
  font-weight: bold;
}

.unitprice {
  color: dimgray;
  font-size: 13px;
}

.page_block {
  margin: 20px 0;
}

.el-radio+.el-radio {
  margin-left: 15px;
}

.el-radio__label {
  padding-left: 5px;
}

</style>


