import { createFromIconfontCN } from '@ant-design/icons'
import { IconFontProps } from '@ant-design/icons/lib/components/IconFont'

const IconComponent = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4156573_djiypz2pdii.js',
  extraCommonProps: {},
})

export default (props: IconFontProps<string> & {}) => <IconComponent {...props} />
