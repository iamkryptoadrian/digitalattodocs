(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{SHsC:function(t,e,i){"use strict";i.r(e),i.d(e,"PartnersModule",(function(){return x}));var n=i("ofXK"),o=i("tyNb"),r=i("3Pt+"),a=i("fXoL"),b=i("zxAy"),s=i("K7kd"),c=i("Egam");function l(t,e){1&t&&(a.Nb(0,"div",54),a.uc(1,"Full Name is required !"),a.Mb())}function u(t,e){1&t&&(a.Nb(0,"div",54),a.uc(1,"Email is required !"),a.Mb())}function d(t,e){1&t&&(a.Nb(0,"div",54),a.uc(1,"Email must be a valid email address"),a.Mb())}function m(t,e){1&t&&(a.Nb(0,"div",54),a.uc(1,"Mobile No is required !"),a.Mb())}function p(t,e){1&t&&(a.Nb(0,"div",54),a.uc(1," Company Name is required !"),a.Mb())}function h(t,e){1&t&&(a.Nb(0,"div",54),a.uc(1," Company Type is required !"),a.Mb())}function N(t,e){1&t&&(a.Nb(0,"div",54),a.uc(1,"Country is required !"),a.Mb())}function f(t,e){1&t&&(a.Nb(0,"div",54),a.uc(1,"Motivation to join DigitalattoDoc is required !"),a.Mb())}function g(t,e){1&t&&(a.Nb(0,"div",54),a.uc(1,"Please Select Any One"),a.Mb())}function y(t,e){1&t&&(a.Nb(0,"div",54),a.uc(1,"Please Select Any One"),a.Mb())}const M=function(t){return{"button--loading":t}},v=[{path:"",component:(()=>{class t{constructor(t,e,i,n){this.fb=t,this.CF=e,this.Service=i,this.router=n,this.Submitted=!1,this.SDDL={singleSelection:!0,idField:"item_id",textField:"item_text",enableCheckAll:!1,itemsShowLimit:3,allowSearchFilter:!1,closeDropDownOnSelection:!0},this.Company_Type=[{item_id:"IT",item_text:"IT"},{item_id:"Healthcare",item_text:"Healthcare"},{item_id:"Human Resource (HR)",item_text:"Human Resource (HR)"},{item_id:"Real Estate",item_text:"Real Estate"},{item_id:"Insurance",item_text:"Insurance"},{item_id:"Banking",item_text:"Banking"},{item_id:"Others",item_text:"Others"}]}ngOnInit(){this.CF.GenerateTags({title:"Partners | Digitalattodoc",description:"Get a FREE Consultation by joining Digitalattodoc Partner Program. ",keywords:"Digitalattodoc",image:"",path:"partners"}),this.bindfunctions(),this.PartnerForm=this.fb.group({Name:["",[r.n.required]],Email:["",[r.n.required,r.n.pattern(/^[\w-\.\']{1,}\@([\da-zA-Z-]{1,}\.){1,}[\da-zA-Z-]{2,3}$/)]],Phoneno:["",[r.n.required]],Companyname:["",[r.n.required]],Companytype:["",[r.n.required]],MotivationBlockcats:["",[r.n.required]],Authoriseddigitilatto:["",[r.n.required]],unsubscribe:["",[r.n.required]],Country:["",[r.n.required]]})}onRolesSelect(t){this.companytype=t.item_text}onRolesDeSelect(){this.companytype=null}onSubmit(){if(this.Submitted=!0,!this.PartnerForm.invalid){this.success=!0,this.partnerlist=this.PartnerForm.value;const t={sno:0,name:this.partnerlist.Name,email:this.partnerlist.Email,createddate:new Date,mobile:this.partnerlist.Phoneno,company_name:this.partnerlist.Companyname,company_type:this.companytype,contact_Related:this.partnerlist.MotivationBlockcats,reseller:"true"===this.partnerlist.Authoriseddigitilatto,subscribe:"true"===this.partnerlist.unsubscribe,comm_Type:"partner"};this.Service.Contact_us(t).subscribe(t=>{this.success=!1,t?(this.CF.SwalSuccess("","Thank you for enrolling into our partner\u2019s program , We will get in touch with you shortly."),this.PartnerForm.reset(),this.Submitted=!1):this.CF.SwalWarning("Some of the mandatory fields have not been filled properly , Please fill all the mandatory fields to submit the form","")})}}bindfunctions(){$(document).ready((function(){$(".top").click((function(){$("html, body").animate({scrollTop:$(".middle").offset().top},1e3)}))}))}}return t.\u0275fac=function(e){return new(e||t)(a.Ib(r.c),a.Ib(b.a),a.Ib(s.a),a.Ib(o.b))},t.\u0275cmp=a.Cb({type:t,selectors:[["app-partners"]],decls:136,vars:17,consts:[[1,"page-title-area-","mbldsply",2,"padding-bottom","13px"],[1,"container"],[1,"breadcrumb-nav",2,"display","flex"],["routerLink","/"],["aria-hidden","true",1,"fa","fa-home"],["aria-hidden","true",1,"fa","fa-angle-right"],[1,"active"],[1,"row"],[1,"col-lg-7"],[1,"text-center-"],["data-animation","fadeInUp","data-delay","0.3s",1,"title-tag","partnrtitle"],[1,"title-","mt-4","headings",2,"font-size","40px"],[2,"color","#2d2b6e"],[2,"font-size","16px"],["data-animation","fadeInUp","data-delay","1.1s",1,"main-btn","rounded-btn","icon-right","small-size","mt-3","top"],[1,"fal","fa-long-arrow-right"],[1,"col-lg-5"],["src","assets/img/partnerimg.jpg","height","300"],[1,"conatct-section","section-gap","mt-80","middle"],[1,"row","justify-content-center"],[1,"col-lg-6"],[1,"section-title","white-color","text-center","mb-60"],[1,"title11","headings","text-white"],[1,"contact-form-area"],[1,"contact-thumb","mb-md-gap-50"],["src","assets/img/contact-us.jpg","alt",""],[1,"contact-form"],[3,"formGroup"],[1,"form-title","headings"],[1,"row","mt-3"],[1,"form-group","col-md-6"],[1,"required"],["type","text","placeholder","Full Name","formControlName","Name",1,"form-control","inputstyle",3,"keypress"],["class","invalid",4,"ngIf"],["type","text","placeholder","Email","formControlName","Email",1,"form-control","inputstyle",3,"keypress"],["type","text","placeholder","Mobile","maxlength","15","formControlName","Phoneno",1,"form-control","inputstyle",3,"keypress"],["type","text","placeholder","Company Name","formControlName","Companyname",1,"form-control","inputstyle",3,"keypress"],["formControlName","Companytype",3,"settings","placeholder","data","onSelect","onDeSelect"],["type","text","placeholder","Country","formControlName","Country",1,"form-control","inputstyle",3,"keypress"],["type","text","placeholder","Your motivation to join Digitalattodoc...","formControlName","MotivationBlockcats",1,"form-control","inputstyle"],[1,"col-lg-12","mt-3"],[1,"col-lg-12","para2"],[1,"head2"],["id","group1",1,"row"],[1,"col-lg-3"],["type","radio","value","true","formControlName","Authoriseddigitilatto"],[1,"col-lg-8"],["type","radio","value","false","formControlName","Authoriseddigitilatto"],["type","radio","value","true","formControlName","unsubscribe"],["type","radio","value","false","formControlName","unsubscribe"],[1,"col-12","text-center"],[1,"input-group","textarea-group","mt-30"],[1,"main-btn","small-size","rounded-btn","icon-right",3,"ngClass","click"],[1,"conatct-one-bg",2,"background-image","url(assets/img/contact-bg.jpg)"],[1,"invalid"]],template:function(t,e){1&t&&(a.Nb(0,"section",0),a.Nb(1,"div",1),a.Nb(2,"ul",2),a.Nb(3,"li"),a.Nb(4,"a",3),a.uc(5,"Home "),a.Jb(6,"i",4),a.uc(7," \xa0 "),a.Jb(8,"i",5),a.uc(9," \xa0 "),a.Mb(),a.Mb(),a.Nb(10,"li",6),a.uc(11," partners "),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(12,"section"),a.Nb(13,"div",1),a.Nb(14,"div",7),a.Nb(15,"div",8),a.Nb(16,"div",9),a.Nb(17,"span",10),a.uc(18," PARTNER WITH US "),a.Mb(),a.Nb(19,"h2",11),a.uc(20,"Join the DigitalattoDoc "),a.Jb(21,"br"),a.Nb(22,"span",12),a.uc(23,"Partner Program"),a.Mb(),a.Mb(),a.Nb(24,"div",13),a.uc(25," Join the DigitalattoDoc Community by investing in the next wave of blockchain projects. "),a.Mb(),a.Nb(26,"a",14),a.uc(27," APPLY NOW"),a.Jb(28,"i",15),a.Mb(),a.Mb(),a.Mb(),a.Nb(29,"div",16),a.Jb(30,"img",17),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(31,"section",18),a.Nb(32,"div",1),a.Nb(33,"div",19),a.Nb(34,"div",20),a.Nb(35,"div",21),a.Nb(36,"h2",22),a.uc(37,"Join Us To Get Free Consultations"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(38,"div",23),a.Nb(39,"div",7),a.Nb(40,"div",16),a.Nb(41,"div",24),a.Jb(42,"img",25),a.Mb(),a.Mb(),a.Nb(43,"div",8),a.Nb(44,"div",26),a.Nb(45,"form",27),a.Nb(46,"h3",28),a.uc(47,"Be a Partner With Us....."),a.Mb(),a.Nb(48,"div",29),a.Nb(49,"div",30),a.Nb(50,"label"),a.uc(51,"Full Name"),a.Nb(52,"span",31),a.uc(53,"*"),a.Mb(),a.Mb(),a.Nb(54,"input",32),a.Ub("keypress",(function(t){return e.CF.AlphabetsOnly(t)})),a.Mb(),a.sc(55,l,2,0,"div",33),a.Mb(),a.Nb(56,"div",30),a.Nb(57,"label"),a.uc(58,"Email "),a.Nb(59,"span",31),a.uc(60,"*"),a.Mb(),a.Mb(),a.Nb(61,"input",34),a.Ub("keypress",(function(t){return e.CF.Nospace(t)})),a.Mb(),a.sc(62,u,2,0,"div",33),a.sc(63,d,2,0,"div",33),a.Mb(),a.Nb(64,"div",30),a.Nb(65,"label"),a.uc(66,"Mobile Number "),a.Nb(67,"span",31),a.uc(68,"*"),a.Mb(),a.Mb(),a.Nb(69,"input",35),a.Ub("keypress",(function(t){return e.CF.numberOnly(t)})),a.Mb(),a.sc(70,m,2,0,"div",33),a.Mb(),a.Nb(71,"div",30),a.Nb(72,"label"),a.uc(73,"Company Name "),a.Nb(74,"span",31),a.uc(75,"*"),a.Mb(),a.Mb(),a.Nb(76,"input",36),a.Ub("keypress",(function(t){return e.CF.AlphabetsOnly(t)})),a.Mb(),a.sc(77,p,2,0,"div",33),a.Mb(),a.Nb(78,"div",30),a.Nb(79,"label"),a.uc(80,"Company Type "),a.Nb(81,"span",31),a.uc(82,"*"),a.Mb(),a.Mb(),a.Nb(83,"ng-multiselect-dropdown",37),a.Ub("onSelect",(function(t){return e.onRolesSelect(t)}))("onDeSelect",(function(){return e.onRolesDeSelect()})),a.Mb(),a.sc(84,h,2,0,"div",33),a.Mb(),a.Nb(85,"div",30),a.Nb(86,"label"),a.uc(87,"Country"),a.Nb(88,"span",31),a.uc(89,"*"),a.Mb(),a.Mb(),a.Nb(90,"input",38),a.Ub("keypress",(function(t){return e.CF.AlphabetsOnly(t)})),a.Mb(),a.sc(91,N,2,0,"div",33),a.Mb(),a.Nb(92,"div",30),a.Nb(93,"label"),a.uc(94,"Motivation to join DigitalattoDoc "),a.Nb(95,"span",31),a.uc(96,"*"),a.Mb(),a.Mb(),a.Jb(97,"input",39),a.sc(98,f,2,0,"div",33),a.Mb(),a.Nb(99,"div",40),a.Nb(100,"div",7),a.Nb(101,"div",41),a.Nb(102,"b",42),a.uc(103," Are you interested in becoming an Authorised reseller for DigitalattoDoc? "),a.Nb(104,"span",31),a.uc(105,"*"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(106,"fieldset",43),a.Nb(107,"div",44),a.Jb(108,"input",45),a.uc(109," Yes "),a.Mb(),a.Nb(110,"div",46),a.Jb(111,"input",47),a.uc(112," No "),a.Mb(),a.Mb(),a.sc(113,g,2,0,"div",33),a.Mb(),a.Nb(114,"div",40),a.Nb(115,"div",7),a.Nb(116,"div",41),a.Nb(117,"b",42),a.uc(118," DigitalattoDoc may use the contact information you provide to us to contact you about our products and services. By clicking \u201csubmit\u201d below you consent to receive such communications. You may unsubscribe from these communications at any time."),a.Nb(119,"span",31),a.uc(120,"*"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(121,"fieldset",43),a.Nb(122,"div",44),a.Jb(123,"input",48),a.uc(124," I accept "),a.Mb(),a.Nb(125,"div",46),a.Jb(126,"input",49),a.uc(127," I don't accept "),a.Mb(),a.Mb(),a.sc(128,y,2,0,"div",33),a.Mb(),a.Nb(129,"div",50),a.Nb(130,"div",51),a.Nb(131,"button",52),a.Ub("click",(function(){return e.onSubmit()})),a.Nb(132,"span"),a.uc(133,"Send Message "),a.Jb(134,"i",15),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Jb(135,"div",53),a.Mb()),2&t&&(a.xb(45),a.bc("formGroup",e.PartnerForm),a.xb(10),a.bc("ngIf",e.Submitted&&e.PartnerForm.get("Name").hasError("required")),a.xb(7),a.bc("ngIf",e.Submitted&&e.PartnerForm.get("Email").hasError("required")),a.xb(1),a.bc("ngIf",e.Submitted&&e.PartnerForm.get("Email").hasError("pattern")),a.xb(7),a.bc("ngIf",e.Submitted&&e.PartnerForm.get("Phoneno").hasError("required")),a.xb(7),a.bc("ngIf",e.Submitted&&e.PartnerForm.get("Companyname").hasError("required")),a.xb(6),a.bc("settings",e.SDDL)("placeholder","Company Type")("data",e.Company_Type),a.xb(1),a.bc("ngIf",e.Submitted&&e.PartnerForm.get("Companytype").hasError("required")),a.xb(7),a.bc("ngIf",e.Submitted&&e.PartnerForm.get("Country").hasError("required")),a.xb(7),a.bc("ngIf",e.Submitted&&e.PartnerForm.get("MotivationBlockcats").hasError("required")),a.xb(15),a.bc("ngIf",e.Submitted&&e.PartnerForm.get("Authoriseddigitilatto").hasError("required")),a.xb(15),a.bc("ngIf",e.Submitted&&e.PartnerForm.get("unsubscribe").hasError("required")),a.xb(3),a.bc("ngClass",a.fc(15,M,e.success)))},directives:[o.d,r.o,r.j,r.e,r.b,r.i,r.d,n.k,r.g,c.a,r.l,n.i],styles:[".partnrtitle[_ngcontent-%COMP%]{color:#2d2b6e;font-size:.875em;font-weight:900;text-transform:uppercase;line-height:1.5em;letter-spacing:4.2px}.required[_ngcontent-%COMP%]{color:#ff4500}.para2[_ngcontent-%COMP%]{line-height:16px;margin-bottom:5px}.head2[_ngcontent-%COMP%]{color:#000;font-size:13px}"]}),t})()}];let C=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(e){return new(e||t)},imports:[[o.e.forChild(v)],o.e]}),t})(),x=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(e){return new(e||t)},imports:[[n.b,C,r.m,r.f,o.e,c.b.forRoot()]]}),t})()}}]);