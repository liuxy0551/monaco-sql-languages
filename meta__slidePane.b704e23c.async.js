"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[8064],{79842:function(a,n,e){e.r(n),e.d(n,{demos:function(){return d}});var t=e(75271),d={"slidepane-demo-basic":{component:t.memo(t.lazy(function(){return Promise.all([e.e(5959),e.e(3517),e.e(1066),e.e(1270),e.e(4097),e.e(332),e.e(2699),e.e(186),e.e(5219),e.e(9484)]).then(e.bind(e,77544))})),asset:{type:"BLOCK",id:"slidepane-demo-basic",refAtomIds:["slidePane"],dependencies:{"index.tsx":{type:"FILE",value:e(37911).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"4.3.1"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},context:void 0,renderOpts:void 0}}},8659:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:`\u4ECE\u9875\u9762\u53F3\u4FA7\u5F39\u51FA\u9762\u677F\uFF0C\u5C55\u793A\u76F8\u5E94\u5185\u5BB9\u3002\u7528\u6237\u5728\u62BD\u5C49\u5185\u64CD\u4F5C\u65F6\u4E0D\u5FC5\u79BB\u5F00\u5F53\u524D\u4EFB\u52A1\uFF0C\u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u5E73\u6ED1\u5730\u56DE\u5230\u539F\u4EFB\u52A1\u3002
\u5E38\u7528\u4E8E\uFF1A \u67E5\u770B\u8BE6\u60C5\uFF0C \u9884\u89C8\u8F83\u591A\u5185\u5BB9\u7684\u573A\u666F\u4E0B\u3002`,paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"visible",paraId:1,tocIndex:4},{value:"SlidePanel \u662F\u5426\u53EF\u89C1",paraId:1,tocIndex:4},{value:"boolean",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"className",paraId:1,tocIndex:4},{value:"\u53F3\u4FA7\u9762\u677F\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"style",paraId:1,tocIndex:4},{value:"\u53F3\u4FA7\u9762\u677F\u5916\u5C42\u5BB9\u5668\u7684\u6837\u5F0F",paraId:1,tocIndex:4},{value:"CSSProperties",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"bodyStyle",paraId:1,tocIndex:4},{value:"\u53F3\u4FA7\u9762\u677F\u5185\u90E8\u5BB9\u5668\u7684\u6837\u5F0F",paraId:1,tocIndex:4},{value:"CSSProperties",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"onClose",paraId:1,tocIndex:4},{value:"\u5173\u95ED\u56DE\u8C03",paraId:1,tocIndex:4},{value:"function",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4}]},37911:function(a,n){n.Z=`import React, { useState } from 'react';
import { Button, Slider } from 'antd';
import { SlidePane } from 'dt-react-component';

export default () => {
    const [visible, setVisible] = useState(false);
    const [width, setWidth] = useState(80);

    return (
        <>
            <Slider
                defaultValue={width}
                min={10}
                max={100}
                onChange={(value: number) => setWidth(value)}
            />
            <span>width:{width}%</span>
            <Button style={{ margin: '10px' }} onClick={() => setVisible((v) => !v)}>
                click me
            </Button>
            <SlidePane
                visible={visible}
                style={{
                    width: \`\${width}%\`,
                    minHeight: '600px',
                    height: '100%',
                }}
                onClose={() => setVisible(false)}
            >
                <div>hello world</div>
            </SlidePane>
        </>
    );
};
`}}]);
