const routes = [
  {
    path: '/',
    name: "Home",
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
        name: "abstract_home",
        component: () => import('pages/HomePage.vue') }
    ]
  },
  {
    path: '/movies',
    name: "Movies",
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
        name: "abstract_movie",
        component: () => import('pages/MoviePage.vue') }
    ]
  },
  {
    path: '/shows',
    name: "Shows",
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
        name: "abstract_shows",
        component: () => import('pages/ShowPage.vue') }
    ]
  },
  {
    path: '/search',
    name: "Search",
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
        name: "abstract_search",
        component: () => import('pages/SearchPage.vue') }
    ]
  },
  // 404 ROUTE REDIRECTION
  {
    path: '/:catchAll(.*)*',
    name: "NotFound",
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
