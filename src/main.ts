import { createApp } from 'vue'
import App from './App.vue'

import { createI18n } from 'vue-i18n'
import locale from './locale';

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'en',
    messages: locale,
});

const app = createApp(App)

app.use(i18n)

app.mount('#app')

