<template>
  <div style="width:80vw;">
    <div>
      <el-dropdown @command="handleChangeLang">
        <span class="el-dropdown-link">
          {{$t('changeLang')}}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1">切换语言</el-dropdown-item>
          <el-dropdown-item command="2">switch language</el-dropdown-item>
          <el-dropdown-item command="3">шилжих хэл</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <hr/>
      <h3>{{$store.state.count}}</h3>
    </div>
    <div>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>
    <div>
      <div>
        <span>Element ui</span>
        <el-date-picker v-model="dateValue" type="datetime" :placeholder="$t('dataPlaceholder')">
        </el-date-picker>
      </div>
      <span class="example">{{$t('message.hello')}}</span>
      <hr>
    </div>
    <div style="font-size:0;">
      <img class="img" src="@/assets/Hippopx.jpg">
      <img class="img" src="@/assets/Hippopx (1).jpg">
      <img class="img" src="@/assets/Hippopx (2).jpg">
      <img class="img" src="@/assets/Hippopx (3).jpg">
      <img class="img" src="@/assets/Hippopx (4).jpg">
    </div>
    <!-- 滚动动画 -->
    <div>
      <count-to ref="example" class="example" :start-val="_startVal" :end-val="_endVal" :duration="_duration" :decimals="_decimals"
        :separator="_separator" :prefix="_prefix" :suffix="_suffix" :autoplay="false"></count-to>
      <el-button type="primary" @click="start">{{$t('start')}}</el-button>
      <el-button type="danger" @click="pauseResume">{{$t('pauseResume')}}</el-button>
    </div>    
  </div>
</template>

<script>


  import countTo from 'vue-count-to';

  import store from '@/store/store';

  export default {
    components: {
      countTo,
    },
    data() {
      return {
        tableData: [],
        tableHeader: [],

        setStartVal: 0, // 开始值
        setEndVal: 2017, // 结束值
        setDuration: 4000, // 动画时间
        setDecimals: 0, // 小数位
        setSeparator: ',', // 分隔
        setSuffix: " ", // 后缀
        setPrefix: '￥ ', // 前缀

        dateValue: "",
        
      }
    },
    store,
    computed: {
      count() {
        return this.$store.state.count;
      },
      // 开始值
      _startVal() {
        if (this.setStartVal) {
          return this.setStartVal
        } else {
          return 0
        }
      },
      // 结束值
      _endVal() {
        if (this.setEndVal) {
          return this.setEndVal
        } else {
          return 0
        }
      },
      // 动画时间
      _duration() {
        if (this.setDuration) {
          return this.setDuration
        } else {
          return 100
        }
      },
      // 小数位数
      _decimals() {
        if (this.setDecimals) {
          if (this.setDecimals < 0 || this.setDecimals > 20) {
            alert('参数必须介于0和20之间。')
            return 0
          }
          return this.setDecimals
        } else {
          return 0
        }
      },
      // 分隔符
      _separator() {
        return this.setSeparator
      },
      // 后缀
      _suffix() {
        return this.setSuffix
      },
      // 前缀
      _prefix() {
        return this.setPrefix
      }
    },
    created() {
    },
    methods: {
      // 开始
      start() {
        this.$refs.example.start()
      },
      // 暂停/恢复
      pauseResume() {
        this.$refs.example.pauseResume()
      },
      // 切换语言 
      handleChangeLang(index) {
        // 重绘头像上传组件
        this.resetUpload = false;
        // 切换语言
        switch (index) {
          case "1":
            this.$i18n.locale = 'cn';
            this.lang = 'zn';
            break;
          case "2":
            this.$i18n.locale = 'en';
            this.lang = 'en';
            break;
          case "3":
            this.$i18n.locale = 'mn';
            this.lang = 'mn';
            break;
          default:
            break;
        };
        let that = this;
        setTimeout(() => {
          that.resetUpload = true;
        }, 100)
      },
    },
  }
</script>
<style>
  body {
    margin: 0;
  }

  .img {
    width: 187.5px;
    /*px*/
    height: 200px;
    /*px*/
  }

  .example {
    font-size: 24px;
    color: green;
  }
</style>