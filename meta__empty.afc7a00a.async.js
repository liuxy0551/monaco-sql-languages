"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[8974],{17481:function(P,p,t){t.r(p),t.d(p,{demos:function(){return D}});var f=t(90228),y=t.n(f),x=t(48305),g=t.n(x),j=t(87999),h=t.n(j),v=t(75271),D={"empty-demo-0":{component:v.memo(v.lazy(h()(y()().mark(function i(){var l,n,s,a,d,m,I,e,u,E;return y()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(t.t.bind(t,75271,19));case 2:return l=o.sent,n=l.default,s=l.useState,o.next=7,Promise.all([t.e(8552),t.e(5959),t.e(3517),t.e(1066),t.e(1270),t.e(4097),t.e(332),t.e(6543),t.e(7826),t.e(2038),t.e(2761),t.e(4630),t.e(9750),t.e(2088),t.e(6980),t.e(4853),t.e(2699),t.e(5329),t.e(186),t.e(8524),t.e(9981),t.e(1698),t.e(3913),t.e(977),t.e(6711),t.e(1677),t.e(454)]).then(t.bind(t,40524));case 7:return a=o.sent,d=a.Empty,o.next=11,Promise.all([t.e(8552),t.e(5959),t.e(3517),t.e(1270),t.e(7826),t.e(2761),t.e(9750),t.e(186),t.e(734),t.e(6530),t.e(9858),t.e(5219),t.e(6840)]).then(t.bind(t,16840));case 11:return m=o.sent,I=m.Radio,e=m.Space,u=[{label:"default",value:"default"},{label:"project",value:"project"},{label:"chart",value:"chart"},{label:"search",value:"search"},{label:"permission",value:"permission"},{label:"overview",value:"overview"}],E=function(r){switch(r){case"default":return n.createElement(d,{type:"default"});case"project":return n.createElement(d,{type:"project",description:"\u7A7A\u9879\u76EE"});case"chart":return n.createElement(d,{type:"chart",description:"\u56FE\u8868\u7A7A\u6570\u636E"});case"search":return n.createElement(d,{type:"search",description:"\u641C\u7D22\u65E0\u6570\u636E"});case"permission":return n.createElement(d,{type:"permission",description:"\u65E0\u6743\u9650"});case"overview":return n.createElement(d,{type:"overview",description:"description"});default:return null}},o.abrupt("return",{default:function(){var r=s("default"),c=g()(r,2),R=c[0],O=c[1];return n.createElement(n.Fragment,null,n.createElement(e,{direction:"vertical",style:{width:"100%"},size:16},n.createElement(I.Group,{defaultValue:"default",optionType:"button",options:u,onChange:function(T){return O(T.target.value)}}),E(R)))}});case 17:case"end":return o.stop()}},i)})))),asset:{type:"BLOCK",id:"empty-demo-0",refAtomIds:["empty"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Empty } from 'dt-react-component';
import { Radio, Space } from 'antd';

const options = [
    { label: 'default', value: 'default' },
    { label: 'project', value: 'project' },
    { label: 'chart', value: 'chart' },
    { label: 'search', value: 'search' },
    { label: 'permission', value: 'permission' },
    { label: 'overview', value: 'overview' },
];

const getEmpty = (type) => {
    switch (type) {
        case 'default':
            return <Empty type="default" />;
        case 'project':
            return <Empty type="project" description="\u7A7A\u9879\u76EE" />;
        case 'chart':
            return <Empty type="chart" description="\u56FE\u8868\u7A7A\u6570\u636E" />;
        case 'search':
            return <Empty type="search" description="\u641C\u7D22\u65E0\u6570\u636E" />;
        case 'permission':
            return <Empty type="permission" description="\u65E0\u6743\u9650" />;
        case 'overview':
            return <Empty type="overview" description="description" />;
        default:
            return null;
    }
};

export default () => {
    const [emptyType, setEmptyType] = useState('default');
    return (
        <>
            <Space direction="vertical" style={{ width: '100%' }} size={16}>
                <Radio.Group
                    defaultValue="default"
                    optionType="button"
                    options={options}
                    onChange={(e) => setEmptyType(e.target.value)}
                />
                {getEmpty(emptyType)}
            </Space>
        </>
    );
};`},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"4.3.1"},antd:{type:"NPM",value:"4.22.5"}},entry:"index.jsx",title:"\u4F7F\u7528\u5185\u7F6E\u72B6\u6001"},context:void 0,renderOpts:void 0},"empty-demo-1":{component:v.memo(v.lazy(h()(y()().mark(function i(){var l,n,s,a,d,m;return y()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.t.bind(t,75271,19));case 2:return l=e.sent,n=l.default,e.next=6,Promise.all([t.e(8552),t.e(5959),t.e(3517),t.e(1066),t.e(1270),t.e(4097),t.e(332),t.e(6543),t.e(7826),t.e(2038),t.e(2761),t.e(4630),t.e(9750),t.e(2088),t.e(6980),t.e(4853),t.e(2699),t.e(5329),t.e(186),t.e(8524),t.e(9981),t.e(1698),t.e(3913),t.e(977),t.e(6711),t.e(1677),t.e(454)]).then(t.bind(t,40524));case 6:return s=e.sent,a=s.Empty,e.next=10,Promise.all([t.e(8552),t.e(5959),t.e(3517),t.e(1270),t.e(7826),t.e(2761),t.e(9750),t.e(186),t.e(734),t.e(6530),t.e(9858),t.e(5219),t.e(6840)]).then(t.bind(t,16840));case 10:return d=e.sent,m=d.Divider,e.abrupt("return",{default:function(){return n.createElement(a,{image:"https://user-images.githubusercontent.com/38368040/195246598-5adf8985-3f78-48b1-8116-bc4d78982df8.jpeg"})}});case 13:case"end":return e.stop()}},i)})))),asset:{type:"BLOCK",id:"empty-demo-1",refAtomIds:["empty"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Empty } from 'dt-react-component';
import { Divider } from 'antd';

export default () => {
    return (
        <Empty image="https://user-images.githubusercontent.com/38368040/195246598-5adf8985-3f78-48b1-8116-bc4d78982df8.jpeg" />
    );
};`},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"4.3.1"},antd:{type:"NPM",value:"4.22.5"}},entry:"index.jsx",title:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u56FE\u7247"},context:void 0,renderOpts:void 0},"empty-demo-2":{component:v.memo(v.lazy(h()(y()().mark(function i(){var l,n,s,a,d,m;return y()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.t.bind(t,75271,19));case 2:return l=e.sent,n=l.default,e.next=6,Promise.all([t.e(8552),t.e(5959),t.e(3517),t.e(1066),t.e(1270),t.e(4097),t.e(332),t.e(6543),t.e(7826),t.e(2038),t.e(2761),t.e(4630),t.e(9750),t.e(2088),t.e(6980),t.e(4853),t.e(2699),t.e(5329),t.e(186),t.e(8524),t.e(9981),t.e(1698),t.e(3913),t.e(977),t.e(6711),t.e(1677),t.e(454)]).then(t.bind(t,40524));case 6:return s=e.sent,a=s.Empty,e.next=10,Promise.all([t.e(8552),t.e(5959),t.e(3517),t.e(1270),t.e(7826),t.e(2761),t.e(9750),t.e(186),t.e(734),t.e(6530),t.e(9858),t.e(5219),t.e(6840)]).then(t.bind(t,16840));case 10:return d=e.sent,m=d.Divider,e.abrupt("return",{default:function(){return n.createElement(n.Fragment,null,n.createElement(a,{description:"\u4F7F\u7528 height \u5B9A\u4E49\u56FE\u7247\u5927\u5C0F",height:60}),n.createElement(a,{height:60,imageStyle:{height:120},description:"\u4F7F\u7528\u7EE7\u627F\u81EAantd\u7684\u5C5E\u6027imageStyle"}))}});case 13:case"end":return e.stop()}},i)})))),asset:{type:"BLOCK",id:"empty-demo-2",refAtomIds:["empty"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Empty } from 'dt-react-component';
import { Divider } from 'antd';

export default () => {
    return (
        <>
            <Empty description="\u4F7F\u7528 height \u5B9A\u4E49\u56FE\u7247\u5927\u5C0F" height={60} />
            <Empty
                height={60}
                imageStyle={{ height: 120 }}
                description="\u4F7F\u7528\u7EE7\u627F\u81EAantd\u7684\u5C5E\u6027imageStyle"
            />
        </>
    );
};`},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"4.3.1"},antd:{type:"NPM",value:"4.22.5"}},entry:"index.jsx",title:"\u66F4\u591A\u914D\u7F6E"},context:void 0,renderOpts:void 0}}},99791:function(P,p,t){t.r(p),t.d(p,{texts:function(){return f}});const f=[{value:"\u5F53\u76EE\u524D\u6CA1\u6709\u6570\u636E\u65F6\uFF0C\u7528\u4E8E\u663E\u5F0F\u7684\u7528\u6237\u63D0\u793A\u3002",paraId:0,tocIndex:1},{value:"\u521D\u59CB\u5316\u573A\u666F\u65F6\u7684\u5F15\u5BFC\u521B\u5EFA\u6D41\u7A0B\u3002",paraId:0,tocIndex:1},{value:"\u5185\u7F6E 6 \u79CD\u7A7A\u72B6\u6001\u7C7B\u578B\u3002",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:6},{value:"\u8BF4\u660E",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"type",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u5C55\u793A\u56FE\u7247\u7684\u7C7B\u578B",paraId:1,tocIndex:6},{value:"default",paraId:1,tocIndex:6},{value:" | ",paraId:1,tocIndex:6},{value:"project",paraId:1,tocIndex:6},{value:" | ",paraId:1,tocIndex:6},{value:"chart",paraId:1,tocIndex:6},{value:" | ",paraId:1,tocIndex:6},{value:"search",paraId:1,tocIndex:6},{value:" | ",paraId:1,tocIndex:6},{value:"permission",paraId:1,tocIndex:6},{value:" | ",paraId:1,tocIndex:6},{value:"overview",paraId:1,tocIndex:6},{value:"default",paraId:1,tocIndex:6},{value:"height",paraId:1,tocIndex:6},{value:"\u56FE\u7247\u9AD8\u5EA6",paraId:1,tocIndex:6},{value:"number",paraId:1,tocIndex:6},{value:"80",paraId:1,tocIndex:6},{value:"image",paraId:1,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u56FE\u7247(\u8BBE\u7F6E\u8BE5\u53C2\u6570\u65F6\uFF0C\u9ED8\u8BA4\u7684\u56FE\u7247\u4E0D\u751F\u6548)",paraId:1,tocIndex:6},{value:"React.ReactNode",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"imageStyle",paraId:1,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u56FE\u7247\u6837\u5F0F",paraId:1,tocIndex:6},{value:"React.CSSProperties",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"\u5176\u4F59\u5C5E\u6027",paraId:2},{value:"\u7EE7\u627F antd4.x \u7684 Empty",paraId:2}]}}]);
