import Vue from 'vue'
import { Switch, Form, FormItem, Input, Checkbox, Select, Radio, RadioGroup , Upload, Notification, Dialog, DatePicker, Loading, Option, Table, TableColumn, Tag, Rate} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Loading);

// configure language
locale.use(lang)

// import components
Vue.component(Form.name, Form)
Vue.component(Switch.name, Switch)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Upload.name, Upload)
Vue.component(Notification.name, Notification)
Vue.component(Dialog.name, Dialog)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Tag.name, Tag)
Vue.component(Rate.name, Rate)

