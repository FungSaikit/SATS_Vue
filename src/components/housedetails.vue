<template>
  <div class="house_details" v-loading="initing">
    <div class="general">
      <div class="title">{{ house.title }}</div>
      <div class="desc">{{ house.description }}</div>
      <div class="border_bottom">
        <el-button type="success" @click="bookThisHouse">预约此房</el-button>
      </div>
    </div>
    <div class="flex">
      <div class="swiper">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in swiperPic" :key="item">
            <img :src="item">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="details">
        <div class="flex borderbottom detailsblock">
          <div class="fg price">
            <span class="rmb">{{ house.price/10000 }}</span>万
          </div>
          <div class="average_price">
            <div class="q0">{{ parseInt(house.unit_price) }}元/平米</div>
            <div class="q1">首付90万 税费6万(仅供参考)
              <a href="#">详情</a>
            </div>
          </div>
        </div>
        <div class="flex borderbottom detailsblock">
          <div class="fg">
            <div class="b1top">{{ house.room_num }}室{{ house.livingroom_num }}厅</div>
            <div class="b1bottom">{{ house.floor/house.total_floor
              < 1/3 ? '低' : house.floor/house.total_floor < 2/3 ? '中' : '高' }}楼层/共{{ house.total_floor }}层</div>
            </div>
            <div class="fg">
              <div class="b1top">{{ house.direction }}</div>
              <div class="b1bottom">{{ house.decoration }}</div>
            </div>
            <div class="fg">
              <div class="b1top">{{ house.area }}平米</div>
              <div class="b1bottom">{{ house.build_year }}/塔楼</div>
            </div>
          </div>
          <div class="borderbottom detailsblock">
            <table>
              <tr>
                <th>小区名称</th>
                <td>{{ house.properties }}</td>
              </tr>
              <tr>
                <th>所在区域</th>
                <td>{{ house.district }}</td>
              </tr>
              <tr>
                <th>看房时间</th>
                <td>{{ house.view_time }}</td>
              </tr>
              <tr>
                <th>房源编号</th>
                <td>{{ house.id }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="info_title">
          基本信息
        </div>
        <div class="info_block">
          <table>
            <tr>
              <th>基本属性</th>
              <th>房屋户型</th>
              <td>{{ house.room_num }}室{{ house.livingroom_num }}厅{{ house.kitchen_num }}厨{{ house.bathroom_num }}卫</td>
              <th>所在楼层</th>
              <td>{{ house.floor/house.total_floor
                < 1/3 ? '低' : house.floor/house.total_floor < 2/3 ? '中' : '高' }}楼层/共{{ house.total_floor }}层</td>
            </tr>
            <tr>
              <th></th>
              <th>建筑面积</th>
              <td>{{ house.area }}</td>
              <th>套内面积</th>
              <td>{{ house.inside_area == 0 ? '暂无数据' : house.inside_area }}</td>
            </tr>
            <tr>
              <th></th>
              <th>房屋朝向</th>
              <td>{{ house.direction }}</td>
              <th>建筑类型</th>
              <td>{{ house.construction_type }}</td>
            </tr>
            <tr>
              <th></th>
              <th>装修情况</th>
              <td>{{ house.decoration }}</td>
              <th>梯户比例</th>
              <td>{{ house.lift }}梯{{ house.house_per_floor }}户</td>
            </tr>
            <br>
            <tr>
              <th>交易属性</th>
              <th>挂牌时间</th>
              <td>{{ house.post_time}}</td>
              <th>交易权属</th>
              <td>{{ house.trading_right }}</td>
            </tr>
            <tr>
              <th></th>
              <th>上次交易</th>
              <td>{{ house.last_trade }}</td>
              <th>房屋用途</th>
              <td>{{ house.house_usage==1?'普通住宅':house.house_usage==2?'别墅':house.house_usage==3?'商用':house.house_usage==4?'商住两用':'四合院' }}</td>
            </tr>
            <tr>
              <th></th>
              <th>产权年限</th>
              <td>{{ house.age_limit }}</td>
              <th>房屋年限</th>
              <td>{{ house.house_age }}</td>
            </tr>
            <tr>
              <th></th>
              <th>抵押信息</th>
              <td>{{ house.mortgage }}</td>
              <th>产权所属</th>
              <td>{{ house.house_right }}</td>
            </tr>
          </table>
        </div>

        <div class="info_title">
          房源特色
        </div>
        <div class="info_block">
          <table>
            <tr>
              <th>房源标签</th>
              <td>{{ house.house_label }}</td>
            </tr>
            <tr>
              <th>装修描述</th>
              <td>{{ house.decoration_desc }}</td>
            </tr>
            <tr>
              <th>核心卖点</th>
              <td>{{ house.main_sellpoint }}</td>
            </tr>
            <tr>
              <th>周边配套</th>
              <td>{{ house.facility }}</td>
            </tr>
            <tr>
              <th>交通出行</th>
              <td>{{ house.traffic }}</td>
            </tr>
          </table>
        </div>
        <div class="info_title">
          经纪人反馈
        </div>
        <div class="info_block">
          <div class="feedback" v-for="item in feedback" :key="item.id">
            <div class="agentname">{{ item.agent_name }}</div>
            <div class="comment">{{ item.content }}</div>
            <div class="comment_time">{{ item.post_time }}</div>
          </div>
        </div>
        <div class="info_title">
          周边地图
        </div>
        <div class="info_block" id="container">
          <baidu-map class="map" :zoom="zoom" :center="house.district+house.properties">
          </baidu-map>
          <div class="map_button" style="bottom: 30px; right: 10px;" @click="addZoom">＋</div>
          <div class="map_button" style="bottom: 30px; right: 50px;" @click="minusZoom">－</div>
        </div>
        <div class="info_title">
          精品推荐
        </div>
        <div class="info_block">
          <div class="more_house" v-for="item in recommend" @click="viewHouse(item.id)" :key="item.id" :hid="item.id">
            <div class="mh_img">
              <img :src="JSON.parse(item.image)[0]">
            </div>
            <div class="mh_title">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "HouseDetails",
  data() {
    return {
      swiperPic: [],
      house: {},
      feedback: [],
      recommend: [],
      zoom: 3,
      initing: true
    };
  },
  created: function() {
    this.initInfo();
  },
  methods: {
    initInfo() {
      var that = this;
      this.$ajax
        .get(
          "http://localhost:3333/house/getHouse?hid=" + this.$route.params.id
        )
        .then(function(res) {
          res.data.post_time = res.data.post_time.slice(0, 10);
          res.data.last_trade = res.data.last_trade.slice(0, 10);
          that.house = res.data;
          that.swiperPic = JSON.parse(res.data.image);
          that.initing = false;
          that.zoom = 15;
        });
      this.$ajax
        .get(
          "http://localhost:3333/house/getHouseFeedback?hid=" +
            this.$route.params.id
        )
        .then(function(res) {
          that.feedback = res.data;
        });
      this.$ajax
        .get("http://localhost:3333/house/getTopFourHouse")
        .then(res => {
          that.recommend = res.data;
        });
    },
    bookThisHouse() {
      this.$router.push("/book_house/" + this.$route.params.id);
    },
    viewHouse(id) {
      this.$router.push("/house_details/" + id);
      this.initInfo();
    },
    addZoom() {
      this.zoom++;
    },
    minusZoom() {
      this.zoom--;
    }
  }
};
</script>

<style scoped>
.block {
  text-align: left;
}

.house_details {
  width: 1000px;
  margin: auto;
}

.general {
  text-align: left;
  background-color: #fbfbfb;
  padding: 20px;
}

.title {
  font-size: 26px;
  font-weight: bold;
}

.desc {
  color: gray;
}

.border_bottom {
  padding-top: 10px;
  height: 40px;
  text-align: right;
}

.swiper {
  width: 600px;
}

.details {
  margin-left: 20px;
  width: 380px;
  text-align: center;
}

.detailsblock {
  width: 100%;
  color: dimgray;
  padding: 13px 0;
}

.price {
  color: #e23b41;
  height: 60px;
}

.rmb {
  font-size: 46px;
  font-weight: bold;
}

.q0 {
  height: 30px;
  line-height: 30px;
}

.q1 {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}

.b1top {
  font-size: 26px;
  font-weight: bold;
}

.b1bottom {
  font-size: 12px;
}

.detailsblock table {
  width: 100%;
}

.info_block {
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid lightgray;
}

.info_title {
  width: 100%;
  padding-top: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;
  font-size: 26px;
  line-height: 30px;
}

.info_block table {
  width: 100%;
  line-height: 30px;
}

.info_block th {
  font-weight: normal;
  white-space: nowrap;
  min-width: 80px;
}

.info_block td {
  font-weight: bold;
}

.agentname {
  font-size: 20px;
  font-weight: bold;
}

.comment {
  color: dimgray;
}

.comment_time {
  color: gray;
}

.more_house {
  width: 235px;
  cursor: pointer;
  display: inline-block;
  margin-left: 15px;
}

.more_house:nth-child(1) {
  margin-left: 7.5px;
}

.mh_img {
  width: 235px;
  height: 176px;
  margin-right: 20px;
}

.mh_img img {
  width: 100%;
  height: 100%;
}

.mh_title {
  width: 100%;
  overflow: hidden;
  height: 46px;
}

.feedback {
  margin-bottom: 10px;
}

.el-carousel__container img {
  width: 600px;
  height: 300px;
}

#container {
  position: relative;
}

.map {
  width: 100%;
  height: 500px;
}

.map_button {
  height: 30px;
  line-height: 30px;
  width: 30px;
  font-size: 20px;
  text-align: center;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 16px;
  position: absolute;
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
  font-weight: bold;
}
</style>