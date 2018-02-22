<template>
  <div class="house_details">
    <div class="general">
      <div class="title">荔港南湾 大四房 户型方正 采光好</div>
      <div class="desc">户型方正 采光通风好</div>
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
            <span class="rmb">300</span>万
          </div>
          <div class="average_price">
            <div class="q0">39165元/平米</div>
            <div class="q1">首付90万 税费6万(仅供参考) <a href="#">详情</a></div>
          </div>
        </div>
        <div class="flex borderbottom detailsblock">
          <div class="fg">
            <div class="b1top">2室2厅</div>
            <div class="b1bottom">中楼层/共28层</div>
          </div>
          <div class="fg">
            <div class="b1top">西北</div>
            <div class="b1bottom">精装</div>
          </div>
          <div class="fg">
            <div class="b1top">76.6平米</div>
            <div class="b1bottom">2008年建/塔楼</div>
          </div>
        </div>
        <div class="borderbottom detailsblock">
          <table>
            <tr>
              <th>小区名称</th>
              <td>荔港南湾</td>
            </tr>
            <tr>
              <th>所在区域</th>
              <td>荔湾区 南岸路</td>
            </tr>
            <tr>
              <th>看房时间</th>
              <td>周末可看房</td>
            </tr>
            <tr>
              <th>房源编号</th>
              <td>GZ100000982</td>
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
            <td>2室2厅1厨1卫</td>
            <th>所在楼层</th>
            <td>中楼层(共28层)</td>
          </tr>
          <tr>
            <th></th>
            <th>建筑面积</th>
            <td>2室2厅1厨1卫</td>
            <th>户型结构</th>
            <td>中楼层(共28层)</td>
          </tr>
          <tr>
            <th></th>
            <th>套内面积</th>
            <td>2室2厅1厨1卫</td>
            <th>建筑类型</th>
            <td>中楼层(共28层)</td>
          </tr>
          <tr>
            <th></th>
            <th>房屋朝向</th>
            <td>2室2厅1厨1卫</td>
            <th>建筑结构</th>
            <td>中楼层(共28层)</td>
          </tr>
          <tr>
            <th></th>
            <th>装修情况</th>
            <td>2室2厅1厨1卫</td>
            <th>梯户比例</th>
            <td>中楼层(共28层)</td>
          </tr>
          <br>
          <tr>
            <th>交易属性</th>
            <th>挂牌时间</th>
            <td>2室2厅1厨1卫</td>
            <th>交易权属</th>
            <td>中楼层(共28层)</td>
          </tr>
          <tr>
            <th></th>
            <th>上次交易</th>
            <td>2室2厅1厨1卫</td>
            <th>房屋用途</th>
            <td>中楼层(共28层)</td>
          </tr>
          <tr>
            <th></th>
            <th>产权年限</th>
            <td>中楼层(共28层)</td>
            <th>房屋年限</th>
            <td>2室2厅1厨1卫</td>
          </tr>
          <tr>
            <th></th>
            <th>抵押信息</th>
            <td>2室2厅1厨1卫</td>
            <th>产权所属</th>
            <td>中楼层(共28层)</td>
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
            <td>地铁</td>
          </tr>
          <tr>
            <th>装修描述</th>
            <td>该房之前是业主自住，保养不错，客厅墙壁上贴有墙纸，房间是木质地板，客户不用大装修。</td>
          </tr>
          <tr>
            <th>核心卖点</th>
            <td>望江景  随时看房 保养好。</td>
          </tr>
          <tr>
            <th>周边配套</th>
            <td>该单位的配套设施好，有中国工商银行、广州银行、南澳新街市、新源溪市场、桥头肉菜市场，有西樵生态公园，青年公园等悠闲娱乐场所。衣食住行都方便，有肯德基等。</td>
          </tr>
          <tr>
            <th>交通出行</th>
            <td>荔港南湾交通：步行1000米能到地铁5号线西场站和中山八路站， 地铁-5号线西场站。公交车站-南岸路，线路有17、34、196、268、256、17、198、256、538、832、838。</td>
          </tr>
        </table>
      </div>
      <div class="info_title">
        经纪人反馈
      </div>
      <div class="info_block">
        <div class="agentname">黄欢</div>
        <div class="comment">荔港南湾四房带主套，格局方正，精装修，中高层，安静舒适，厅出大阳台。</div>
        <div class="comment_time">2018-1-14 15:38:47</div>
      </div>
      <div class="info_title">
        周边地图
      </div>
      <div class="info_block">

      </div>
      <div class="info_title">
        猜您喜欢
      </div>
      <div class="info_block">
        <div class="more_house">
          <div class="mh_img">
            <img src="/static/img/home0.jpg">
          </div>
          <div class="mh_title">
            荔港南湾 大四房 户型方正 采光好
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>

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
    color: #E23B41;
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
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

</style>

<script>
  export default {
    name: 'HouseDetails',
    data() {
      return {
        swiperPic: [
          "/static/img/home0.jpg",
          "/static/img/home1.jpg",
          "/static/img/home2.jpg"
        ]
      }
    }
  }
</script>
