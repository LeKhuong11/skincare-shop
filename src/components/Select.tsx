import { Select } from 'antd'
import React from 'react'
import styled from 'styled-components'

interface ISelect {
    onChange?: any
    items: any
    value: any
    width?: number
}

const SelectStyled = styled(Select)`
    margin-right: 20px;
&&& {
    :where(.css-dev-only-do-not-override-mxhywb).ant-select-single:not(.ant-select-customize-input) .ant-select-selector{
        height: 43px;
        border-radius: 32px;
    }
    .ant-select-selection-item {
        top: 15%;
    }
}
}
`


function CustomSelect({onChange, items, value, width = 130}: ISelect) {
  return (
    <SelectStyled
        style={{ width: width, height: 40, borderRadius: 32}}
        onChange={onChange}
        options={items.map((item: any) => ({ label: item, value: item }))}
        value={value}
    />
  )
}

export default CustomSelect