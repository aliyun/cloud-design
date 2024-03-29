/**
 * @title xconsole图标列表
 * @description 点击图标复制代码。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Message, Icon } from '@alicloudfe/components'

import CopyToClipboard from 'react-copy-to-clipboard'

import { useCssVar } from '../../utils/useCssVar'
import windIconTypes from '../wind-icon-types'
import xconsoleIconTypes from '../xconsole-icon-types'

const types = [
  'smile',
  'cry',
  'success',
  'warning',
  'prompt',
  'error',
  'help',
  'clock',
  'success-filling',
  'delete-filling',
  'favorites-filling',
  'add',
  'minus',
  'arrow-up',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-double-left',
  'arrow-double-right',
  'switch',
  'sorting',
  'descending',
  'ascending',
  'select',
  'semi-select',
  'loading',
  'search',
  'close',
  'ellipsis',
  'picture',
  'calendar',
  'ashbin',
  'upload',
  'download',
  'set',
  'edit',
  'refresh',
  'filter',
  'attachment',
  'account',
  'email',
  'atm',
  'copy',
  'exit',
  'eye',
  'eye-close',
  'toggle-left',
  'toggle-right',
  'lock',
  'unlock',
  'chart-pie',
  'chart-bar',
  'form',
  'detail',
  'list',
  'dashboard'
]

const handleCopy = () => Message.success('Copied!')

export default function DemoComponent() {
  const theme = useCssVar('--alicloudfe-components-theme')
  const isWind = theme.trim() === 'wind'
  const isXconsole = theme.trim() === 'xconsole'

  let customTypes = []
  if (isWind) customTypes = windIconTypes
  if (isXconsole) customTypes = xconsoleIconTypes

  console.log('customTypes', customTypes, theme)

  const content = (
    <div>
      <div className="icon-list-title">Click on the icon to copy the code.</div>
      <ul className="icon-list">
        {types.map((type, index) => (
          <CopyToClipboard
            key={index}
            text={`<Icon type="${type}" />`}
            onCopy={handleCopy}
          >
            <li>
              <Icon type={type} size="xl" />
              <span>{type}</span>
            </li>
          </CopyToClipboard>
        ))}
      </ul>
      {customTypes.length ? (
        <div>
          <div className="icon-list-custom-title">Custom Icon</div>
          <ul className="icon-list">
            {customTypes.map((type, index) => (
              <CopyToClipboard
                key={index}
                text={`<Icon type="${type}" />`}
                onCopy={handleCopy}
              >
                <li>
                  <Icon type={type} size="xl" />
                  <span>{type}</span>
                </li>
              </CopyToClipboard>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .icon-list-title {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  .icon-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .icon-list li {
    display: inline-block;
    width: 140px;
    padding: 30px 0;
    color: #666;
    cursor: pointer;
  }

  .icon-list li:hover {
    color: #333;
    background-color: #f7f7f7;
  }

  .icon-list i {
    display: block;
    width: 32px;
    margin: 0 auto;
  }

  .icon-list span {
    display: block;
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
  }

  .icon-list-custom-title {
    margin: 20px 0 20px 10px;
    font-size: 20px;
    color: #333;
  }
`
