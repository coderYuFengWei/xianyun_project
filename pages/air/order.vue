<template>
  <div class="container">
    <input type="hidden" :value="allPrice" />
    <el-row type="flex" justify="space-between">
      <!-- 订单表单 -->
      <OrderForm :data="detail" @getDetail="getDetail" @getAllPrice="getAllPrice" />

      <!-- 侧边栏 -->
      <OrderAside :data="detail" :allPrice="allPrice" />
    </el-row>
  </div>
</template>

<script>
import OrderForm from "@/components/air/orderForm";
import OrderAside from "@/components/air/orderAside";
export default {
  components: {
    OrderForm,
    OrderAside
  },
  data() {
    return {
      detail: {
        seat_infos: {},
        insurances: []
      },
      allPrice: 0
    };
  },

  mounted() {
    const { query } = this.$route;
    this.$axios({
      url: `airs/${query.id}`,
      params: {
        seat_xid: query.seat_xid
      }
    }).then(res => {
      this.detail = res.data;
    });
  },

  methods: {
    getDetail(detail) {
      this.detail = detail;
    },

    getAllPrice(price) {
      this.allPrice = price;
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 20px auto;
}

/*aside*/
.aside {
  width: 350px;
  height: fit-content;
  border: 1px #ddd solid;
}
</style>