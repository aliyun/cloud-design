/**
 * @title 不展示空选项组-hideEmptyOptionGroup
 * @description
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select, Button } from '@alicloudfe/components'

const { Option, OptionGroup } = Select
const dataSource = [
    {
        label: 'label1',
        children: [
            {
                label: 'label1-1',
                value: 'text1-1'
            }
        ]
    },
    {
        label: 'label2',
        children: [
            {
                label: 'label2-1',
                value: 'text2-1'
            }
        ]
    },
    {
        label: 'label3',
        children: [
        ]
    },
    {
        label: 'label4',
        value: '4'
    },
    {
        label: 'label5',
        children: [
            ...Array.from({ length: 1000 }, (_, i) => ({ label: i + 6 + '', value: i + 6 + '' }))
        ]
    }
]
// const randomIndex = (n) => Math.floor(Math.random() * (n + 1))
class App extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.state = {
            groupDataSource: []
        }
    }
    componentDidMount(): void {
        this.handleRefresh()
    }
    handleRefresh = () => {
        this.setState({
            groupDataSource: Array.from({ length: 8 }, (_) => {
                const random = Math.random()
                const hasChildren = random > 0.5
                return {
                    label: `${random}`,
                    children: hasChildren ? Array.from({ length: 10 }, (_, i) => ({ label: '' + i + 1 + '', value: `${Math.random()}` })) : undefined,
                    value: hasChildren ? undefined : `${Math.random()}`,
                }
            })
        })
    }
    onChange(value) {
        console.log(value)
    }

    render() {
        return (
            <div>
                <span id="select-a11y">Select1:传hideEmptyOptionGroup-dataSource </span>
                <div>
                    <Select
                        id="1"
                        showSearch
                        hideEmptyOptionGroup
                        onChange={this.onChange}
                        defaultValue="jack"
                        aria-labelledby="select-a11y"
                        dataSource={dataSource}
                    />
                </div>
                <div>
                    <span >Select2: 传hideEmptyOptionGroup-React.Node</span>
                    <div>
                        <Select
                            id="2"
                            hideEmptyOptionGroup
                            showSearch
                            onChange={this.onChange}
                            defaultValue="jack"
                            aria-labelledby="select-a11y"
                        >
                            <OptionGroup label="group1">
                                <Option value="small">Small</Option>
                                <Option value="medium">Medium</Option>
                                <Option value="large">Large</Option>
                            </OptionGroup>
                            <OptionGroup label="group2">
                                <Option value="small2" label="small" />
                                <Option value="medium2">Medium2</Option>
                                <Option value="large2">Large2</Option>
                            </OptionGroup>
                            <OptionGroup label="group3">
                            </OptionGroup>
                        </Select>
                    </div>
                </div>
                <div>
                    <span >Select3-未传hideEmptyOptionGroup-dataSource  </span>
                    <div>
                        <Select
                            id='3'
                            showSearch
                            onChange={this.onChange}
                            defaultValue="jack"
                            aria-labelledby="select-a11y"
                            dataSource={dataSource}
                        />
                    </div>
                </div>
                <div>
                    <span >Select4: 未传hideEmptyOptionGroup-React.Node</span>
                    <div>
                        <Select
                            id='4'
                            showSearch
                            id="advance-select"
                            onChange={this.onChange}
                            defaultValue="jack"
                            aria-labelledby="select-a11y"
                        >
                            <OptionGroup label="group1">
                                <Option value="small" label="small"></Option>
                                <Option value="medium">Medium</Option>
                                <Option value="large">Large</Option>
                            </OptionGroup>
                            <OptionGroup label="group2">
                                <Option value="small2">Small2</Option>
                                <Option value="medium2">Medium2</Option>
                                <Option value="large2">Large2</Option>
                            </OptionGroup>
                            <OptionGroup label="group3">
                            </OptionGroup>
                        </Select>
                    </div>
                </div>
                <div>
                    <span >Select5: 传hideEmptyOptionGroup-刷新dataSource</span>
                    <div>
                        <Select
                            id='5'
                            hideEmptyOptionGroup
                            showSearch
                            onChange={this.onChange}
                            defaultValue="jack"
                            aria-labelledby="select-a11y"
                            dataSource={this.state.groupDataSource}
                        />
                        <Button style={{ marginLeft: '8px' }} onClick={this.handleRefresh}>刷新</Button>
                    </div>
                </div>
                <div>
                    <span >Select6: 未传hideEmptyOptionGroup-刷新dataSource</span>
                    <div>
                        <Select
                            id='6'
                            showSearch
                            onChange={this.onChange}
                            defaultValue="jack"
                            aria-labelledby="select-a11y"
                            dataSource={this.state.groupDataSource}
                        />
                        <Button style={{ marginLeft: '8px' }} onClick={this.handleRefresh}>刷新</Button>
                    </div>
                </div>
            </div >
        )
    }
}

export default function DemoComponent() {
    const content = <App />
    return <Style>{content}</Style>
}
const Style = styled.div``
