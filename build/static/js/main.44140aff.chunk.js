(this["webpackJsonpcity-explorer"]=this["webpackJsonpcity-explorer"]||[]).push([[0],{54:function(t,e,a){},79:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),s=a(16),c=a.n(s),r=(a(54),a(31)),i=a.n(r),h=a(41),l=a(9),j=a(10),d=a(15),b=a(14),O=a(23),p=a.n(O),u=(a(75),a(19)),m=a(18),x=a(28),f=a(26),g=a(1),v=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(g.jsxs)(x.a,{onSubmit:this.props.OnSubmitOfLocationName,children:[Object(g.jsx)(x.a.Group,{className:"mb-3",children:Object(g.jsx)(x.a.Control,{size:"lg",onChange:this.props.OnChangeOfLocationName,type:"text",placeholder:"Enter Name of a Location"})}),Object(g.jsx)(u.a,{style:{height:100,marginLeft:10,marginRight:10},xs:1,md:1,className:"g-4",children:Object(g.jsx)(f.a,{size:"lg",variant:"primary",type:"submit",children:"Submit"})})]})}}]),a}(o.a.Component),y=a(8),L=a(25),w=a(42),S={height:"auto",marginTop:25,marginBottom:50},D={width:325,height:325,marginLeft:0,marginTop:10},M=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(g.jsx)(m.a,{children:Object(g.jsxs)(u.a,{style:S,md:3,children:[Object(g.jsx)(w.a,{sm:!0}),Object(g.jsx)(w.a,{sm:!0,children:Object(g.jsx)(y.a,{border:"primary",bg:"Light",text:"dark",children:Object(g.jsx)(w.a,{sm:{offset:0},md:{offset:0},children:Object(g.jsxs)(y.a.Body,{children:[Object(g.jsx)(u.a,{children:Object(g.jsxs)(y.a.Title,{style:{marginLeft:5},children:["Weather Information in ",Object(g.jsxs)("b",{children:[" ",this.props.NameOfLocation]})]})}),Object(g.jsx)(u.a,{children:Object(g.jsxs)(y.a.Text,{style:{marginLeft:32},children:["Date of the Day :",Object(g.jsxs)("b",{children:[" ",this.props.WeatherData.data]})]})}),Object(g.jsx)(u.a,{children:Object(g.jsxs)(y.a.Text,{style:{marginLeft:7},children:["Weather Description :",Object(g.jsx)("b",{children:this.props.WeatherData.description})]})}),Object(g.jsx)(u.a,{children:Object(g.jsx)(L.a,{style:D,src:this.props.MapOfLocation,rounded:!0})}),Object(g.jsx)("br",{}),Object(g.jsx)(u.a,{children:Object(g.jsxs)(y.a.Title,{style:{marginLeft:15},children:["Scroll Down To See Popular Movies Realted to the City Name you have Entered \ud83c\udfa5"," "]})})]})})})}),Object(g.jsx)(w.a,{sm:!0})]})})}}]),a}(o.a.Component),N={height:"auto",top:-50,marginTop:50},T={width:280,height:280},k=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(g.jsx)(m.a,{children:Object(g.jsx)(u.a,{children:Object(g.jsx)(w.a,{sm:{size:"auto",offset:0},md:{size:"auto",offset:0},children:Object(g.jsx)(y.a,{border:"primary",style:N,children:Object(g.jsxs)(y.a.Body,{children:[Object(g.jsx)(L.a,{style:T,src:"".concat("https://image.tmdb.org/t/p/w500/").concat(this.props.image_url),alt:"No Photo Existed",rounded:!0}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)(y.a.Title,{children:["Title : ",this.props.title]}),Object(g.jsxs)(y.a.Text,{children:[Object(g.jsx)("b",{children:"Overview"})," : ",this.props.overview]}),Object(g.jsxs)(y.a.Text,{children:[Object(g.jsx)("b",{children:" Average Votes "})," ",this.props.average_votes]}),Object(g.jsxs)(y.a.Text,{children:[Object(g.jsx)("b",{children:"Total Votes "})," ",this.props.total_votes]}),Object(g.jsxs)(y.a.Text,{children:[Object(g.jsx)("b",{children:" Popularity "})," ",this.props.popularity]}),Object(g.jsxs)(y.a.Text,{children:[Object(g.jsx)("b",{children:"Released On "})," ",this.props.released_on]})]})})})})})}}]),a}(o.a.Component),C=a(27),_=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(g.jsxs)(C.a,{show:this.props.ModalShow,onHide:this.props.handleModalShow,children:[Object(g.jsxs)(C.a.Body,{children:[this.props.errorMessage," ",Object(g.jsx)("br",{})," Please Enter A vaild Name of a Location"]}),Object(g.jsx)(C.a.Footer,{children:Object(g.jsx)(f.a,{variant:"secondary",onClick:this.props.handleModalShow,children:"Close"})})]})}}]),a}(o.a.Component),A=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).OnChangeOfLocationName=function(t){n.setState({NameOfLocation:t.target.value})},n.handleModalShow=function(){n.setState({ModalShow:!n.state.ModalShow})},n.OnSubmitOfLocationName=function(){var t=Object(h.a)(i.a.mark((function t(e){var a,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),console.log(n.state.NameOfLocation),t.prev=2,a="https://eu1.locationiq.com/v1/search.php?key=".concat("pk.cbecb2703474c628d6f82047cd751d62","&q=").concat(n.state.NameOfLocation,"&format=json"),t.next=6,p.a.get(a).then((function(t){n.setState({latAndLonData:t.data[0]});var e="".concat("https://jehadabuawwad-city-explorer.herokuapp.com","/weather?city_name=").concat(n.state.NameOfLocation,"&lat=").concat(n.state.latAndLonData.lat,"&lon=").concat(n.state.latAndLonData.lon);p.a.get(e).then((function(t){n.setState({WeatherData:t.data[0]});var e="https://maps.locationiq.com/v3/staticmap?key=".concat("pk.cbecb2703474c628d6f82047cd751d62","&zoom=15&center=[").concat(n.state.latAndLonData.lat,",").concat(n.state.latAndLonData.lon,"]&format=jpg");p.a.get(e).then((function(t){n.setState({MapOfLocation:t.request.responseURL})}))}))}));case 6:return o="".concat("https://jehadabuawwad-city-explorer.herokuapp.com","/movies?city_name=").concat(n.state.NameOfLocation),t.next=9,p.a.get(o).then((function(t){console.log(t),n.setState({MoviesData:t.data})}));case 9:n.setState({ShowDetails:!n.state.ShowDetails}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),console.log(t.t0),n.setState({errorMessage:t.t0.message,ModalShow:!0,ShowDetails:!1});case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}(),n.state={NameOfLocation:"",MapOfLocation:"",latAndLonData:{},WeatherData:{},MoviesData:{},errorMessage:"",ModalShow:!1,ShowDetails:!1},n}return Object(j.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(m.a,{children:Object(g.jsx)(u.a,{style:{marginTop:5},xs:1,md:1,className:"g-4",children:Object(g.jsx)(v,{OnChangeOfLocationName:this.OnChangeOfLocationName,OnSubmitOfLocationName:this.OnSubmitOfLocationName})})}),this.state.ShowDetails&&Object(g.jsxs)(m.a,{children:[Object(g.jsx)(u.a,{style:{marginRight:25,marginLeft:25},xs:1,md:1,children:Object(g.jsx)(M,{NameOfLocation:this.state.NameOfLocation,MapOfLocation:this.state.MapOfLocation,atAndLonData:this.state.latAndLonData,WeatherData:this.state.WeatherData})}),Object(g.jsx)(u.a,{style:{marginRight:25,marginLeft:25},xs:1,md:1,children:this.state.MoviesData.map((function(t){return Object(g.jsx)(k,{image_url:t.image_url,title:t.title,overview:t.overview,average_votes:t.average_votes,total_votes:t.total_votes,popularity:t.popularity,released_on:t.released_on})}))})]}),Object(g.jsx)(_,{handleModalShow:this.handleModalShow,errorMessage:this.state.errorMessage,ModalShow:this.state.ModalShow})]})}}]),a}(o.a.Component),W=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,81)).then((function(e){var a=e.getCLS,n=e.getFID,o=e.getFCP,s=e.getLCP,c=e.getTTFB;a(t),n(t),o(t),s(t),c(t)}))};c.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(A,{})}),document.getElementById("root")),W()}},[[79,1,2]]]);
//# sourceMappingURL=main.44140aff.chunk.js.map