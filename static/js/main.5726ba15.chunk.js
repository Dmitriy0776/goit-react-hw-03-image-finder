(window["webpackJsonpgoit-react-hw-02-bank-account"]=window["webpackJsonpgoit-react-hw-02-bank-account"]||[]).push([[0],{2:function(e,t,a){e.exports={photo_card:"photoCard_photo_card__1Ap-P",stats:"photoCard_stats__tdVwG",stats_item:"photoCard_stats_item__3nXAu",fullscreen_button:"photoCard_fullscreen_button__3mNW-",gallery_item:"photoCard_gallery_item__3myYx"}},21:function(e,t,a){e.exports={search_form:"searchForm_search_form__1pxof"}},25:function(e,t,a){e.exports=a(56)},5:function(e,t,a){e.exports={gallery:"gallery_gallery__1mcm1",button:"gallery_button__1ST7j"}},55:function(e,t,a){e.exports={app:"app_app__3Of9l"}},56:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),c=a.n(r),l=a(4),s=a(18),i=a(19),m=a(23),u=a(20),p=a(24),g=a(21),d=a.n(g),h=function(e){var t=e.onSubmitForm,a=e.onChangeInput,n=e.inputSearch;return o.a.createElement("form",{className:d.a.search_form,onSubmit:t},o.a.createElement("input",{onChange:a,value:n,type:"text",autoComplete:"off",placeholder:"Search images..."}))},_=a(2),f=a.n(_),b=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.openModal,r=e.likes,c=e.views,l=e.comments,s=e.downloads;return o.a.createElement("li",{className:f.a.gallery_item},o.a.createElement("div",{className:f.a.photo_card},o.a.createElement("img",{src:t,alt:"imghere"}),o.a.createElement("div",{className:f.a.stats},o.a.createElement("p",{className:f.a.stats_item},o.a.createElement("i",{className:"material-icons"},"thumb_up"),r),o.a.createElement("p",{className:f.a.stats_item},o.a.createElement("i",{className:"material-icons"},"visibility"),c),o.a.createElement("p",{className:f.a.stats_item},o.a.createElement("i",{className:"material-icons"},"comment"),l),o.a.createElement("p",{className:f.a.stats_item},o.a.createElement("i",{className:"material-icons"},"cloud_download"),s)),o.a.createElement("button",{onClick:function(){return n(a)},type:"button",className:f.a.fullscreen_button},o.a.createElement("i",{className:"material-icons",style:{pointerEvents:"none"}},"zoom_out_map"))))},v=a(5),E=a.n(v),w=a(22),y=a.n(w),N=function(e){var t=e.imagesArr,a=e.onClickBtn,n=e.openModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:E.a.gallery},t.map((function(e){e.id;var t=e.webformatURL,a=e.largeImageURL,r=e.likes,c=e.views,l=e.comments,s=e.downloads;return o.a.createElement(b,{key:y.a.generate(),webformatURL:t,largeImageURL:a,likes:r,views:c,comments:l,downloads:s,openModal:n})}))),o.a.createElement("button",{type:"button",onClick:a,className:E.a.button},"Load more"))},S=a(6),k=a.n(S),C=function(e){var t=e.largeURL,a=e.closeModal;return o.a.createElement("div",{class:k.a.overlay,onClick:a},o.a.createElement("div",{class:k.a.modal},o.a.createElement("img",{src:t,alt:"imgLarge"})))},L=a(7),M=a.n(L);M.a.defaults.baseURL="https://pixabay.com/api/";var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cat",a="$key=".concat("13282514-2415d37e85c92861470a7cbb5"),n="?image_type=photo&orientation=horizontal",o="&per_page=12",r="&page=".concat(e),c="&q=".concat(t);return M.a.get(n+o+a+r+c)},O=(a(55),1),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={imagesArr:[],pageNumber:1,inputSearch:"",isModalOpen:!1,largeImageURL:""},a.closeOnEscape=function(e){27===e.keyCode&&a.setState({isModalOpen:!1})},a.fetchingImg=function(){var e=a.state,t=e.pageNumber,n=e.inputSearch;I(t,n.toLowerCase()).then((function(e){return a.setState((function(t){return{imagesArr:[].concat(Object(l.a)(t.imagesArr),Object(l.a)(e.data.hits))}}),(function(){return window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}))})).catch(console.log)},a.fetchingNewImg=function(){var e=a.state,t=e.pageNumber,n=e.inputSearch;I(t,n.toLowerCase()).then((function(e){return a.setState({imagesArr:Object(l.a)(e.data.hits)})}),(function(){return window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})).catch(console.log)},a.changePageNumber=function(){a.setState((function(e){return{pageNumber:e.pageNumber+O}})),a.fetchingImg()},a.handleChangeInput=function(e){a.setState({inputSearch:e.target.value})},a.onSubmitForm=function(e){e.preventDefault(),a.setState({pageNumber:1}),a.fetchingNewImg()},a.openModalWindow=function(e){a.setState({isModalOpen:!0,largeImageURL:e})},a.closeModalWindow=function(e){"IMG"!==e.target.tagName&&a.setState({isModalOpen:!1})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchingImg(),document.addEventListener("keydown",this.closeOnEscape)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.closeOnEscape)}},{key:"render",value:function(){var e=this.state,t=e.imagesArr,a=e.inputSearch,n=e.isModalOpen,r=e.largeImageURL;return o.a.createElement("div",{className:"app"},o.a.createElement(h,{onSubmitForm:this.onSubmitForm,onChangeInput:this.handleChangeInput,inputSearch:a}),o.a.createElement(N,{imagesArr:t,onClickBtn:this.changePageNumber,openModal:this.openModalWindow}),n&&o.a.createElement(C,{largeURL:r,closeModal:this.closeModalWindow}))}}]),t}(n.Component);c.a.render(o.a.createElement(R,null),document.getElementById("root"))},6:function(e,t,a){e.exports={overlay:"modal_overlay__2hheX",modal:"modal_modal__1PyRM"}}},[[25,1,2]]]);
//# sourceMappingURL=main.5726ba15.chunk.js.map