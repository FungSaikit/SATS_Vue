<template>
    <div class="index">
        <div class="index_inner">
            <div class="block">
                <el-carousel height="400px" :autoplay="true">
                    <el-carousel-item v-for="(item,index) in swiper" :key="index">
                        <img :src="item" class="swiper_img">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple post_details" style="margin-left: 0;">
                        <div class="post_details_title">
                            <span>最新房屋信息</span>
                            <el-button type="text" class="fr" @click="viewMore">更多</el-button>
                        </div>
                        <el-table :data="newApartment" style="width: 100%" stripe @cell-click="openNewApartment">
                            <el-table-column prop="time" label="发布日期" width="100"></el-table-column>
                            <el-table-column prop="title" label="房屋信息"></el-table-column>
                        </el-table>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light post_details" style="margin-right: 0;">
                        <div class="post_details_title">
                            <span>最热房屋信息</span>
                            <el-button type="text" class="fr" @click="viewMore">更多</el-button>
                        </div>
                        <el-table :data="hotApartment" style="width: 100%" stripe @cell-click="openHotApartment">
                            <el-table-column prop="time" label="日期" width="100"></el-table-column>
                            <el-table-column prop="title" label="房屋信息"></el-table-column>
                        </el-table>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      swiper: [
        "/static/img/home0.jpg",
        "/static/img/home1.jpg",
        "/static/img/home2.jpg"
      ],
      newApartment: [],
      hotApartment: []
    };
  },
  methods: {
    getList() {
      var that = this;
      this.$ajax.get("http://localhost:3333/house/index").then(res => {
        that.hotApartment = res.data[0];
        that.newApartment = res.data[1];
        for (var i = 0; i < that.hotApartment.length; i++) {
            that.hotApartment[i].time = that.hotApartment[i].post_time.slice(0, 10);
            that.hotApartment[i].title = (that.hotApartment[i].is_for_sell ? '[出售]' : '[出租]') + that.hotApartment[i].title;
        }
        for (var i = 0; i < that.newApartment.length; i++) {
            that.newApartment[i].time = that.newApartment[i].post_time.slice(0, 10);
            that.newApartment[i].title = (that.newApartment[i].is_for_sell ? '[出售]' : '[出租]') + that.newApartment[i].title;
        }
      });
    }, 
    openNewApartment(row, column, cell, event) {
        this.$router.push('/house_details/' + row.id);
    }, 
    openHotApartment(row, column, cell, event) {
        this.$router.push('/house_details/' + row.id);
    }, 
    viewMore() {
        this.$router.push('/house_list/1');
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style>

.index {
  width: 100%;
  height: 100%;
}

.index_inner {
  width: 1000px;
  margin: auto;
}

.swiper_img {
  width: 1000px;
  height: 400px;
}

.post_details {
  margin: 5px;
  padding: 5px;
  border: 1px solid lightgray;
  border-radius: 5px;
  text-align: left;
}

.post_details_title {
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
}

.el-table .cell {
  white-space: nowrap;
}

.fr {
  float: right;
}

.cell {
    cursor: pointer;
}

</style>
