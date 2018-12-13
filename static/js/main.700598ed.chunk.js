(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},28:function(e,t,a){},32:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(16),s=a.n(n),l=(a(24),a(26),a(28),a(43)),i=a(45),o=a(44),m=a(10),p=a.n(m),u=a(11),f=a(5),h=a(6),E=a(8),d=a(7),v=a(9),b=(a(32),function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{onSubmit:e.getRecipe,style:{marginBottom:"2rem"}},r.a.createElement("input",{className:"form__input",type:"text",name:"recipeName",placeholder:"Search for recipes"}),r.a.createElement("button",{className:"form__button"},"Search")))}),g=a(42),w=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},e.recipes&&e.recipes.map(function(e){return r.a.createElement("div",{key:e.title,className:"col-md-4",style:{marginBottom:"2rem"}},r.a.createElement("div",{className:"recipes__box"},r.a.createElement("img",{className:"recipe__box-img",src:e.image_url,alt:e.title}),r.a.createElement("div",{className:"recipe__text"},r.a.createElement("h5",{className:"recipes__title"},e.title.length<20?"".concat(e.title):"".concat(e.title.substring(0,25),"...")),r.a.createElement("p",{className:"recipes__subtitle"},"Publisher Name: ",r.a.createElement("span",null,e.publisher))),r.a.createElement("button",{className:"recipe_buttons"},r.a.createElement(g.a,{to:{pathname:"/recipe/".concat(e.recipe_id),state:{recipe:e.title}}},"View Recipe"))))})))},N=function(e){function t(){return Object(f.a)(this,t),Object(E.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"Container-wrapper"},r.a.createElement("div",{className:"mb-5 flex-center"},r.a.createElement(g.a,{to:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",className:"social"},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement(g.a,{to:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer",className:"social"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement(g.a,{to:"https://www.google.com",target:"_blank",rel:"noopener noreferrer",className:"social"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement(g.a,{to:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"social"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement(g.a,{to:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",className:"social"},r.a.createElement("i",{className:"fa fa-instagram"})))),r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement("div",{className:"Container-article"},"\xa9 ",(new Date).getFullYear()," Copyright:"," "," HC WEBD All Right Reserved")))}}]),t}(c.Component),_="df2f3c8225c4f5c4daf847e08dd0f1d7",k=function(e){function t(){var e,a;Object(f.a)(this,t);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(a=Object(E.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={recipes:[]},a.getRecipe=function(){var e=Object(u.a)(p.a.mark(function e(t){var c,r,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.elements.recipeName.value,t.preventDefault(),e.next=4,fetch("https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=".concat(_,"&q=").concat(c,"&count=12"));case 4:return r=e.sent,e.next=7,r.json();case 7:n=e.sent,a.setState({recipes:n.recipes}),console.log(a.state.recipes);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=function(){var e=localStorage.getItem("recipes"),t=JSON.parse(e);a.setState({recipes:t})},a.componentDidUpdate=function(){var e=JSON.stringify(a.state.recipes);localStorage.setItem("recipes",e)},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"LOGO"},r.a.createElement("h1",{className:"App-title"},r.a.createElement("a",{href:" "},"RECIPES",r.a.createElement("span",null))))),r.a.createElement(b,{getRecipe:this.getRecipe}),r.a.createElement(w,{recipes:this.state.recipes}),r.a.createElement(N,null))}}]),t}(c.Component),y="df2f3c8225c4f5c4daf847e08dd0f1d7",O=function(e){function t(){var e,a;Object(f.a)(this,t);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(a=Object(E.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={activeRecipe:[]},a.componentDidMount=Object(u.a)(p.a.mark(function e(){var t,c,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.state.recipe,e.next=3,fetch("https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=".concat(y,"&q=").concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,a.setState({activeRecipe:r.recipes[0]}),console.log(a.state.activeRecipe);case 9:case"end":return e.stop()}},e,this)})),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.activeRecipe;return r.a.createElement("div",{className:"container"},0!==this.state.activeRecipe.length&&r.a.createElement("div",{className:"active-recipe"},r.a.createElement("img",{className:"active-recipe__img",src:e.image_url,alt:e.title}),r.a.createElement("h3",{className:"active-recipe__title"},e.title),r.a.createElement("h4",{className:"active-recipe__publisher"},"Publisher: ",r.a.createElement("span",null,e.publisher)),r.a.createElement("p",{className:"active-recipe__website"}," Restaurant Website:",r.a.createElement("span",null,r.a.createElement(g.a,{to:e.publisher_url},e.publisher_url))),r.a.createElement("button",{className:"active-recipe__button"},r.a.createElement(g.a,{to:"/"},"Back"))))}}]),t}(r.a.Component),j=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,null,r.a.createElement(o.a,{path:"/",component:k,exact:!0}),r.a.createElement(o.a,{path:"/recipe/:id",component:O})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.700598ed.chunk.js.map