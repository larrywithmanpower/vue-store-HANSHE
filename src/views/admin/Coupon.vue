<template>
  <div>
    <Loading :active="isLoading"/>
    <button
      type="button"
      class="btn btn-primary my-3"
      @click="openModal('new')"
    >
    新增優惠劵
    </button>
    <div class="table-responsive">
      <table class="table align-middle text-center">
        <thead>
          <tr>
            <th width="20%">方案</th>
            <th width="15%">折扣碼</th>
            <th width="10%">折扣</th>
            <th width="20%">期限</th>
            <th width="10%">是否啟用</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coupon in coupons" :key="coupon.id">
            <td>{{ coupon.title }}</td>
            <td>{{ coupon.code }}</td>
            <td>{{ coupon.percent }} %</td>
            <td>{{ new Date(coupon.due_date * 1000).toLocaleDateString() }}</td>
            <td>
              <span
                :class="{ 'text-success': coupon.is_enabled }"
                v-if="coupon.is_enabled"
              >
                啟用
              </span>
              <span
                :class="{ 'text-danger': !coupon.is_enabled }"
                v-if="!coupon.is_enabled"
              >
                未啟用
              </span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-primary"
                  @click="openModal('edit', coupon)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-danger"
                  @click="openModal('delete', coupon)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <CouponModal
    id="CouponModal"
    ref="CouponModal"
    :is-new="isNew"
    :coupon="tempCoupon"
    @update-coupon="updateCoupon"
  />

  <!-- del product modal -->
  <DelModal
    id="DelModal"
    ref="DelModal"
    :item="tempCoupon"
    @delete="deleteCoupon"
  />
</template>

<script>
import CouponModal from '@/components/admin/CouponModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  data() {
    return {
      isLoading: false,
      coupons: [],
      isNew: false,
      tempCoupon: {},
    };
  },
  inject: ['emitter'],
  components: {
    CouponModal,
    DelModal,
  },
  created() {
    this.getCoupons();
  },
  methods: {
    getCoupons(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.coupons = res.data.coupons;
          this.isLoading = false;
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '優惠劵取得失敗',
            content: res.data.message.join('、'),
          });
          this.isLoading = false;
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    openModal(isNew, coupon) {
      switch (isNew) {
        case 'new':
          this.isNew = true;
          this.tempCoupon = {
            due_date: Math.floor(Date.now() / 1000),
            is_enabled: 1,
          };
          this.$refs.CouponModal.showModal();
          break;
        case 'edit':
          this.isNew = false;
          this.tempCoupon = {
            ...coupon,
          };
          this.$refs.CouponModal.showModal();
          break;
        case 'delete':
          this.tempCoupon = { ...coupon };
          this.$refs.DelModal.showModal();
          break;
        default:
          break;
      }
    },
    updateCoupon(tempCoupon) {
      this.tempCoupon = tempCoupon;
      let url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethod = 'post';

      if (!this.isNew) {
        url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        httpMethod = 'put';
      }

      this.$http[httpMethod](url, { data: tempCoupon }).then((res) => {
        if (res.data.success) {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
          });
          this.getCoupons(this.currentPage);
          this.$refs.CouponModal.hideModal();
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '更新失敗',
            content: res.data.message.join(','),
          });
        }
      });
    },
    deleteCoupon(tempCoupon) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupon/${tempCoupon.id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
          });
          this.getCoupons();
          this.$refs.DelModal.hideModal();
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: res.data.message,
          });
        }
      }).catch((err) => {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: err,
        });
      });
    },
  },
};
</script>
