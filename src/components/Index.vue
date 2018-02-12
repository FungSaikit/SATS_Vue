<template>
  <div class="index">
    <div class="index_inner">
      <div class="block">
        <el-carousel height="400px" :autoplay="true">
          <el-carousel-item v-for="(item,index) in swiper" :key="index">
            <img :src="item" class="swiper_img" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple post_details" style="margin-left: 0;">
            <div class="post_details_title">
                <span>最新房屋信息</span>
                <el-button type="text" class="fr">更多</el-button>
            </div>
            <el-table :data="newApartment" style="width: 100%" stripe="true">
              <el-table-column prop="time" label="发布日期" width="100"></el-table-column>
              <el-table-column prop="title" label="房屋信息"></el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light post_details" style="margin-right: 0;">
            <div class="post_details_title">
                <span>最热房屋信息</span>
                <el-button type="text" class="fr">更多</el-button>
            </div>
            <el-table :data="hotApartment" style="width: 100%" stripe="true">
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
      newApartment: [
          {
              time: '2017-12-22',
              title: '[出售]尚东柏悦府 430㎡4室2厅3卫1厨'
          }, 
          {
              time: '2018-1-1',
              title: '[出租]珠江颐德公馆 珠江颐德公馆 珠江颐德公馆 珠江颐德公馆 珠江颐德公馆'
          },
          {
              time: '2017-12-22',
              title: '[出售]尚东柏悦府 430㎡4室2厅3卫1厨'
          }, 
          {
              time: '2018-1-1',
              title: '[出租]珠江颐德公馆'
          },
          {
              time: '2017-12-22',
              title: '[出售]尚东柏悦府 430㎡4室2厅3卫1厨'
          }, 
          {
              time: '2018-1-1',
              title: '[出租]珠江颐德公馆'
          },
          {
              time: '2017-12-22',
              title: '[出售]尚东柏悦府 430㎡4室2厅3卫1厨'
          }, 
          {
              time: '2018-1-1',
              title: '[出租]珠江颐德公馆'
          },
          {
              time: '2017-12-22',
              title: '[出售]尚东柏悦府 430㎡4室2厅3卫1厨'
          }, 
          {
              time: '2018-1-1',
              title: '[出租]珠江颐德公馆'
          }
      ],
      hotApartment: [
          {
              time: '2017-12-22',
              title: '[出租]珠江颐德公馆'
          },
          {
              time: '2017-12-22',
              title: '[出售]尚东柏悦府 430㎡4室2厅3卫1厨'
          }, 
          {
              time: '2018-1-1',
              title: '[出租]珠江颐德公馆'
          },
          {
              time: '2017-12-22',
              title: '[出售]尚东柏悦府 430㎡4室2厅3卫1厨'
          }, 
          {
              time: '2018-1-1',
              title: '[出租]珠江颐德公馆'
          },
          {
              time: '2017-12-22',
              title: '[出售]尚东柏悦府 430㎡4室2厅3卫1厨'
          }, 
          {
              time: '2018-1-1',
              title: '[出租]珠江颐德公馆'
          },
          {
              time: '2017-12-22',
              title: '[出售]尚东柏悦府 430㎡4室2厅3卫1厨'
          }, 
          {
              time: '2018-1-1',
              title: '[出租]珠江颐德公馆'
          },
          {
              time: '2017-12-22',
              title: '[出售]尚东柏悦府 430㎡4室2厅3卫1厨'
          }
      ]
    };
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

</style>
