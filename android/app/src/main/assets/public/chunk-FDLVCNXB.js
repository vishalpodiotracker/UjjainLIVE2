import{c as m}from"./chunk-34HZ5DVH.js";import{b as r,f as l,g as c,i as p,j as h}from"./chunk-LIBSQD2J.js";import{g as o}from"./chunk-AHMUXBFN.js";var x=":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--side-min-width:270px;--side-max-width:28%}",u=x,v=":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--side-min-width:270px;--side-max-width:28%}",y=v,b="split-pane-main",f="split-pane-side",w={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},g=class{constructor(e){r(this,e),this.ionSplitPaneVisible=h(this,"ionSplitPaneVisible",7),this.visible=!1,this.contentId=void 0,this.disabled=!1,this.when=w.lg}visibleChanged(e){this.ionSplitPaneVisible.emit({visible:e})}isVisible(){return o(this,null,function*(){return Promise.resolve(this.visible)})}connectedCallback(){return o(this,null,function*(){typeof customElements<"u"&&customElements!=null&&(yield customElements.whenDefined("ion-split-pane")),this.styleMainElement(),this.updateState()})}disconnectedCallback(){this.rmL&&(this.rmL(),this.rmL=void 0)}updateState(){if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled){this.visible=!1;return}let e=this.when;if(typeof e=="boolean"){this.visible=e;return}let n=w[e]||e;if(n.length===0){this.visible=!1;return}let i=s=>{this.visible=s.matches},t=window.matchMedia(n);t.addListener(i),this.rmL=()=>t.removeListener(i),this.visible=t.matches}styleMainElement(){let e=this.contentId,n=this.el.children,i=this.el.childElementCount,t=!1;for(let s=0;s<i;s++){let a=n[s],d=e!==void 0&&a.id===e;if(d)if(t){console.warn("split pane cannot have more than one main node");return}else S(a,d),t=!0}t||console.warn("split pane does not have a specified main node")}render(){let e=m(this);return l(c,{key:"1ca0b0299d03605bb358112ca56cbafbe58f00f5",class:{[e]:!0,[`split-pane-${e}`]:!0,"split-pane-visible":this.visible}},l("slot",{key:"abe231361727ae7fc63edd592a4490caac1909fb"}))}get el(){return p(this)}static get watchers(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}}},S=(e,n)=>{let i,t;n?(i=b,t=f):(i=f,t=b);let s=e.classList;s.add(i),s.remove(t)};g.style={ios:u,md:y};export{g as ion_split_pane};
