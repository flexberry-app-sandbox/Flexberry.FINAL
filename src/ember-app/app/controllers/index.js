import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.кадровые-документы.caption'),
          title: i18n.t('forms.application.sitemap.кадровые-документы.title'),
          children: [{
            link: 'i-i-s-f-i-n-a-l-организации-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-f-i-n-a-l-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-f-i-n-a-l-организации-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-f-i-n-a-l-отделы-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-f-i-n-a-l-отделы-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-f-i-n-a-l-отделы-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-f-i-n-a-l-согласие-на-опд-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-f-i-n-a-l-согласие-на-опд-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-f-i-n-a-l-согласие-на-опд-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-f-i-n-a-l-график-отпуска-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-f-i-n-a-l-график-отпуска-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-f-i-n-a-l-график-отпуска-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-f-i-n-a-l-должности-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-f-i-n-a-l-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-f-i-n-a-l-должности-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-f-i-n-a-l-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-f-i-n-a-l-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-f-i-n-a-l-сотрудники-l.title'),
            icon: 'chart line',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.расчетные-документы.caption'),
          title: i18n.t('forms.application.sitemap.расчетные-документы.title'),
          children: [{
            link: 'i-i-s-f-i-n-a-l-расчетный-лист-l',
            caption: i18n.t('forms.application.sitemap.расчетные-документы.i-i-s-f-i-n-a-l-расчетный-лист-l.caption'),
            title: i18n.t('forms.application.sitemap.расчетные-документы.i-i-s-f-i-n-a-l-расчетный-лист-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})