import React from 'react'
import { Spin } from 'antd';

export const Loadding = ({ isFetching })=> (
    <div className="loadding" style={{display: isFetching ? 'block' : 'none'}}>
        <Spin tip="Loading..." size="large"/>
    </div>
)
