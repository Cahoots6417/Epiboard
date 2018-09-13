import * as VList from 'vuetify/es5/components/VList';
import { VTextField, VSwitch, VSlider } from 'vuetify';

// @vue/component
export default {
  name: 'QuickLinks',
  components: {
    ...VList,
    VTextField,
    VSwitch,
    VSlider,
  },
  tickLabels: [32, 64, 96, 128],
  data() {
    return {
      settings: {},
      newLink: '',
    };
  },
  methods: {
    addLink(url) {
      if (url.trim().length === 0) return;
      this.newFeed = '';
      this.settings.links.push(url);
    },
    removeLink(idx) {
      this.settings.links.splice(idx, 1);
    },
  },
};