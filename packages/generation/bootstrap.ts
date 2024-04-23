import '@tok/ui/styles/global.scss';
import { getApartmentsList, getLoanOffer } from '../../app/src/apiService.ts'; // Импортируйте функции

import { DefinePresetsPlugin } from '@tok/generation/plugins/definePresets';
import { FormStatePlugin } from '@tok/generation/plugins/formState';
import { ThemePlugin } from '@tok/generation/plugins/theme';
import { TokI18nPlugin } from '@tok/i18n';
import { AlertsPlugin } from '@tok/ui/plugins/alerts';
import { CurrencyPlugin } from '@tok/ui/plugins/currency';
import { createApp } from 'vue';
import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router';

import { BootstrapConfig } from './defineConfig';

type _App = Parameters<typeof createApp>[0];

export async function bootstrap<T extends BootstrapConfig<any>>(
  App: _App,
  configFunc: () => Promise<T>
) {
  const apartments = await getApartmentsList(); // Вызовите функции и дождитесь их выполнения
  const loanOffers = await getLoanOffer();
  const config = await configFunc();
  const { fallback, ...asyncLocales } = config.locale || {};

  const i18nOptions = {
    default: fallback || 'en',
    asyncLocales,
  };
  console.log(config);

  const pages = config.pages.map((config, index) => {
    return {
      path: index === 0 ? '/' : config.path || `/${index}`,
      component: () => import('@tok/generation/presets/Route.vue'),
      meta: {
        config,
      },
    };
  });

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL || '/'),
    routes: ([] as RouteRecordRaw[])
    .concat(pages)
    .concat({
      path: '/storefront',
      component: () => import('../../app/src/HomePage.vue'), // Замените на путь к вашему компоненту
      meta: {
        // Здесь вы можете добавить любые метаданные, которые вам нужны
        apartments,
      },
    })
    .concat({
      path: '/not-found',
      alias: '/:catchAll(.*)*',
      redirect: '/',
    }),
  });

  router.afterEach((to: RouteLocationNormalized) => {
    if (to.params.savedPosition) {
      return;
    }

    window.scrollTo({ top: 0 });
  });

  router.onError((error, to) => {
    const dynamicallyImportsError =
      error.message.includes('Failed to fetch dynamically imported module') ||
      error.message.includes('Importing a module script failed');

    if (error.name === 'ChunkLoadError' || dynamicallyImportsError) {
      location.href = to.fullPath;
    }
  });

  return createApp(App)
    .use(router)
    .use(AlertsPlugin)
    .use(TokI18nPlugin, i18nOptions)
    .use(ThemePlugin, config.theme || 'auto')
    .use(FormStatePlugin)
    .use(DefinePresetsPlugin, config.definePresets || {})
    .use(CurrencyPlugin, config.currencyConfig || {})
    .mount('#app');
}
