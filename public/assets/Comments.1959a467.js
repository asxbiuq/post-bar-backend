import{g as $,h as z,o,c as u,i as O,v as P,j as e,k as X,n as Z,b as R,e as M,F as w,_ as N,l as ee,t as B,a as b,u as te,m as A,p as _,q as ne,s as oe,x as F,y as T,z as I,w as se,A as L,B as ae,C,D as g}from"./index.1eea5511.js";const le=["onSubmit"],re=e("fieldset",{class:"py-4"},[e("input",{type:"submit",value:"\u8BC4\u8BBA",class:"px-4 py-1 bg-sky-600 bg-opacity-[90%] text-white cursor-pointer rounded-2xl"}),e("input",{type:"reset",value:"\u53D6\u6D88",class:"px-4 py-1 bg-white bg-opacity-[90%] border ml-3 cursor-pointer rounded-2xl"})],-1),V=$({__name:"CommentBox",emits:["submit"],setup(a,{emit:n}){let t=z("");const h=()=>{n("submit",t.value),t.value=""};return(s,l)=>(o(),u("form",{class:"grid",onSubmit:X(h,["prevent"])},[O(e("textarea",{"onUpdate:modelValue":l[0]||(l[0]=f=>t.value=f),name:"comment",id:"",placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u8BC4\u8BBA",class:"bg-[#d6d6cb] p-2 rounded bg-opacity-[30%] h-[10rem] border-sky-300 border-[2px] focus-visible:outline-none focus-visible:border-sky-500"},null,512),[[P,t.value]]),re],40,le))}}),ce=$({__name:"ReplyBox",emits:["submit"],setup(a,{emit:n}){const t=z(!1);return(h,s)=>(o(),u(w,null,[e("button",{class:Z(["pt-4 text-blue-600",[t.value?"pb-2":"pb-10"]]),onClick:s[0]||(s[0]=l=>t.value=!t.value)}," \u56DE\u590D ",2),t.value?(o(),R(V,{key:0,class:"mb-4",onSubmit:s[1]||(s[1]=l=>{n("submit",l),t.value=!1})})):M("",!0)],64))}}),ue={},ie={class:"pl-8 border-l-2 border-gray-200"};function me(a,n){return o(),u("div",ie,[ee(a.$slots,"default")])}var de=N(ue,[["render",me]]);const _e={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},pe=e("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor"},null,-1),ve=e("circle",{cx:"12",cy:"5",r:"2",fill:"currentColor"},null,-1),he=e("circle",{cx:"12",cy:"19",r:"2",fill:"currentColor"},null,-1),fe=[pe,ve,he];function ye(a,n){return o(),u("svg",_e,fe)}var xe={name:"eva-more-vertical-fill",render:ye};const be={class:"flex"},Ce=["src"],ge={class:"text-gray-600 text-sm"},we={class:"ml-auto"},$e={class:"p-dropdown p-dropdown-left flex"},Be={tabindex:"0",class:"m-1 cursor-pointer"},Re={class:"text-gray-600 py-4"},De=$({__name:"CommentItem",props:{user:{default:"\u533F\u540D\u7528\u6237"},avatar:{default:"https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg"},time:{default:"\u672A\u77E5\u65F6\u95F4"},content:{default:""}},emits:["deleteComment"],setup(a,{emit:n}){const t=()=>{n("deleteComment")};return(h,s)=>{const l=xe;return o(),u(w,null,[e("div",be,[e("img",{src:a.avatar,alt:"",class:"w-12 h-12 mr-4 rounded-full"},null,8,Ce),e("div",null,[e("p",null,B(a.user),1),e("p",ge,B(a.time),1)]),e("span",we,[e("div",$e,[e("label",Be,[b(l)]),e("ul",{tabindex:"0",class:"p-dropdown-content p-menu shadow relative truncate top-20"},[e("li",null,[e("a",{class:"py-2 hover:bg-red-400 bg-slate-200",onClick:t},"\u5220\u9664")])])])])]),e("p",Re,B(a.content),1)],64)}}}),ke={},Se={class:"border-b border-gray-300 my-2 mb-4"};function Ae(a,n){return o(),u("div",Se)}var Fe=N(ke,[["render",Ae]]);const Te={class:"p-4 min-h-screen w-[80vw] max-w-3xl"},Ie={class:"max-w-screen-xl mx-auto p-8 rounded-xl shadow-2xl bg-opacity-25"},Le=e("h2",{class:"text-3xl my-6"},"\u8BC4\u8BBA",-1),ze=$({__name:"Comments",async setup(a){let n,t;const h=new URL("/public/assets/default_avatar.jpg",self.location).href;let s;const l=te(),f=A();_(f,"replies"),_(f,"getReplies");const j=_(f,"addReply"),E=_(f,"deleteReply"),y=ne(),D=_(y,"comments"),U=_(y,"addComment"),q=_(y,"deleteComment"),k=_(y,"getComments"),H=_(y,"clearComment"),{clearReplies:Q}=A();let S=oe();H.value(),Q(),l.params.id&&typeof l.params.id=="string"&&!D.value.length?(s=l.params.id,[n,t]=F(()=>k.value(s)),await n,t(),S.value=!0):(s=ae().value.postId,[n,t]=F(()=>k.value(s)),await n,t(),S.value=!0);const W=async r=>{const{open:v,close:i}=C();v();try{await U.value(r,s)}catch(m){const{open:c}=g();c(m)}r="",i()},Y=async(r,v)=>{const{open:i,close:m}=C();i();try{await q.value(r)}catch(c){const{open:x}=g();x(c)}m()},G=async(r,v)=>{const{open:i,close:m}=C();i();try{await j.value(r,v)}catch(c){const{open:x}=g();x(c)}r="",m()},J=async r=>{const{open:v,close:i}=C();v();try{await E.value(r)}catch(m){const{open:c}=g();c(m)}i()};return(r,v)=>{const i=V,m=Fe,c=De,x=de,K=ce;return o(),u("main",Te,[e("div",Ie,[Le,b(i,{onSubmit:W}),b(m),(o(!0),u(w,null,T(D.value,d=>(o(),u("div",{key:d._id},[b(c,{user:d.creator,avatar:I(h),time:d.time,content:d.content,onDeleteComment:p=>Y(d._id,d.content)},null,8,["user","avatar","time","content","onDeleteComment"]),d.replies?(o(),R(x,{key:0},{default:se(()=>[(o(!0),u(w,null,T(d.replies,p=>(o(),R(c,{key:p._id,user:p.creator,avatar:I(h),time:p.time,content:p.content,onDeleteComment:Me=>J(p)},null,8,["user","avatar","time","content","onDeleteComment"]))),128))]),_:2},1024)):M("",!0),b(K,{onSubmit:p=>G(p,d._id)},null,8,["onSubmit"])]))),128))])])}}});typeof L=="function"&&L(ze);export{ze as default};
