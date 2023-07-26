import ConfigProvider from './config-provider'
import zhcn from './locale/zh-cn'
import zhhk from './locale/zh-hk'
import zhtw from './locale/zh-tw'
import enus from './locale/en-us'
import judgeOs from './judge-os'

judgeOs()

const lang = ConfigProvider.getLanguage()
switch (lang) {
  case 'zh-cn':
    ConfigProvider.setLocale(zhcn)
    break
  case 'zh-hk':
    ConfigProvider.setLocale(zhhk)
    break
  case 'zh-tw':
    ConfigProvider.setLocale(zhtw)
    break
  case 'en-us':
    ConfigProvider.setLocale(enus)
    break
}

export { default as Affix } from './affix'
export { default as Animate } from './animate'
export { default as Badge } from './badge'
export { default as Balloon } from './balloon'
export { default as Breadcrumb } from './breadcrumb'
export { default as Button } from './button'
export { default as Calendar } from './calendar'
export { default as Calendar2 } from './calendar2'
export { default as Card } from './card'
export { default as Cascader } from './cascader'
export { default as CascaderSelect } from './cascader-select'
export { default as Checkbox } from './checkbox'
export { default as Collapse } from './collapse'
export { default as DatePicker } from './date-picker'
export { default as DatePicker2 } from './date-picker2'
export { default as Dialog } from './dialog'
export { default as Dropdown } from './dropdown'
export { default as Drawer } from './drawer'
export { default as Field } from './field'
export { default as Form } from './form'
export { default as Grid } from './grid'
export { default as Icon } from './icon'
export { default as Input } from './input'
export { default as Loading, Skeleton } from './loading'
export { default as Menu } from './menu'
export { default as MenuButton } from './menu-button'
export { default as Message } from './message'
export { default as Modal } from './modal'
export { default as Nav } from './nav'
export { default as NumberPicker } from './number-picker'
export { default as Overlay } from './overlay'
export { default as Pagination } from './pagination'
export { default as Paragraph } from './paragraph'
export { default as Progress } from './progress'
export { default as Radio } from './radio'
export { default as Range } from './range'
export { default as Rating } from './rating'
export { default as Search } from './search'
export { default as Select } from './select'
export { default as Shell } from './shell'
export { default as Slider } from './slider'
export { default as SplitButton } from './split-button'
export { default as Step } from './step'
export { default as Switch } from './switch'
export { default as Tab } from './tab'
export { default as Table } from './table'
export { default as Tag } from './tag'
export { default as TimePicker } from './time-picker'
export { default as TimePicker2 } from './time-picker2'
export { default as Timeline } from './timeline'
export { default as Transfer } from './transfer'
export { default as Tree } from './tree'
export { default as TreeSelect } from './tree-select'
export { default as Typography } from './typography'
export { default as Upload } from './upload'
export { default as VirtualList } from './virtual-list'
export { default as Notification } from './notification'
export { default as Divider } from './divider'
export { default as Avatar } from './avatar'
export { default as ResponsiveGrid } from './responsive-grid'
export { default as Box } from './box'
export { default as List } from './list'
export { default as ConfigProvider } from './config-provider'
export const version = '1.4.22'
