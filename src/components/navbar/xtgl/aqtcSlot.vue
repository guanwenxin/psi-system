<template>
  <div>
    <div class="topcontainer">
      <div class="title">
        <h2><span>¶</span><slot></slot></h2>
        <div class="backBtn">
          <el-button @click="login">返回登陆页面</el-button>
        </div>
      </div>
      <p class="sub-title"><slot name="sub"></slot></p>
    </div>

    <div class="downcontainer">
      <div class="containerHeader">
        <el-input v-model="city" />
        <el-button @click="getWeather">查询</el-button>
      </div>
      <el-table stripe :data="tableData">
        <el-table-column prop="name" label="天气条目"></el-table-column>
        <el-table-column prop="property" label="key值"></el-table-column>
        <el-table-column prop="value" label="现状">
          <template v-slot:default="scope">
            <!-- 设置图片显示 -->
            <img
              :src="imgFormat(scope.row.value)"
              v-if="scope.row.property === 'img'"
            />
            <div v-else>{{ scope.row.value }}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { http } from "@/utils/http";
const keyMap = {
  city: "城市",
  cityid: "城市ID",
  citycode: "城市代码",
  date: "日期",
  temp: "温度",
  temphigh: "最高温度",
  templow: "最低温度",
  humidity: "湿度",
  pressure:"气压",
  windspeed:"风速",
  winddirect:"风向",
  windpower:"风力",
  updatetime:"更新时间",
  weather:"天气",
  img: "天气图片",
};

export default {
  name: "aqtcSlot",
  data: function () {
    return {
      tableData: [],
      city: "",
    };
  },
  methods: {
    async login(){
        this.$router.push({path:'/'})
    },

    imgFormat(imgNum) {
      // 如果以变量的形式传递路径，并且路径在src/assets下，需要将路径用require包裹
      return require(`@/assets/weather-img/${imgNum}.png`);
    },
    async getWeather() {
      // 白名单
      const removeKey = ["index", "aqi", "daily", "hourly", "week"];
      const { data } = await http.get("/weather/query", {
        params: { city: this.city },
      });
      console.log(data.result);
      //   更新表格，不会在下面接着push
      const tmp = [];
      Object.entries(data.result).forEach(([key, value]) => {
        console.log(key, value);
        if (!removeKey.includes(key)) {
          tmp.push({ property: key, value, name: keyMap[key] || "待完成" });
        }
      });
      this.tableData = tmp;
    },
  },
};
</script>

<style lang="scss" scoped>
.topcontainer {
  .title {
    display: flex;
    justify-content: space-between;
    h2 {
      font-weight: 400;
      color: #1f2f3d;
      span {
        opacity: 0;
      }
      span:hover {
        cursor: pointer;
      }
    }
    h2:hover {
      cursor: pointer;
      span {
        opacity: 0.5;
      }
    }
    .backBtn {
      margin-top: auto;
      margin-bottom: auto;
      button {
        color: red;
      }
    }
    .backBtn:hover {
      cursor: pointer;
    }
  }
  .sub-title {
    font-size: 14px;
    color: #5e6d82;
    margin-left: 18px;
  }
}
.downcontainer {
  .containerHeader {
    display: flex;
  }
}
</style>