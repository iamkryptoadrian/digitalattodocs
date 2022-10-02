(window.webpackJsonp = window.webpackJsonp || []).push([
    [20], {
        "99Un": function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "HomeModule", (function() {
                return N
            }));
            var i = a("ofXK"),
                n = a("tyNb"),
                o = a("3Pt+"),
                c = a("fXoL"),
                b = a("zxAy"),
                r = a("K7kd");

            function s(e, t) {
                1 & e && (c.Nb(0, "div", 183), c.uc(1, "Email is required !"), c.Mb())
            }

            function l(e, t) {
                1 & e && (c.Nb(0, "div", 183), c.uc(1, "Email must be a valid email address"), c.Mb())
            }
            const d = function() {
                    return ["/custom-solutions"]
                },
                u = function() {
                    return ["/blockchain-services"]
                },
                g = function() {
                    return ["/certificates-digitalatto"]
                },
                p = function(e) {
                    return {
                        "button--loading": e
                    }
                },
                h = function() {
                    return ["/contact"]
                },
                M = [{
                    path: "",
                    component: (() => {
                        class e {
                            constructor(e, t, a, i) {
                                this.fb = e, this.CF = t, this.Service = a, this.router = i, this.Submitted = !1
                            }
                            ngOnInit() {
                                this.CF.GenerateTags({
                                    title: "Digitalattodoc | World\u2019s Leading Blockchain Technology Provider",
                                    description: "Digitalattodoc is dedicated to providing you with a genuine and unambiguous digital solution and terminating counterfeit products and fraud with blockchain technology.",
                                    keywords: "block chain in education sector, blockchain in education, blockchain for education, how to implement blockchain, new blockchain technology, how can blockchain be used, blockchain implementation, how to implement blockchain technology, blockchain services, blockchain as a service, blockchain software, block chain, crypto technology, blockchain service, blockchain technology, blockchain service providers, blockchain solutions, chain blockchain, blockchain solution, blockchain providers, blockchain ledger, blockchain solution providers, blockchain company.",
                                    image: "",
                                    path: ""
                                }), this.bindslider(), this.Subscribeform = this.fb.group({
                                    Email: ["", [o.n.required, o.n.pattern(/^[\w-\.\']{1,}\@([\da-zA-Z-]{1,}\.){1,}[\da-zA-Z-]{2,3}$/)]]
                                })
                            }
                            onSubmit() {
                                if (this.Submitted = !0, !this.Subscribeform.invalid) {
                                    this.success = !0;
                                    const e = {
                                        sno: 0,
                                        email: this.Subscribeform.get("Email").value,
                                        createddate: new Date,
                                        comm_Type: "Subscribe"
                                    };
                                    this.Service.Contact_us(e).subscribe(e => {
                                        this.success = !1, e ? (this.CF.SwalSuccess("", "Thank you, Subscribe Successfully."), this.Subscribeform.reset(), this.Submitted = !1) : this.CF.SwalWarning("Some of the mandatory fields have not been filled properly , Please fill all the mandatory fields to submit the form", "")
                                    })
                                }
                            }
                            bindslider() {
                                $(document).ready((function() {
                                    ! function() {
                                        var e = $(".banner-slider-active");

                                        function t(e) {
                                            e.each((function() {
                                                var e = $(this),
                                                    t = e.data("delay"),
                                                    a = "animated " + e.data("animation");
                                                e.css({
                                                    "animation-delay": t,
                                                    "-webkit-animation-delay": t
                                                }), e.addClass(a).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function() {
                                                    e.removeClass(a)
                                                }))
                                            }))
                                        }
                                        e.on("init", (function(e, a) {
                                            t($(".single-banner:first-child").find("[data-animation]"))
                                        })), e.on("beforeChange", (function(e, a, i, n) {
                                            t($('.single-banner[data-slick-index="' + n + '"]').find("[data-animation]"))
                                        })), e.slick({
                                            autoplay: !0,
                                            autoplaySpeed: 6e3,
                                            dots: !1,
                                            fade: !0,
                                            arrows: !0,
                                            prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
                                            nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>'
                                        })
                                    }(), $(".video-popup").magnificPopup({
                                        type: "iframe"
                                    })
                                })), $(window).ready((function() {
                                    setTimeout((function() {
                                        $("#modal-subscribe").modal("show")
                                    }), 3e3)
                                })), $("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
                                    $(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus")
                                })
                            }
                        }
                        return e.\u0275fac = function(t) {
                            return new(t || e)(c.Ib(o.c), c.Ib(b.a), c.Ib(r.a), c.Ib(n.b))
                        }, e.\u0275cmp = c.Cb({
                            type: e,
                            selectors: [
                                ["app-home"]
                            ],
                            decls: 522,
                            vars: 34,
                            consts: [
                                [1, "banner-slider", "banner-slider-one", "banner-slider-active"],
                                [1, "single-banner"],
                                [1, "container"],
                                [1, "row", "align-items-center"],
                                [1, "col-lg-7"],
                                [1, "banner-text"],
                                [1, "banner-content"],
                                ["data-animation", "fadeInLeft", "data-delay", "0.6s", 1, "title"],
                                [1, "bcolor"],
                                ["data-animation", "fadeInLeft", "data-delay", ".9s"],
                                ["data-animation", "fadeInUp", "data-delay", "1.1s", 1, "main-btn", "rounded-btn", "icon-right", "small-size", 3, "routerLink"],
                                [1, "fal", "fa-long-arrow-right"],
                                [1, "col-lg-5", "d-none", "d-lg-block"],
                                ["data-animation", "fadeInRight", "data-delay", "0.5s", 1, "banner-img"],
                                ["src", "assets/img/banner/banner-img.webp", "alt", "Blockchain Solutions Banner"],
                                ["data-animation", "fadeInLeft", "data-delay", "0.12s", 1, "title"],
                                ["data-animation", "fadeInLeft", "data-delay", ".18s"],
                                ["data-animation", "fadeInUp", "data-delay", "0.1s", 1, "main-btn", "rounded-btn", "icon-right", "small-size", 3, "routerLink"],
                                ["data-animation", "fadeInRight", "data-delay", "0.10s", 1, "banner-img"],
                                ["src", "assets/img/banner/banner-img1.webp", "alt", "Blockchain as a service Banner"],
                                [1, "service-section", "section-gap", "why-choose-area1"],
                                [1, "section-title", "text-center", "mb-30"],
                                [1, "title"],
                                [1, "row", "service-items"],
                                [1, "col-lg-4", "col-md-6", "col-sm-6"],
                                [1, "service-item", "color-2", "text-center", "mt-30"],
                                [1, "single-choose", "text-center", "mt-10"],
                                [1, "icon-box", "icon"],
                                [1, "rotate-dot"],
                                [1, "fal", "fa-file-alt"],
                                [3, "routerLink"],
                                [1, "rbtn", "mt-5"],
                                [1, "service-item", "color-1", "text-center", "mt-30"],
                                [1, "fal", "fa-user-cog"],
                                [1, "service-item", "color-3", "text-center", "mt-30"],
                                [1, "fa", "fa-wrench"],
                                [1, "feature-section", "section-gap", "soft-blue-bg"],
                                [1, "row", "justify-content-center", "align-items-center"],
                                [1, "col-lg-6", "col-md-10"],
                                [1, "tile-gallery-one"],
                                [1, "img-one"],
                                ["src", "assets/img/tile-gallery/tile-gallery-01.webp", "alt", "Blockchain is a digital ledger Image"],
                                [1, "img-two", "text-right"],
                                ["src", "assets/img/tile-gallery/tile-gallery-02.webp", "alt", "Blockchain Custom Solutions Image"],
                                [1, "feature-text-block", "mt-md-gap-60"],
                                [1, "section-title", "mb-20"],
                                [1, "title-tag1", "bcolor"],
                                [1, "title1"],
                                ["align", "justify", 1, "lh30", "mb-4"],
                                ["align", "justify", 1, "lh30"],
                                [1, "video-cta", 2, "background-image", "url(assets/img/cta-bg/video-cta-bg1.webp)"],
                                [1, "row", "align-items-center", "justify-content-between"],
                                [1, "col-xl-9", "col-lg-10"],
                                [1, "video-cta-content"],
                                [1, "col-auto"],
                                [1, "video-cta-play"],
                                ["href", "https://www.youtube.com/watch?v=fl-0-kYbgPI", 1, "video-popup"],
                                [1, "fas", "fa-play"],
                                [1, "service-section-two", "section-gap"],
                                [1, "row", "service-items", "justify-content-center"],
                                [1, "col-lg-4", "col-md-6", "col-sm-10"],
                                [1, "service-item-two", "color-1", "mt-30", "text-center"],
                                [1, "icon", "swing"],
                                [1, "fal", "fa-users"],
                                [1, "service-item-two", "color-2", "mt-30", "text-center"],
                                [1, "fal", "fa-medkit"],
                                [1, "service-item-two", "color-3", "mt-30", "text-center"],
                                [1, "fal", "fa-shopping-cart"],
                                [1, "fal", "fa-globe"],
                                [1, "fal", "fa-building"],
                                [1, "service-item-two", "color-4", "mt-30", "text-center"],
                                [1, "fal", "fa-id-card"],
                                [1, "intro-video-area", 2, "background-image", "url(assets/img/intro-video-bg1.webp)"],
                                [1, "row", "align-items-center", "justify-content-center"],
                                [1, "col-lg-7", "col-md-11"],
                                [1, "intro-video-content"],
                                [1, "text-2", "lh30", "mb-5"],
                                [1, "text-2", "lh30"],
                                [1, "col-lg-5", "col-md-9"],
                                [1, "intro-thumb", "mt-md-gap-60"],
                                ["src", "assets/img/intro-thumb1.webp", "alt", "Our Expertise"],
                                [1, "whu-section", "section-gap", "soft-blue-bg"],
                                [1, "row", "justify-content-center", "align-content-center"],
                                [1, "col-lg-6", "col-md-10", "order-lg-2"],
                                [1, "tile-gallery-two", "mb-md-gap-50"],
                                ["src", "assets/img/tile-gallery/choose-thumb-1.webp", "alt", "CONSULTATION"],
                                ["src", "assets/img/tile-gallery/choose-thumb-2.webp", "alt", "STRATEGIZE"],
                                [1, "col-lg-6", "col-md-10", "order-lg-1"],
                                [1, "section-title", "mb-50"],
                                [1, "feature-list"],
                                [1, "wow", "fadeInUp"],
                                [1, "pricing-section-two", "section-gap", "secondary-bg"],
                                [1, "col-lg-6", "col-md-6"],
                                [1, "section-title", "with-right-border", "white-color", "mb-50"],
                                [1, "title-tag"],
                                ["id", "pricingTwoTabContent1", 1, "tab-content"],
                                ["id", "monthly-item-2", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"],
                                [1, "row", "justify-content-center"],
                                [1, "col-lg-3", "col-md-6", "col-sm-8", "mt-30"],
                                [1, "pricing-plan-item", "dark-style", 2, "background-image", "url(assets/img/plans-thumb.webp)"],
                                [1, "plan-name"],
                                [1, "price", "flagicon"],
                                ["src", "assets/img/united-kingdom.png", "alt", "United Kingdom Flag"],
                                [1, "ol"],
                                ["src", "assets/img/united-states.png", "alt", "United States Flag"],
                                ["src", "assets/img/united-arab-emirates.png", "alt", "United Arab Emirates Flag"],
                                ["src", "assets/img/qatar.png", "alt", "Qatar Flag"],
                                [1, "subsribe-bg"],
                                [1, "col-xl-6", "col-lg-7"],
                                [1, "section-title", "text-center", "mb-40"],
                                [1, "stitle", "mb-10"],
                                [1, "col-12"],
                                [1, "contact-form"],
                                [3, "formGroup"],
                                [1, "row"],
                                [1, "col-md-7", "offset-md-2"],
                                [1, "input-group", "mt-30"],
                                ["type", "text", "placeholder", "Your Email", "formControlName", "Email", 1, "stextbox", 3, "keypress"],
                                [1, "icon"],
                                [1, "fal", "fa-user"],
                                ["class", "invalid", 4, "ngIf"],
                                [1, "col-md-1"],
                                [1, "input-group", "textarea-group", "mt-30"],
                                [1, "main-btn", "small-size", "ml-auto", "mr-auto", "lh30", 3, "ngClass", "click"],
                                [1, "faq-bg"],
                                [1, "col-lg-12", "col-md-12"],
                                [1, "col-lg-12"],
                                ["id", "accordion", 1, "myaccordion"],
                                [1, "card", 2, "margin-bottom", "6px"],
                                ["id", "headingOne", 1, "card-header"],
                                [1, "mb-0"],
                                ["data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "d-flex", "align-items-center", "justify-content-between", "btn", "btn-link"],
                                [1, "fa-stack", "fa-sm"],
                                [1, "fas", "fa-circle", "fa-stack-2x"],
                                [1, "fas", "fa-minus", "fa-stack-1x", "fa-inverse"],
                                ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordion", 1, "collapse", "show"],
                                [1, "card-body"],
                                ["id", "headingTwo", 1, "card-header"],
                                ["data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "d-flex", "align-items-center", "justify-content-between", "btn", "btn-link", "collapsed"],
                                [1, "fa-stack", "fa-2x"],
                                [1, "fas", "fa-plus", "fa-stack-1x", "fa-inverse"],
                                ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-parent", "#accordion", 1, "collapse"],
                                ["id", "headingThree", 1, "card-header"],
                                ["data-toggle", "collapse", "data-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "d-flex", "align-items-center", "justify-content-between", "btn", "btn-link", "collapsed"],
                                ["id", "collapseThree", "aria-labelledby", "headingThree", "data-parent", "#accordion", 1, "collapse"],
                                [2, "color", "blue", "cursor", "pointer", 3, "routerLink"],
                                ["id", "heading4", 1, "card-header"],
                                ["data-toggle", "collapse", "data-target", "#collapse4", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "d-flex", "align-items-center", "justify-content-between", "btn", "btn-link", "collapsed"],
                                ["id", "collapse4", "aria-labelledby", "heading4", "data-parent", "#accordion", 1, "collapse"],
                                [2, "color", "blue", 3, "routerLink"],
                                ["id", "heading5", 1, "card-header"],
                                ["data-toggle", "collapse", "data-target", "#collapse5", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "d-flex", "align-items-center", "justify-content-between", "btn", "btn-link", "collapsed"],
                                ["id", "collapse5", "aria-labelledby", "heading5", "data-parent", "#accordion", 1, "collapse"],
                                ["id", "heading6", 1, "card-header"],
                                ["data-toggle", "collapse", "data-target", "#collapse6", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "d-flex", "align-items-center", "justify-content-between", "btn", "btn-link", "collapsed"],
                                ["id", "collapse6", "aria-labelledby", "heading6", "data-parent", "#accordion", 1, "collapse"],
                                ["id", "heading7", 1, "card-header"],
                                ["data-toggle", "collapse", "data-target", "#collapse7", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "d-flex", "align-items-center", "justify-content-between", "btn", "btn-link", "collapsed"],
                                ["id", "collapse7", "aria-labelledby", "heading7", "data-parent", "#accordion", 1, "collapse"],
                                ["id", "heading8", 1, "card-header"],
                                ["data-toggle", "collapse", "data-target", "#collapse8", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "d-flex", "align-items-center", "justify-content-between", "btn", "btn-link", "collapsed"],
                                ["id", "collapse8", "aria-labelledby", "heading8", "data-parent", "#accordion", 1, "collapse"],
                                ["id", "heading9", 1, "card-header"],
                                ["data-toggle", "collapse", "data-target", "#collapse9", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "d-flex", "align-items-center", "justify-content-between", "btn", "btn-link", "collapsed"],
                                ["id", "collapse9", "aria-labelledby", "heading9", "data-parent", "#accordion", 1, "collapse"],
                                ["id", "heading10", 1, "card-header"],
                                ["data-toggle", "collapse", "data-target", "#collapse10", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "d-flex", "align-items-center", "justify-content-between", "btn", "btn-link", "collapsed"],
                                ["id", "collapse10", "aria-labelledby", "heading10", "data-parent", "#accordion", 1, "collapse"],
                                ["id", "heading11", 1, "card-header"],
                                ["data-toggle", "collapse", "data-target", "#collapse11", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "d-flex", "align-items-center", "justify-content-between", "btn", "btn-link", "collapsed"],
                                ["id", "collapse11", "aria-labelledby", "heading11", "data-parent", "#accordion", 1, "collapse"],
                                ["id", "heading12", 1, "card-header"],
                                ["data-toggle", "collapse", "data-target", "#collapse12", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "d-flex", "align-items-center", "justify-content-between", "btn", "btn-link", "collapsed"],
                                ["id", "collapse12", "aria-labelledby", "heading12", "data-parent", "#accordion", 1, "collapse"],
                                ["id", "heading13", 1, "card-header"],
                                ["data-toggle", "collapse", "data-target", "#collapse13", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "d-flex", "align-items-center", "justify-content-between", "btn", "btn-link", "collapsed"],
                                ["id", "collapse13", "aria-labelledby", "heading13", "data-parent", "#accordion", 1, "collapse"],
                                ["id", "heading14", 1, "card-header"],
                                ["data-toggle", "collapse", "data-target", "#collapse14", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "d-flex", "align-items-center", "justify-content-between", "btn", "btn-link", "collapsed"],
                                ["id", "collapse14", "aria-labelledby", "heading14", "data-parent", "#accordion", 1, "collapse"],
                                ["id", "heading15", 1, "card-header"],
                                ["data-toggle", "collapse", "data-target", "#collapse15", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "d-flex", "align-items-center", "justify-content-between", "btn", "btn-link", "collapsed"],
                                ["id", "collapse15", "aria-labelledby", "heading15", "data-parent", "#accordion", 1, "collapse"],
                                [1, "invalid"]
                            ],
                            template: function(e, t) {
                                if (1 & e) {
                                    c.Nb(0, "section", 0), c.Nb(1, "div", 1), c.Nb(2, "div", 2), c.Nb(3, "div", 3), c.Nb(4, "div", 4), c.Nb(5, "div", 5), c.Nb(6, "div", 6), c.Nb(7, "h2", 7), c.Nb(8, "span", 8), c.uc(9, " Customized Blockchain Solutions for your business"), c.Mb(), c.Mb(), c.Nb(10, "p", 9), c.uc(11, " We work closely with your organization to build apps, smart contracts and functionality as per your requirements. Our ready-to-go BaaS platform (Blockchain as a Service) launches your blockchain solution swiftly. "), c.Mb(), c.Nb(12, "a", 10), c.uc(13, " Get Started "), c.Jb(14, "i", 11), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(15, "div", 12), c.Nb(16, "div", 13), c.Jb(17, "img", 14), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(18, "div", 1), c.Nb(19, "div", 2), c.Nb(20, "div", 3), c.Nb(21, "div", 4), c.Nb(22, "div", 5), c.Nb(23, "div", 6), c.Nb(24, "h1", 15), c.Nb(25, "span", 8), c.uc(26, " Blockchain as a service "), c.Mb(), c.Mb(), c.Nb(27, "p", 16), c.uc(28, " Enterprise Ready \u2013 Scalable, Secure, and Tested Platform for Rapid Prototyping and easy Production Deployment . Save time and reduce costs deploying your Blockchain apps, smart contracts, and functions faster and better. Use our Cloud or BYOC (Bring your own cloud). "), c.Mb(), c.Nb(29, "a", 17), c.uc(30, " Get Started "), c.Jb(31, "i", 11), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(32, "div", 12), c.Nb(33, "div", 18), c.Jb(34, "img", 19), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(35, "section", 20), c.Nb(36, "div", 2), c.Nb(37, "div", 21), c.Nb(38, "h2", 22), c.uc(39, " Our Products & Solutions "), c.Mb(), c.Mb(), c.Nb(40, "div", 23), c.Nb(41, "div", 24), c.Nb(42, "div", 25), c.Nb(43, "div", 26), c.Nb(44, "div", 27), c.Jb(45, "span", 28), c.Jb(46, "i", 29), c.Mb(), c.Mb(), c.Nb(47, "h5", 22), c.Nb(48, "a", 30), c.uc(49, " Certificates by DigitalattoDoc "), c.Mb(), c.Mb(), c.Nb(50, "p"), c.uc(51, " The fastest way to get started on Blockchain. Increase TRUST in the authenticity of the... "), c.Mb(), c.Nb(52, "div", 31), c.Nb(53, "a", 30), c.uc(54, " Read More "), c.Jb(55, "i", 11), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(56, "div", 24), c.Nb(57, "div", 32), c.Nb(58, "div", 26), c.Nb(59, "div", 27), c.Jb(60, "span", 28), c.Jb(61, "i", 33), c.Mb(), c.Mb(), c.Nb(62, "h5", 22), c.Nb(63, "a", 30), c.uc(64, " Blockchain as a Service (BaaS) "), c.Mb(), c.Mb(), c.Nb(65, "p"), c.uc(66, " Enterprise Ready \u2013 Scalable, Secure, and Tested Platform for Rapid Prototyping and easy... "), c.Mb(), c.Nb(67, "div", 31), c.Nb(68, "a", 30), c.uc(69, " Read More "), c.Jb(70, "i", 11), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(71, "div", 24), c.Nb(72, "div", 34), c.Nb(73, "div", 26), c.Nb(74, "div", 27), c.Jb(75, "span", 28), c.Jb(76, "i", 35), c.Mb(), c.Mb(), c.Nb(77, "h5", 22), c.Nb(78, "a", 30), c.uc(79, " Custom Solutions "), c.Mb(), c.Mb(), c.Nb(80, "p"), c.uc(81, " Talk to us. Communicate your needs with our experts and find customized solutions to suit your style. "), c.Mb(), c.Nb(82, "div", 31), c.Nb(83, "a", 30), c.uc(84, " Read More "), c.Jb(85, "i", 11), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(86, "section", 36), c.Nb(87, "div", 2), c.Nb(88, "div", 37), c.Nb(89, "div", 38), c.Nb(90, "div", 39), c.Nb(91, "div", 40), c.Jb(92, "img", 41), c.Mb(), c.Nb(93, "div", 42), c.Jb(94, "img", 43), c.Mb(), c.Mb(), c.Mb(), c.Nb(95, "div", 38), c.Nb(96, "div", 44), c.Nb(97, "div", 45), c.Nb(98, "h1", 46), c.uc(99, " What is Blockchain? "), c.Mb(), c.Nb(100, "h2", 47), c.uc(101, " It is All About Trust "), c.Mb(), c.Mb(), c.Nb(102, "p", 48), c.uc(103, " Blockchain is a digital ledger where all transactions entered are distributed across a network of computers. Public Blockchains, by design, have no single centralized authority in control (example: Government). It is tamper-proof/hacker-proof. It is immutable (i.e., cannot be deleted ever). The entire history is traceable, verifiable from the start of the block to all the additions/changes to the league. All these factors together increase TRUST in interactions between the parties. "), c.Mb(), c.Nb(104, "p", 49), c.uc(105, " DigitalattoDoc creates custom solutions using cutting-edge Blockchain technology and Artificial Intelligence (AI) and Machine Learning (MI). We get Blockchain working for you. "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(106, "section", 50), c.Nb(107, "div", 2), c.Nb(108, "div", 51), c.Nb(109, "div", 52), c.Nb(110, "div", 53), c.Nb(111, "h3", 22), c.uc(112, " Blockchain Explainer Video "), c.Mb(), c.Nb(113, "p"), c.uc(114, " Watch a video to understand how blockchain works & why we call it a cutting edge technology "), c.Mb(), c.Mb(), c.Mb(), c.Nb(115, "div", 54), c.Nb(116, "div", 55), c.Nb(117, "a", 56), c.Jb(118, "i", 57), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(119, "section", 58), c.Nb(120, "div", 2), c.Nb(121, "div", 21), c.Nb(122, "h2", 22), c.uc(123, " Where can Blockchain be used? "), c.Mb(), c.Mb(), c.Nb(124, "div", 59), c.Nb(125, "div", 60), c.Nb(126, "div", 61), c.Nb(127, "div", 62), c.Jb(128, "i", 63), c.Mb(), c.Nb(129, "h3", 22), c.Nb(130, "a"), c.uc(131, " Human Resources (HR) "), c.Mb(), c.Mb(), c.Nb(132, "p"), c.uc(133, " Universities, Coaches, and many others can issue Secure, Verifiable, Immutable Certificates using DigitalattoDoc "), c.Mb(), c.Mb(), c.Mb(), c.Nb(134, "div", 60), c.Nb(135, "div", 64), c.Nb(136, "div", 62), c.Jb(137, "i", 65), c.Mb(), c.Nb(138, "h3", 22), c.Nb(139, "a"), c.uc(140, " Health Care "), c.Mb(), c.Mb(), c.Nb(141, "p"), c.uc(142, " BlockChain can be used for EMR (Electronic Medical Records), Personal Health Record Data Management "), c.Mb(), c.Mb(), c.Mb(), c.Nb(143, "div", 60), c.Nb(144, "div", 66), c.Nb(145, "div", 62), c.Jb(146, "i", 67), c.Mb(), c.Nb(147, "h3", 22), c.Nb(148, "a"), c.uc(149, " E-Commerce "), c.Mb(), c.Mb(), c.Nb(150, "p"), c.uc(151, " Blockchain is used in Payments "), c.Jb(152, "br"), c.uc(153, " & Supply Chain Management to Reduce Fraud & Increase "), c.Jb(154, "br"), c.uc(155, " Trust etc. "), c.Mb(), c.Mb(), c.Mb(), c.Nb(156, "div", 60), c.Nb(157, "div", 66), c.Nb(158, "div", 62), c.Jb(159, "i", 68), c.Mb(), c.Nb(160, "h3", 22), c.Nb(161, "a"), c.uc(162, " Government "), c.Mb(), c.Mb(), c.Nb(163, "p"), c.uc(164, " Governments can use Blockchain in many ways like issuance of IDs, Credentials Management etc which reduces cost and improves accuracy."), c.Mb(), c.Mb(), c.Mb(), c.Nb(165, "div", 60), c.Nb(166, "div", 61), c.Nb(167, "div", 62), c.Jb(168, "i", 69), c.Mb(), c.Nb(169, "h3", 22), c.Nb(170, "a"), c.uc(171, " Real Estate "), c.Mb(), c.Mb(), c.Nb(172, "p"), c.uc(173, " Governments can use Blockchain in many ways like issuance of "), c.Jb(174, "br"), c.uc(175, " IDs, Credentials Management etc which reduces cost and "), c.Jb(176, "br"), c.uc(177, " improves accuracy."), c.Mb(), c.Mb(), c.Mb(), c.Nb(178, "div", 60), c.Nb(179, "div", 70), c.Nb(180, "div", 62), c.Jb(181, "i", 71), c.Mb(), c.Nb(182, "h3", 22), c.Nb(183, "a"), c.uc(184, " ID Cards, Passports "), c.Mb(), c.Mb(), c.Nb(185, "p"), c.uc(186, " Blockchain can be used to create, "), c.Jb(187, "br"), c.uc(188, " store and verify various ID documents. "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(189, "section", 72), c.Nb(190, "div", 2), c.Nb(191, "div", 73), c.Nb(192, "div", 74), c.Nb(193, "div", 75), c.Nb(194, "h2", 22), c.uc(195, " Our Expertise "), c.Mb(), c.Nb(196, "p", 76), c.uc(197, " Artificial Intelligence (AI), Machine Learning (MI), Blockchain, E-commerce (including the latest Social Ecommerce Solutions) plus mobile apps (iOS, Android), .NET technologies & more. "), c.Mb(), c.Nb(198, "p", 77), c.uc(199, " Our clients include Governments, Enterprises & Corporations across the Globe. "), c.Mb(), c.Mb(), c.Mb(), c.Nb(200, "div", 78), c.Nb(201, "div", 79), c.Jb(202, "img", 80), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(203, "section", 81), c.Nb(204, "div", 2), c.Nb(205, "div", 82), c.Nb(206, "div", 83), c.Nb(207, "div", 84), c.Nb(208, "div", 40), c.Jb(209, "img", 85), c.Mb(), c.Nb(210, "div", 42), c.Jb(211, "img", 86), c.Mb(), c.Mb(), c.Mb(), c.Nb(212, "div", 87), c.Nb(213, "div", 88), c.Nb(214, "h2", 22), c.uc(215, " How does it Work? "), c.Mb(), c.Mb(), c.Nb(216, "ul", 89), c.Nb(217, "li", 90), c.Nb(218, "h4"), c.uc(219, " CONSULTATION "), c.Mb(), c.Nb(220, "p"), c.uc(221, " Talk to us about your business needs and our experts will explain how blockchain can benefit your firm. "), c.Mb(), c.Mb(), c.Nb(222, "li", 90), c.Nb(223, "h4"), c.uc(224, " STRATEGIZE "), c.Mb(), c.Nb(225, "p"), c.uc(226, " We develop strategies, working out a step by step plan to execute key milestones and scope of work. "), c.Mb(), c.Mb(), c.Nb(227, "li", 90), c.Nb(228, "h4"), c.uc(229, " TAKE ACTION "), c.Mb(), c.Nb(230, "p"), c.uc(231, " Review and authorize plan of action and get things moving. See your project come to life. "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(232, "section", 91), c.Nb(233, "div", 2), c.Nb(234, "div", 51), c.Nb(235, "div", 92), c.Nb(236, "div", 93), c.Nb(237, "h1", 22), c.uc(238, " Our Address "), c.Mb(), c.Nb(239, "span", 94), c.uc(240, " Office Locations "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(241, "div", 95), c.Nb(242, "div", 96), c.Nb(243, "div", 97), c.Nb(244, "div", 98), c.Nb(245, "div", 99), c.Nb(246, "p", 100), c.uc(247, " United kingdom "), c.Mb(), c.Nb(248, "h3", 101), c.Jb(249, "img", 102), c.Mb(), c.Nb(250, "p", 103), c.uc(251, " Digitalatto Ltd "), c.Jb(252, "br"), c.uc(253, " 85 Great Portland Street, "), c.Jb(254, "br"), c.uc(255, " First Floor, London,"), c.Jb(256, "br"), c.uc(257, " W1W 7LT, United Kingdom. "), c.Mb(), c.Mb(), c.Mb(), c.Nb(258, "div", 98), c.Nb(259, "div", 99), c.Nb(260, "p", 100), c.uc(261, " United States "), c.Mb(), c.Nb(262, "h3", 101), c.Jb(263, "img", 104), c.Mb(), c.Nb(264, "p", 103), c.uc(265, "Digitalatto LLC "), c.Jb(266, "br"), c.uc(267, " 2055 Limestone RdSuite 200, "), c.Jb(268, "br"), c.uc(269, " Wilmington, Delaware, "), c.Jb(270, "br"), c.uc(271, " DE 19808, United States. "), c.Mb(), c.Mb(), c.Mb(), c.Nb(272, "div", 98), c.Nb(273, "div", 99), c.Nb(274, "p", 100), c.uc(275, " United Arab Emirates "), c.Mb(), c.Nb(276, "h3", 101), c.Jb(277, "img", 105), c.Mb(), c.Nb(278, "p", 103), c.uc(279, " Level 41, Emirates Towers, "), c.Jb(280, "br"), c.uc(281, " Sheikh Zayed Road, Dubai , "), c.Jb(282, "br"), c.uc(283, " United Arab Emirates. "), c.Mb(), c.Mb(), c.Mb(), c.Nb(284, "div", 98), c.Nb(285, "div", 99), c.Nb(286, "p", 100), c.uc(287, " Qatar "), c.Mb(), c.Nb(288, "h3", 101), c.Jb(289, "img", 106), c.Mb(), c.Nb(290, "p", 103), c.uc(291, " ASHEGHAR DIGIMENTORS Building D, Crowne Plaza, The Business Park, Old Airport Road, Doha, Qatar. +97440316789 "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(292, "section", 107), c.Nb(293, "div", 2), c.Nb(294, "div", 97), c.Nb(295, "div", 108), c.Nb(296, "div", 109), c.Nb(297, "h4", 110), c.uc(298, " Subscribe Now for up to date news & resources on Blockchain & its use cases "), c.Mb(), c.Mb(), c.Mb(), c.Nb(299, "div", 111), c.Nb(300, "div", 112), c.Nb(301, "form", 113), c.Nb(302, "div", 114), c.Nb(303, "div", 115), c.Nb(304, "div", 116), c.Nb(305, "input", 117), c.Ub("keypress", (function(e) {
                                        return t.CF.Nospace(e)
                                    })), c.Mb(), c.Nb(306, "span", 118), c.Jb(307, "i", 119), c.Mb(), c.sc(308, s, 2, 0, "div", 120), c.sc(309, l, 2, 0, "div", 120), c.Mb(), c.Mb(), c.Nb(310, "div", 121), c.Nb(311, "div", 122), c.Nb(312, "button", 123), c.Ub("click", (function() {
                                        return t.onSubmit()
                                    })), c.Nb(313, "span"), c.uc(314, "Subscribe "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(315, "section", 124), c.Nb(316, "div", 2), c.Nb(317, "div", 97), c.Nb(318, "div", 125), c.Nb(319, "div", 93), c.Nb(320, "h1", 22), c.uc(321, "FAQ "), c.Mb(), c.Nb(322, "span", 94), c.uc(323, "Frequently Asked Questions "), c.Mb(), c.Mb(), c.Mb(), c.Nb(324, "div", 126), c.Nb(325, "div", 127), c.Nb(326, "div", 128), c.Nb(327, "div", 129), c.Nb(328, "h2", 130), c.Nb(329, "button", 131), c.uc(330, " 1. What is a blockchain certificate? "), c.Nb(331, "span", 132), c.Jb(332, "i", 133), c.Jb(333, "i", 134), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(334, "div", 135), c.Nb(335, "div", 136), c.Nb(336, "p"), c.uc(337, " When a certificate is issued on the blockchain platform, the data is digitized and unique identity is assigned to each certificate. All these certificates are stored on the blockchain network, and are tagged and traceable. "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(338, "div", 128), c.Nb(339, "div", 137), c.Nb(340, "h2", 130), c.Nb(341, "button", 138), c.uc(342, " 2. What is a Smart Contract? "), c.Nb(343, "span", 139), c.Jb(344, "i", 133), c.Jb(345, "i", 140), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(346, "div", 141), c.Nb(347, "div", 136), c.Nb(348, "p"), c.uc(349, " Smart contracts are programs stored on a blockchain that run when predetermined conditions are met. They are typically used to automate the execution of any agreement so that all participants (the creator of the contract and the recipient) can be immediately certain of the outcome, without any intermediary's involvement or time loss. "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(350, "div", 128), c.Nb(351, "div", 142), c.Nb(352, "h2", 130), c.Nb(353, "button", 143), c.uc(354, " 3. Can we issue a blockchain certificate under our educational institution for multiple courses? "), c.Nb(355, "span", 139), c.Jb(356, "i", 133), c.Jb(357, "i", 140), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(358, "div", 144), c.Nb(359, "div", 136), c.Nb(360, "p"), c.uc(361, " Yes, you can generate a Blockchain certificate for any course or training for your educational institution. To get certificates for your institution and become an issuer, please contact "), c.Nb(362, "span", 145), c.uc(363, " https://digitalattodoc.com/contact "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(364, "div", 128), c.Nb(365, "div", 146), c.Nb(366, "h2", 130), c.Nb(367, "button", 147), c.uc(368, " 4. Can I use blockchain certificate for my private institution? "), c.Nb(369, "span", 139), c.Jb(370, "i", 133), c.Jb(371, "i", 140), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(372, "div", 148), c.Nb(373, "div", 136), c.Nb(374, "p"), c.uc(375, " Yes, you can. To get certificates for your institution and become an issuer, please contact "), c.Nb(376, "span", 145), c.uc(377, " https://digitalattodoc.com/contact. "), c.Mb(), c.uc(378, " And if you have more questions, you can book a discovery call "), c.Nb(379, "span", 149), c.uc(380, " (https://digitalattodoc.com/contact) "), c.Mb(), c.uc(381, " and one of our expert mentors will get in touch with you. "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(382, "div", 128), c.Nb(383, "div", 150), c.Nb(384, "h2", 130), c.Nb(385, "button", 151), c.uc(386, " 5. How can I become a blockchain certificate issuer? "), c.Nb(387, "span", 139), c.Jb(388, "i", 133), c.Jb(389, "i", 140), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(390, "div", 152), c.Nb(391, "div", 136), c.Nb(392, "p"), c.uc(393, " You will get the rights to become an issuer by purchasing the University package "), c.Nb(394, "span", 145), c.uc(395, " https://digitalattodoc.com/contact "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(396, "div", 128), c.Nb(397, "div", 153), c.Nb(398, "h2", 130), c.Nb(399, "button", 154), c.uc(400, " 6. Is Blockchain certificate valid everywhere? "), c.Nb(401, "span", 139), c.Jb(402, "i", 133), c.Jb(403, "i", 140), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(404, "div", 155), c.Nb(405, "div", 136), c.Nb(406, "p"), c.uc(407, " Validity depends on the Blockchain Certificate issuing institution but DigitalattoDoc Certificates ensures authenticity. "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(408, "div", 128), c.Nb(409, "div", 156), c.Nb(410, "h2", 130), c.Nb(411, "button", 157), c.uc(412, " 7. What is the difference between Blockchain Certificate and other certificates? "), c.Nb(413, "span", 139), c.Jb(414, "i", 133), c.Jb(415, "i", 140), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(416, "div", 158), c.Nb(417, "div", 136), c.Nb(418, "p"), c.uc(419, " Traditional certificates endorse your accomplishments and is authorized by the respective organization. Blockchain certificates do the same and much more than that. Blockchain certificates are secure, immutable and verifiable. Unlike traditional certificates, the authenticity of a blockchain certificate can be verified by any authorized person at anytime without hassles. "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(420, "div", 128), c.Nb(421, "div", 159), c.Nb(422, "h2", 130), c.Nb(423, "button", 160), c.uc(424, " 8. What types of certificates can one generate or issue through DigitalattoDoc? "), c.Nb(425, "span", 139), c.Jb(426, "i", 133), c.Jb(427, "i", 140), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(428, "div", 161), c.Nb(429, "div", 136), c.Nb(430, "p"), c.uc(431, " We have certificates for Education, HR, Healthcare, Logistics, Real Estate and for all Government and Non-government Organizations. "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(432, "div", 128), c.Nb(433, "div", 162), c.Nb(434, "h2", 130), c.Nb(435, "button", 163), c.uc(436, " 9. How can I get started with DigitalattoDoc? "), c.Nb(437, "span", 139), c.Jb(438, "i", 133), c.Jb(439, "i", 140), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(440, "div", 164), c.Nb(441, "div", 136), c.Nb(442, "p"), c.uc(443, " You can get started with DigitalattoDoc by purchasing "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(444, "div", 128), c.Nb(445, "div", 165), c.Nb(446, "h2", 130), c.Nb(447, "button", 166), c.uc(448, " 10. How can I know more about DigitalattoDoc? "), c.Nb(449, "span", 139), c.Jb(450, "i", 133), c.Jb(451, "i", 140), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(452, "div", 167), c.Nb(453, "div", 136), c.Nb(454, "p"), c.uc(455, " You can book a discovery call "), c.Nb(456, "span", 145), c.uc(457, " (https://digitalattodoc.com/contact) "), c.Mb(), c.uc(458, " and one of our expert mentors will get in touch with you. "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(459, "div", 128), c.Nb(460, "div", 168), c.Nb(461, "h2", 130), c.Nb(462, "button", 169), c.uc(463, " 11. How do I get a Digitalatto Blockchain certificate? "), c.Nb(464, "span", 139), c.Jb(465, "i", 133), c.Jb(466, "i", 140), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(467, "div", 170), c.Nb(468, "div", 136), c.Nb(469, "p"), c.uc(470, " You can get Digitalatto Blockchain certificate by clearing any of the courses provided by Digitalatto Academy. The Digitalatto Academy platform will be launched in March 2022. "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(471, "div", 128), c.Nb(472, "div", 171), c.Nb(473, "h2", 130), c.Nb(474, "button", 172), c.uc(475, " 12. How can I know more about the custom package? "), c.Nb(476, "span", 139), c.Jb(477, "i", 133), c.Jb(478, "i", 140), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(479, "div", 173), c.Nb(480, "div", 136), c.Nb(481, "p"), c.uc(482, " You can book a discovery call "), c.Nb(483, "span", 145), c.uc(484, " (https://digitalattodoc.com/contact) "), c.Mb(), c.uc(485, " and one of our expert mentors will get in touch with you. "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(486, "div", 128), c.Nb(487, "div", 174), c.Nb(488, "h2", 130), c.Nb(489, "button", 175), c.uc(490, " 13. What happens to my unissued certificates every month? "), c.Nb(491, "span", 139);
                                    c.Jb(492, "i", 133), c.Jb(493, "i", 140), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(494, "div", 176), c.Nb(495, "div", 136), c.Nb(496, "p"), c.uc(497, " You can carry forward your unissued certificates to the next month. "), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(498, "div", 128), c.Nb(499, "div", 177), c.Nb(500, "h2", 130), c.Nb(501, "button", 178), c.uc(502, " 14. Is it possible to tamper Blockchain Certificate? "), c.Nb(503, "span", 139), c.Jb(504, "i", 133), c.Jb(505, "i", 140), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(506, "div", 179), c.Nb(507, "div", 136), c.Nb(508, "p"), c.uc(509, " No, a Blockchain certificate is digitized with a unique identity and stored on the blockchain network."), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(510, "div", 128), c.Nb(511, "div", 180), c.Nb(512, "h2", 130), c.Nb(513, "button", 181), c.uc(514, " 15. Is it possible to tamper with Hash? "), c.Nb(515, "span", 139), c.Jb(516, "i", 133), c.Jb(517, "i", 140), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Nb(518, "div", 182), c.Nb(519, "div", 136), c.Nb(520, "p"), c.uc(521, " No, it is not possible to tamper with hash because they are all secure on the blockchain and nodes."), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb(), c.Mb()
                                }
                                2 & e && (c.xb(12), c.bc("routerLink", c.ec(18, d)), c.xb(17), c.bc("routerLink", c.ec(19, u)), c.xb(19), c.bc("routerLink", c.ec(20, g)), c.xb(5), c.bc("routerLink", c.ec(21, g)), c.xb(10), c.bc("routerLink", c.ec(22, u)), c.xb(5), c.bc("routerLink", c.ec(23, u)), c.xb(10), c.bc("routerLink", c.ec(24, d)), c.xb(5), c.bc("routerLink", c.ec(25, d)), c.xb(218), c.bc("formGroup", t.Subscribeform), c.xb(7), c.bc("ngIf", t.Submitted && t.Subscribeform.get("Email").hasError("required")), c.xb(1), c.bc("ngIf", t.Submitted && t.Subscribeform.get("Email").hasError("pattern")), c.xb(3), c.bc("ngClass", c.fc(26, p, t.success)), c.xb(50), c.bc("routerLink", c.ec(28, h)), c.xb(14), c.bc("routerLink", c.ec(29, h)), c.xb(3), c.bc("routerLink", c.ec(30, h)), c.xb(15), c.bc("routerLink", c.ec(31, h)), c.xb(62), c.bc("routerLink", c.ec(32, h)), c.xb(27), c.bc("routerLink", c.ec(33, h)))
                            },
                            directives: [n.d, o.o, o.j, o.e, o.b, o.i, o.d, i.k, i.i, n.c],
                            styles: ['.ptb[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:3px;padding:10px;line-height:20px;height:auto}.AppFormLeft[_ngcontent-%COMP%]{padding:20px 20px 20px 0}.AppFormLeft[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;color:#333}.AppFormLeft[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:400;color:#0e4ba6;font-size:28px;margin:10px 0 28px}.AppForm[_ngcontent-%COMP%]   .AppFormLeft[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#0e4ba6;border-radius:5px;padding:10px 0}.AppForm[_ngcontent-%COMP%]   .AppFormRight[_ngcontent-%COMP%]{height:auto;background-size:cover;background-position:50%}.why-choose-area1[_ngcontent-%COMP%]{position:relative;overflow:hidden;z-index:2}.why-choose-area1[_ngcontent-%COMP%]   .single-choose[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;height:120px;width:120px;border-radius:50%;border:3px solid #000;position:relative;z-index:2;font-size:60px;line-height:1;margin-bottom:30px}.why-choose-area1[_ngcontent-%COMP%]   .single-choose[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   .rotate-dot[_ngcontent-%COMP%]{position:absolute;left:0;top:0;height:100%;width:100%;border-radius:50%;z-index:-1;animation:rotateTwo 30s linear infinite}.why-choose-area1[_ngcontent-%COMP%]   .single-choose[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   .rotate-dot[_ngcontent-%COMP%]:before{position:absolute;content:"";height:16px;width:16px;background:#000;top:-9px;left:50%;transform:translateX(-50%);border-radius:50%}.why-choose-area1[_ngcontent-%COMP%]   .single-choose[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   .rotate-dot[_ngcontent-%COMP%]:after{position:absolute;content:"";height:9px;width:9px;background:#000;bottom:-5px;left:50%;transform:translateX(-50%);border-radius:50%}.why-choose-area1[_ngcontent-%COMP%]   .single-choose[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:26px;color:#fff;margin-bottom:20px}.why-choose-area1[_ngcontent-%COMP%]   .single-choose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#c7c7ff;padding:0 20px}.swing[_ngcontent-%COMP%]{animation:swing 1s ease-in-out infinite alternate;transform-origin:center -20px;width:66px;height:54px;background-color:#fff}.swing[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{border:3px solid #ccc;display:block;width:68px;height:55px;line-height:50px;text-align:center;font-size:31px}.swing[_ngcontent-%COMP%]:after{width:20px;height:20px;top:-10px;left:35%;z-index:0;border:2px solid #999;border-right:none;border-bottom:none;transform:rotate(45deg)}.swing[_ngcontent-%COMP%]:after, .swing[_ngcontent-%COMP%]:before{content:"";position:absolute}.swing[_ngcontent-%COMP%]:before{width:8px;height:8px;top:-18px;left:44%;z-index:5;border-radius:50% 50%;background:#0e4ba6}@keyframes swing{0%{transform:rotate(3deg)}to{transform:rotate(-3deg)}}@media only screen and (max-width:600px){.tile-gallery-two[_ngcontent-%COMP%]   .img-two[_ngcontent-%COMP%]:before{right:-10px!important;bottom:-10px!important}.intro-video-area[_ngcontent-%COMP%], .subsribe-bg[_ngcontent-%COMP%], .video-cta[_ngcontent-%COMP%]{padding:40px 0}.service-item-two[_ngcontent-%COMP%]{min-height:305px}.service-item[_ngcontent-%COMP%]{padding:24px 25px 32px}.footer-area[_ngcontent-%COMP%]   .footer-widgets[_ngcontent-%COMP%]{padding:40px 0}.pricing-plan-item[_ngcontent-%COMP%]{padding:30px;min-height:260px}.mb-50[_ngcontent-%COMP%]{margin-bottom:30px}}.btn.focus[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:focus{outline:0;box-shadow:none}.myaccordion[_ngcontent-%COMP%]{max-width:100%;margin:0 0 40px;box-shadow:0 0 1px rgba(0,0,0,.1)}.myaccordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .myaccordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:last-child   .card-header[_ngcontent-%COMP%]{border:none}.myaccordion[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{border-bottom-color:#edeff0;background:transparent}.myaccordion[_ngcontent-%COMP%]   .fa-stack[_ngcontent-%COMP%]{font-size:18px}.myaccordion[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%;font-weight:700;color:#004987;padding:0}.myaccordion[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:focus, .myaccordion[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover{text-decoration:none}.myaccordion[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:10px}']
                        }), e
                    })()
                }];
            let m = (() => {
                    class e {}
                    return e.\u0275mod = c.Gb({
                        type: e
                    }), e.\u0275inj = c.Fb({
                        factory: function(t) {
                            return new(t || e)
                        },
                        imports: [
                            [n.e.forChild(M)], n.e
                        ]
                    }), e
                })(),
                N = (() => {
                    class e {}
                    return e.\u0275mod = c.Gb({
                        type: e
                    }), e.\u0275inj = c.Fb({
                        factory: function(t) {
                            return new(t || e)
                        },
                        imports: [
                            [i.b, m, o.m, o.f, n.e]
                        ]
                    }), e
                })()
        }
    }
]);