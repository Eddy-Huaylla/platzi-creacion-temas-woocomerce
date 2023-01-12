"use strict";(self.webpackChunk_wcAdmin_webpackJsonp=self.webpackChunk_wcAdmin_webpackJsonp||[]).push([[4011],{43707:function(e,t,r){r.d(t,{Z:function(){return C}});var o=r(69307),a=r(65736),n=r(94333),s=r(69771),i=r(9818),c=r(92819),l=r(7862),u=r.n(l),m=r(86020),d=r(67221),p=r(81921),y=r(54071),g=r(5945),h=r(10431);function f(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||0===e.length)return null;const o=e.slice(0),a=o.pop();if(a.showFilters(t,r)){const e=(0,h.flattenFilters)(a.filters),r=t[a.param]||a.defaultValue||"all";return(0,c.find)(e,{value:r})}return f(o,t,r)}function _(e){return t=>(0,s.format)(e,t)}class b extends o.Component{shouldComponentUpdate(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!(0,c.isEqual)(e.query,this.props.query)}getItemChartData(){const{primaryData:e,selectedChart:t}=this.props;return e.data.intervals.map((function(e){const r={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){const o=r[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;r[e.segment_id]={label:o,value:e.subtotals[t.key]||0}}})),{date:(0,s.format)("Y-m-d\\TH:i:s",e.date_start),...r}}))}getTimeChartData(){const{query:e,primaryData:t,secondaryData:r,selectedChart:o,defaultDateRange:a}=this.props,n=(0,p.getIntervalForQuery)(e,a),{primary:i,secondary:c}=(0,p.getCurrentDates)(e,a);return t.data.intervals.map((function(t,a){const l=(0,p.getPreviousDate)(t.date_start,i.after,c.after,e.compare,n),u=r.data.intervals[a];return{date:(0,s.format)("Y-m-d\\TH:i:s",t.date_start),primary:{label:`${i.label} (${i.range})`,labelDate:t.date_start,value:t.subtotals[o.key]||0},secondary:{label:`${c.label} (${c.range})`,labelDate:l.format("YYYY-MM-DD HH:mm:ss"),value:u&&u.subtotals[o.key]||0}}}))}getTimeChartTotals(){const{primaryData:e,secondaryData:t,selectedChart:r}=this.props;return{primary:(0,c.get)(e,["data","totals",r.key],null),secondary:(0,c.get)(t,["data","totals",r.key],null)}}renderChart(e,t,r,n){const{emptySearchResults:s,filterParam:i,interactiveLegend:c,itemsLabel:l,legendPosition:u,path:y,query:g,selectedChart:h,showHeaderControls:f,primaryData:b,defaultDateRange:C}=this.props,v=(0,p.getIntervalForQuery)(g,C),w=(0,p.getAllowedIntervalsForQuery)(g,C),q=(0,p.getDateFormatsForInterval)(v,b.data.intervals.length,{type:"php"}),R=s?(0,a.__)("No data for the current search","woocommerce"):(0,a.__)("No data for the selected date range","woocommerce"),{formatAmount:D,getCurrencyConfig:E}=this.context;return(0,o.createElement)(m.Chart,{allowedIntervals:w,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:R,filterParam:i,interactiveLegend:c,interval:v,isRequesting:t,itemsLabel:l,legendPosition:u,legendTotals:n,mode:e,path:y,query:g,screenReaderFormat:_(q.screenReaderFormat),showHeaderControls:f,title:h.label,tooltipLabelFormat:_(q.tooltipLabelFormat),tooltipTitle:"time-comparison"===e&&h.label||null,tooltipValueFormat:(0,d.getTooltipValueFormat)(h.type,D),chartType:(0,p.getChartTypeForQuery)(g),valueType:h.type,xFormat:_(q.xFormat),x2Format:_(q.x2Format),currency:E()})}renderItemComparison(){const{isRequesting:e,primaryData:t}=this.props;if(t.isError)return(0,o.createElement)(g.Z,null);const r=e||t.isRequesting,a=this.getItemChartData();return this.renderChart("item-comparison",r,a)}renderTimeComparison(){const{isRequesting:e,primaryData:t,secondaryData:r}=this.props;if(!t||t.isError||r.isError)return(0,o.createElement)(g.Z,null);const a=e||t.isRequesting||r.isRequesting,n=this.getTimeChartData(),s=this.getTimeChartTotals();return this.renderChart("time-comparison",a,n,s)}render(){const{mode:e}=this.props;return"item-comparison"===e?this.renderItemComparison():this.renderTimeComparison()}}b.contextType=y.$,b.propTypes={filters:u().array,isRequesting:u().bool,itemsLabel:u().string,limitProperties:u().array,mode:u().string,path:u().string.isRequired,primaryData:u().object,query:u().object.isRequired,secondaryData:u().object,selectedChart:u().shape({key:u().string.isRequired,label:u().string.isRequired,order:u().oneOf(["asc","desc"]),orderby:u().string,type:u().oneOf(["average","number","currency"]).isRequired}).isRequired},b.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};var C=(0,n.compose)((0,i.withSelect)(((e,t)=>{const{charts:r,endpoint:o,filters:a,isRequesting:n,limitProperties:s,query:i,advancedFilters:l}=t,u=s||[o],m=f(a,i),p=(0,c.get)(m,["settings","param"]),y=t.mode||function(e,t){if(e&&t){const r=(0,c.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return(0,c.get)(e,["chartMode"])}return null}(m,i)||"time-comparison",{woocommerce_default_date_range:g}=e(d.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings"),h=e(d.REPORTS_STORE_NAME),_={mode:y,filterParam:p,defaultDateRange:g};if(n)return _;const b=u.some((e=>i[e]&&i[e].length));if(i.search&&!b)return{..._,emptySearchResults:!0};const C=r&&r.map((e=>e.key)),v=(0,d.getReportChartData)({endpoint:o,dataType:"primary",query:i,selector:h,limitBy:u,filters:a,advancedFilters:l,defaultDateRange:g,fields:C});if("item-comparison"===y)return{..._,primaryData:v};const w=(0,d.getReportChartData)({endpoint:o,dataType:"secondary",query:i,selector:h,limitBy:u,filters:a,advancedFilters:l,defaultDateRange:g,fields:C});return{..._,primaryData:v,secondaryData:w}})))(b)},50933:function(e,t,r){var o=r(69307),a=r(65736),n=r(94333),s=r(9818),i=r(7862),c=r.n(i),l=r(10431),u=r(86020),m=r(81595),d=r(67221),p=r(81921),y=r(14599),g=r(5945),h=r(54071);class f extends o.Component{formatVal(e,t){const{formatAmount:r,getCurrencyConfig:o}=this.context;return"currency"===t?r(e):(0,m.formatValue)(o(),t,e)}getValues(e,t){const{emptySearchResults:r,summaryData:o}=this.props,{totals:a}=o,n=a.primary?a.primary[e]:0,s=a.secondary?a.secondary[e]:0,i=r?0:n,c=r?0:s;return{delta:(0,m.calculateDelta)(i,c),prevValue:this.formatVal(c,t),value:this.formatVal(i,t)}}render(){const{charts:e,query:t,selectedChart:r,summaryData:n,endpoint:s,report:i,defaultDateRange:c}=this.props,{isError:m,isRequesting:d}=n;if(m)return(0,o.createElement)(g.Z,null);if(d)return(0,o.createElement)(u.SummaryListPlaceholder,{numberOfItems:e.length});const{compare:h}=(0,p.getDateParamsFromQuery)(t,c);return(0,o.createElement)(u.SummaryList,null,(t=>{let{onToggle:n}=t;return e.map((e=>{const{key:t,order:c,orderby:m,label:d,type:p,isReverseTrend:g,labelTooltipText:f}=e,_={chart:t};m&&(_.orderby=m),c&&(_.order=c);const b=(0,l.getNewPath)(_),C=r.key===t,{delta:v,prevValue:w,value:q}=this.getValues(t,p);return(0,o.createElement)(u.SummaryNumber,{key:t,delta:v,href:b,label:d,reverseTrend:g,prevLabel:"previous_period"===h?(0,a.__)("Previous period:","woocommerce"):(0,a.__)("Previous year:","woocommerce"),prevValue:w,selected:C,value:q,labelTooltipText:f,onLinkClickCallback:()=>{n&&n(),(0,y.recordEvent)("analytics_chart_tab_click",{report:i||s,key:t})}})}))}))}}f.propTypes={charts:c().array.isRequired,endpoint:c().string.isRequired,limitProperties:c().array,query:c().object.isRequired,selectedChart:c().shape({key:c().string.isRequired,label:c().string.isRequired,order:c().oneOf(["asc","desc"]),orderby:c().string,type:c().oneOf(["average","number","currency"]).isRequired}).isRequired,summaryData:c().object,report:c().string},f.defaultProps={summaryData:{totals:{primary:{},secondary:{}},isError:!1}},f.contextType=h.$,t.Z=(0,n.compose)((0,s.withSelect)(((e,t)=>{const{charts:r,endpoint:o,limitProperties:a,query:n,filters:s,advancedFilters:i}=t,c=a||[o],l=c.some((e=>n[e]&&n[e].length));if(n.search&&!l)return{emptySearchResults:!0};const u=r&&r.map((e=>e.key)),{woocommerce_default_date_range:m}=e(d.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");return{summaryData:(0,d.getSummaryNumbers)({endpoint:o,query:n,select:e,limitBy:c,filters:s,advancedFilters:i,defaultDateRange:m,fields:u}),defaultDateRange:m}})))(f)},38614:function(e,t,r){r.d(t,{O3:function(){return l},be:function(){return u},u8:function(){return d}});var o=r(65736),a=r(92694),n=r(9818),s=r(68734),i=r(30226);const{addCesSurveyForAnalytics:c}=(0,n.dispatch)(i.Ls),l=(0,a.applyFilters)("woocommerce_admin_coupons_report_charts",[{key:"orders_count",label:(0,o.__)("Discounted orders","woocommerce"),order:"desc",orderby:"orders_count",type:"number"},{key:"amount",label:(0,o.__)("Amount","woocommerce"),order:"desc",orderby:"amount",type:"currency"}]),u=(0,a.applyFilters)("woocommerce_admin_coupon_report_advanced_filters",{filters:{},title:(0,o._x)("Coupons match {{select /}} filters","A sentence describing filters for Coupons. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce")}),m=[{label:(0,o.__)("All coupons","woocommerce"),value:"all"},{label:(0,o.__)("Single coupon","woocommerce"),value:"select_coupon",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_coupon",chartMode:"item-comparison",path:["select_coupon"],settings:{type:"coupons",param:"coupons",getLabels:s.hQ,labels:{placeholder:(0,o.__)("Type to search for a coupon","woocommerce"),button:(0,o.__)("Single Coupon","woocommerce")}}}]},{label:(0,o.__)("Comparison","woocommerce"),value:"compare-coupons",settings:{type:"coupons",param:"coupons",getLabels:s.hQ,labels:{title:(0,o.__)("Compare Coupon Codes","woocommerce"),update:(0,o.__)("Compare","woocommerce"),helpText:(0,o.__)("Check at least two coupon codes below to compare","woocommerce")},onClick:c}}];Object.keys(u.filters).length&&m.push({label:(0,o.__)("Advanced filters","woocommerce"),value:"advanced"});const d=(0,a.applyFilters)("woocommerce_admin_coupons_report_filters",[{label:(0,o.__)("Show","woocommerce"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>!0,filters:m}])},52620:function(e,t,r){r.r(t),r.d(t,{default:function(){return q}});var o=r(69307),a=r(7862),n=r.n(a),s=r(65736),i=r(38614),c=r(92819),l=r(86020),u=r(10431),m=r(81595),d=r(81921),p=r(39705),y=r(54071),g=r(79205);class h extends o.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:(0,s.__)("Coupon code","woocommerce"),key:"code",required:!0,isLeftAligned:!0,isSortable:!0},{label:(0,s.__)("Orders","woocommerce"),key:"orders_count",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:(0,s.__)("Amount discounted","woocommerce"),key:"amount",isSortable:!0,isNumeric:!0},{label:(0,s.__)("Created","woocommerce"),key:"created"},{label:(0,s.__)("Expires","woocommerce"),key:"expires"},{label:(0,s.__)("Type","woocommerce"),key:"type"}]}getRowsContent(e){const{query:t}=this.props,r=(0,u.getPersistedQuery)(t),a=(0,g.O3)("dateFormat",d.defaultTableDateFormat),{formatAmount:n,formatDecimal:i,getCurrencyConfig:p}=this.context;return(0,c.map)(e,(e=>{const{amount:t,coupon_id:c,orders_count:d}=e,y=e.extended_info||{},{code:g,date_created:h,date_expires:f,discount_type:_}=y,b=c>0?(0,u.getNewPath)(r,"/analytics/coupons",{filter:"single_coupon",coupons:c}):null,C=null===b?g:(0,o.createElement)(l.Link,{href:b,type:"wc-admin"},g),v=c>0?(0,u.getNewPath)(r,"/analytics/orders",{filter:"advanced",coupon_includes:c}):null;return[{display:C,value:g},{display:null===v?d:(0,o.createElement)(l.Link,{href:v,type:"wc-admin"},(0,m.formatValue)(p(),"number",d)),value:d},{display:n(t),value:i(t)},{display:h?(0,o.createElement)(l.Date,{date:h,visibleFormat:a}):(0,s.__)("N/A","woocommerce"),value:h},{display:f?(0,o.createElement)(l.Date,{date:f,visibleFormat:a}):(0,s.__)("N/A","woocommerce"),value:f},{display:this.getCouponType(_),value:_}]}))}getSummary(e){const{coupons_count:t=0,orders_count:r=0,amount:o=0}=e,{formatAmount:a,getCurrencyConfig:n}=this.context,i=n();return[{label:(0,s._n)("Coupon","Coupons",t,"woocommerce"),value:(0,m.formatValue)(i,"number",t)},{label:(0,s._n)("Order","Orders",r,"woocommerce"),value:(0,m.formatValue)(i,"number",r)},{label:(0,s.__)("Amount discounted","woocommerce"),value:a(o)}]}getCouponType(e){return{percent:(0,s.__)("Percentage","woocommerce"),fixed_cart:(0,s.__)("Fixed cart","woocommerce"),fixed_product:(0,s.__)("Fixed product","woocommerce")}[e]||(0,s.__)("N/A","woocommerce")}render(){const{advancedFilters:e,filters:t,isRequesting:r,query:a}=this.props;return(0,o.createElement)(p.Z,{compareBy:"coupons",endpoint:"coupons",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["coupons_count","orders_count","amount"],isRequesting:r,itemIdField:"coupon_id",query:a,searchBy:"coupons",tableQuery:{orderby:a.orderby||"orders_count",order:a.order||"desc",extended_info:!0},title:(0,s.__)("Coupons","woocommerce"),columnPrefsKey:"coupons_report_columns",filters:t,advancedFilters:e})}}h.contextType=y.$;var f=h,_=r(62409),b=r(43707),C=r(50933),v=r(27410);class w extends o.Component{getChartMeta(){const{query:e}=this.props,t="compare-coupons"===e.filter&&e.coupons&&e.coupons.split(",").length>1?"item-comparison":"time-comparison";return{itemsLabel:(0,s.__)("%d coupons","woocommerce"),mode:t}}render(){const{isRequesting:e,query:t,path:r}=this.props,{mode:a,itemsLabel:n}=this.getChartMeta(),s={...t};return"item-comparison"===a&&(s.segmentby="coupon"),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(v.Z,{query:t,path:r,filters:i.u8,advancedFilters:i.be,report:"coupons"}),(0,o.createElement)(C.Z,{charts:i.O3,endpoint:"coupons",isRequesting:e,query:s,selectedChart:(0,_.Z)(t.chart,i.O3),filters:i.u8,advancedFilters:i.be}),(0,o.createElement)(b.Z,{charts:i.O3,filters:i.u8,advancedFilters:i.be,mode:a,endpoint:"coupons",path:r,query:s,isRequesting:e,itemsLabel:n,selectedChart:(0,_.Z)(t.chart,i.O3)}),(0,o.createElement)(f,{isRequesting:e,query:t,filters:i.u8,advancedFilters:i.be}))}}w.propTypes={query:n().object.isRequired};var q=w},69629:function(e,t,r){r.d(t,{I:function(){return a}});var o=r(65736);function a(e){return[e.country,e.state,e.name||(0,o.__)("TAX","woocommerce"),e.priority].map((e=>e.toString().toUpperCase().trim())).filter(Boolean).join("-")}},68734:function(e,t,r){r.d(t,{FI:function(){return h},V1:function(){return f},YC:function(){return d},hQ:function(){return p},jk:function(){return y},oC:function(){return g},qc:function(){return m},uC:function(){return _}});var o=r(96483),a=r(86989),n=r.n(a),s=r(92819),i=r(10431),c=r(67221),l=r(69629),u=r(79205);function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.identity;return function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;const s="function"==typeof e?e(a):e,c=(0,i.getIdsFromQuery)(r);if(c.length<1)return Promise.resolve([]);const l={include:c.join(","),per_page:c.length};return n()({path:(0,o.addQueryArgs)(s,l)}).then((e=>e.map(t)))}}m(c.NAMESPACE+"/products/attributes",(e=>({key:e.id,label:e.name})));const d=m(c.NAMESPACE+"/products/categories",(e=>({key:e.id,label:e.name}))),p=m(c.NAMESPACE+"/coupons",(e=>({key:e.id,label:e.code}))),y=m(c.NAMESPACE+"/customers",(e=>({key:e.id,label:e.name}))),g=m(c.NAMESPACE+"/products",(e=>({key:e.id,label:e.name}))),h=m(c.NAMESPACE+"/taxes",(e=>({key:e.id,label:(0,l.I)(e)})));function f(e){let{attributes:t,name:r}=e;const o=(0,u.O3)("variationTitleAttributesSeparator"," - ");if(r&&r.indexOf(o)>-1)return r;const a=(t||[]).map((e=>{let{option:t}=e;return t})).join(", ");return a?r+o+a:r}const _=m((e=>{let{products:t}=e;return t?c.NAMESPACE+`/products/${t}/variations`:c.NAMESPACE+"/variations"}),(e=>({key:e.id,label:f(e)})))},62409:function(e,t,r){r.d(t,{Z:function(){return a}});var o=r(92819);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const r=(0,o.find)(t,{key:e});return r||t[0]}}}]);