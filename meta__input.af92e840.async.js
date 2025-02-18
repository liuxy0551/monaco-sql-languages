"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6300],{55300:function(a,n,e){e.r(n),e.d(n,{demos:function(){return o}});var t=e(75271),o={"input-demo-basic":{component:t.memo(t.lazy(function(){return Promise.all([e.e(5959),e.e(3517),e.e(1066),e.e(1270),e.e(4097),e.e(332),e.e(6543),e.e(7826),e.e(2038),e.e(2295)]).then(e.bind(e,71966))})),asset:{type:"BLOCK",id:"input-demo-basic",refAtomIds:["input"],dependencies:{"index.tsx":{type:"FILE",value:e(58851).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"4.3.1"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528",description:"\u901A\u8FC7\u56DE\u8F66\u952E\u89E6\u53D1 onSearch \u4E8B\u4EF6"},context:void 0,renderOpts:void 0},"input-demo-filteroptions":{component:t.memo(t.lazy(function(){return Promise.all([e.e(5959),e.e(3517),e.e(1066),e.e(1270),e.e(4097),e.e(332),e.e(6543),e.e(7826),e.e(2038),e.e(2295)]).then(e.bind(e,60134))})),asset:{type:"BLOCK",id:"input-demo-filteroptions",refAtomIds:["input"],dependencies:{"index.tsx":{type:"FILE",value:e(67332).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"4.3.1"}},entry:"index.tsx",title:"\u63A7\u5236\u5339\u914D\u9879",description:"\u4EC5\u652F\u6301\u5934\u90E8\u5339\u914D"},context:void 0,renderOpts:void 0}}},48892:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u9700\u8981\u7528\u6237\u8F93\u5165\u8868\u5355\u57DF\u5185\u5BB9\u65F6\u3002",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:6},{value:"\u8BF4\u660E",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"searchType",paraId:1,tocIndex:6},{value:"\u5F53\u524D\u5339\u914D\u9879",paraId:1,tocIndex:6},{value:"SearchType",paraId:1,tocIndex:6},{value:"filterOptions",paraId:1,tocIndex:6},{value:"\u8FC7\u6EE4\u5339\u914D\u9879\u6570\u7EC4",paraId:1,tocIndex:6},{value:"SearchType[]",paraId:1,tocIndex:6},{value:"SearchType[]",paraId:1,tocIndex:6},{value:"onTypeChange",paraId:1,tocIndex:6},{value:"\u5339\u914D\u9879\u4FEE\u6539\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:6},{value:"(type: SearchType) => void;",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"onSearch",paraId:1,tocIndex:6},{value:"\u641C\u7D22\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:6},{value:"(value: string, searchType: SearchType) => void;",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"type SearchType = 'fuzzy' | 'caseSensitive' | 'precise' | 'front' | 'tail';",paraId:2,tocIndex:7},{value:"\u53C2\u6570",paraId:3,tocIndex:7},{value:"\u8BF4\u660E",paraId:3,tocIndex:7},{value:"fuzzy",paraId:3,tocIndex:7},{value:"\u65E0\u9009\u4E2D\u72B6\u6001",paraId:3,tocIndex:7},{value:"caseSensitive",paraId:3,tocIndex:7},{value:"\u5927\u5C0F\u5199\u654F\u611F",paraId:3,tocIndex:7},{value:"precise",paraId:3,tocIndex:7},{value:"\u7CBE\u51C6\u67E5\u8BE2",paraId:3,tocIndex:7},{value:"front",paraId:3,tocIndex:7},{value:"\u5934\u90E8\u5339\u914D",paraId:3,tocIndex:7},{value:"tail",paraId:3,tocIndex:7},{value:"\u5C3E\u90E8\u5339\u914D",paraId:3,tocIndex:7}]},58851:function(a,n){n.Z=`import React, { useState } from 'react';
import { Radio } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Input } from 'dt-react-component';

export default () => {
    const [size, setSize] = useState<SizeType>('middle');
    return (
        <>
            <Radio.Group
                optionType="button"
                value={size}
                options={[
                    { label: 'small', value: 'small' },
                    { label: 'middle', value: 'middle' },
                    { label: 'large', value: 'large' },
                ]}
                onChange={(e) => setSize(e.target.value)}
                style={{ marginBottom: 16 }}
            />
            <Input.Match
                size={size}
                placeholder="\u6309\u540D\u79F0\u641C\u7D22"
                onChange={(e) => console.log('e', e.target.value)}
                onTypeChange={(type) => console.log('onTypeChange:', type)}
                onSearch={(value, searchType) => console.log('onSearch:', value, searchType)}
            />
        </>
    );
};
`},67332:function(a,n){n.Z=`import React from 'react';
import { Input } from 'dt-react-component';

export default () => {
    return (
        <Input.Match
            filterOptions={['front']}
            placeholder="\u6309\u540D\u79F0\u641C\u7D22"
            onChange={(e) => console.log('e', e.target.value)}
            onTypeChange={(type) => console.log('onTypeChange:', type)}
            onSearch={(value, searchType) => console.log('onSearch:', value, searchType)}
        />
    );
};
`}}]);
