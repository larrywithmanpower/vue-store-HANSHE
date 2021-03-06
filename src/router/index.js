import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // fronted
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout.vue'),
    // ! 使用redeirect讓首頁不會一直被active
    redirect: { name: 'Home' },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/fronted/Home.vue'),
      },
      {
        path: 'about',
        name: '關於寒舍',
        component: () => import('../views/fronted/About.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/fronted/Products.vue'),
        children: [
          {
            path: 'productList',
            name: '寒舍商品',
            component: () => import('../views/fronted/ProductList.vue'),
          },
          {
            path: 'product/:id',
            name: '商品細節',
            component: () => import('../views/fronted/SingleProduct.vue'),
          },
        ],
      },
      {
        path: 'cart',
        name: '購物車',
        component: () => import('../views/fronted/Cart.vue'),
        children: [
          {
            path: 'cartList',
            name: '已選購商品',
            component: () => import('../views/fronted/CartList.vue'),
          },
          {
            path: 'cartOrder',
            name: '訂單資訊',
            component: () => import('../views/fronted/CartOrder.vue'),
          },
          {
            path: 'cartPayment/:id',
            name: '付款確認',
            component: () => import('../views/fronted/CartPayment.vue'),
          },
        ],
      },
      {
        path: 'finished',
        name: '付款完成',
        component: () => import('../views/fronted/Finished.vue'),
      },
      {
        path: 'blogs',
        name: 'Blogs',
        component: () => import('../views/fronted/Blogs.vue'),
        children: [
          {
            path: 'blog/:id',
            name: 'Blog',
            component: () => import('../views/fronted/Blog.vue'),
          },
          {
            path: 'blogList',
            name: 'BlogList',
            component: () => import('../views/fronted/BlogList.vue'),
          },
        ],
      },
    ],
  },
  // admin
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Dashboard.vue'),
    redirect: { name: 'AdminProducts' },
    children: [
      {
        path: 'adminProducts',
        name: 'AdminProducts',
        component: () => import('../views/admin/Products.vue'),
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/admin/Order.vue'),
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: () => import('../views/admin/Coupon.vue'),
      },
      {
        path: 'article',
        name: 'Article',
        component: () => import('../views/admin/Article.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 };
  },
});

export default router;
