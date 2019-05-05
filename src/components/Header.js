import React from 'react';

class Header extends React.Component {

    render(){
        return (
            <header>
                <div className="mobile-fix-option"></div>
                <div className="top-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="header-contact">
                                    <ul>
                                        <li>Welcome to Our store Multikart</li>
                                        <li><i className="fa fa-phone" aria-hidden="true"></i>Call Us: 123 - 456 - 7890</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 text-right">
                                <ul className="header-dropdown">
                                    <li className="mobile-wishlist"><a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a></li>
                                    <li className="onhover-dropdown mobile-account"> <i className="fa fa-user" aria-hidden="true"></i> My Account
                                        <ul className="onhover-show-div">
                                            <li><a href="#" data-lng="en">Login</a></li>
                                            <li><a href="#" data-lng="es">Logout</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="main-menu">
                                <div className="menu-left">
                                    <div className="navbar">
                                        <a href="javascript:void(0)" onclick="openNav()">
                                            <div className="bar-style"><i className="fa fa-bars sidebar-bar" aria-hidden="true"></i></div>
                                        </a>
                                        <div id="mySidenav" className="sidenav">
                                            <a href="javascript:void(0)" className="sidebar-overlay" onclick="closeNav()"></a>
                                            <nav>
                                                <div onclick="closeNav()">
                                                    <div className="sidebar-back text-left"><i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back</div>
                                                </div>
                                                <ul id="sub-menu" className="sm pixelstrap sm-vertical">
                                                    <li> <a href="#">clothing</a>
                                                        <ul className="mega-menu clothing-menu">
                                                            <li>
                                                                <div className="row m-0">
                                                                    <div className="col-xl-4">
                                                                        <div className="link-section">
                                                                            <h5>women's fashion</h5>
                                                                            <ul>
                                                                                <li><a href="#">dresses</a></li>
                                                                                <li><a href="#">skirts</a></li>
                                                                                <li><a href="#">westarn wear</a></li>
                                                                                <li><a href="#">ethic wear</a></li>
                                                                                <li><a href="#">sport wear</a></li>
                                                                            </ul>
                                                                            <h5>men's fashion</h5>
                                                                            <ul>
                                                                                <li><a href="#">sports wear</a></li>
                                                                                <li><a href="#">western wear</a></li>
                                                                                <li><a href="#">ethic wear</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-4">
                                                                        <div className="link-section">
                                                                            <h5>accessories</h5>
                                                                            <ul>
                                                                                <li><a href="#">fashion jewellery</a></li>
                                                                                <li><a href="#">caps and hats</a></li>
                                                                                <li><a href="#">precious jewellery</a></li>
                                                                                <li><a href="#">necklaces</a></li>
                                                                                <li><a href="#">earrings</a></li>
                                                                                <li><a href="#">wrist wear</a></li>
                                                                                <li><a href="#">ties</a></li>
                                                                                <li><a href="#">cufflinks</a></li>
                                                                                <li><a href="#">pockets squares</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-4">
                                                                        <a href="#" className="mega-menu-banner"><img src="assets/images/mega-menu/fashion.jpg" alt="" className="img-fluid blur-up lazyload"></a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li> <a href="#">bags</a>
                                                        <ul>
                                                            <li><a href="#">shopper bags</a></li>
                                                            <li><a href="#">laptop bags</a></li>
                                                            <li><a href="#">clutches</a></li>
                                                            <li> <a href="#">purses</a>
                                                                <ul>
                                                                    <li><a href="#">purses</a></li>
                                                                    <li><a href="#">wallets</a></li>
                                                                    <li><a href="#">leathers</a></li>
                                                                    <li><a href="#">satchels</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li> <a href="#">footwear</a>
                                                        <ul>
                                                            <li><a href="#">sport shoes</a></li>
                                                            <li><a href="#">formal shoes</a></li>
                                                            <li><a href="#">casual shoes</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">watches</a></li>
                                                    <li> <a href="#">Accessories</a>
                                                        <ul>
                                                            <li><a href="#">fashion jewellery</a></li>
                                                            <li><a href="#">caps and hats</a></li>
                                                            <li><a href="#">precious jewellery</a></li>
                                                            <li> <a href="#">more..</a>
                                                                <ul>
                                                                    <li><a href="#">necklaces</a></li>
                                                                    <li><a href="#">earrings</a></li>
                                                                    <li><a href="#">wrist wear</a></li>
                                                                    <li> <a href="#">accessories</a>
                                                                        <ul>
                                                                            <li><a href="#">ties</a></li>
                                                                            <li><a href="#">cufflinks</a></li>
                                                                            <li><a href="#">pockets squares</a></li>
                                                                            <li><a href="#">helmets</a></li>
                                                                            <li><a href="#">scarves</a></li>
                                                                            <li> <a href="#">more...</a>
                                                                                <ul>
                                                                                    <li><a href="#">accessory gift sets</a></li>
                                                                                    <li><a href="#">travel accessories</a></li>
                                                                                    <li><a href="#">phone cases</a></li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><a href="#">belts & more</a></li>
                                                                    <li><a href="#">wearable</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">house of design</a></li>
                                                    <li> <a href="#">beauty & personal care</a>
                                                        <ul>
                                                            <li><a href="#">makeup</a></li>
                                                            <li><a href="#">skincare</a></li>
                                                            <li><a href="#">premium beaty</a></li>
                                                            <li> <a href="#">more</a>
                                                                <ul>
                                                                    <li><a href="#">fragrances</a></li>
                                                                    <li><a href="#">luxury beauty</a></li>
                                                                    <li><a href="#">hair care</a></li>
                                                                    <li><a href="#">tools & brushes</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">home & decor</a></li>
                                                    <li><a href="#">kitchen</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="brand-logo">
                                        <a href="index.html"><img src="assets/images/icon/logo.png" className="img-fluid blur-up lazyload" alt=""></a>
                                    </div>
                                </div>
                                <div className="menu-right pull-right">
                                    <div>
                                        <nav id="main-nav">
                                            <div className="toggle-nav"><i className="fa fa-bars sidebar-bar"></i></div>
                                            <ul id="main-menu" className="sm pixelstrap sm-horizontal">
                                                <li>
                                                    <div className="mobile-back text-right">Back<i className="fa fa-angle-right pl-2" aria-hidden="true"></i></div>
                                                </li>
                                                <li>
                                                    <a href="#">Home</a>
                                                    <ul>
                                                        <li>
                                                            <a href="#">new demos <span className="new-tag">new</span></a>
                                                            <ul>
                                                                <li><a target="_blank"  href="tools.html">tools</a></li>
                                                                <li><a target="_blank" href="game.html">game</a></li>
                                                                <li><a target="_blank" href="gym-product.html">gym</a></li>
                                                                <li><a target="_blank" href="marijuana.html">marijuana</a></li>
                                                                <li><a target="_blank" href="left_sidebar-demo.html">left sidebar</a></li>
                                                                <li><a target="_blank" href="jewellery.html">jewellery</a></li>
                                                                <li><a target="_blank" href="pets.html">pets</a></li>
                                                                <li><a target="_blank" href="metro.html">metro</a></li>
                                                                <li><a target="_blank" href="video-slider.html">video slider</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#">clothing</a>
                                                            <ul>
                                                                <li><a target="_blank" href="index.html">fashion 1</a></li>
                                                                <li><a target="_blank" href="fashion-2.html">fashion 2</a></li>
                                                                <li><a target="_blank" href="fashion-3.html">fashion 3</a></li>
                                                                <li><a target="_blank" href="kids.html">kids</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a target="_blank" href="watch.html">watch</a></li>
                                                        <li><a target="_blank" href="shoes.html">shoes</a></li>
                                                        <li>
                                                            <a href="#">electronics</a>
                                                            <ul>
                                                                <li><a target="_blank" href="electronic-1.html">electronic 1</a></li>
                                                                <li><a target="_blank" href="electronic-2.html">electronic 2</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a target="_blank" href="bags.html">bags</a></li>
                                                        <li><a target="_blank" href="nursery.html">nursery</a></li>
                                                        <li><a target="_blank" href="vegetables.html">vegetable</a></li>
                                                        <li><a target="_blank" href="beauty.html">beauty</a></li>
                                                        <li><a target="_blank" href="light.html">light</a></li>
                                                        <li><a target="_blank" href="furniture.html">furniture</a></li>
                                                        <li><a target="_blank" href="goggles.html">googles</a></li>
                                                        <li>
                                                            <a href="#">basics</a>
                                                            <ul>
                                                                <li><a target="_blank" href="lookbook-demo.html">lookbook</a></li>
                                                                <li><a target="_blank" href="instagram-shop.html">instagram</a></li>
                                                                <li><a target="_blank" href="video.html">video</a></li>
                                                                <li><a target="_blank" href="parallax.html">parallax</a></li>
                                                                <li><a target="_blank" href="full-page.html">full page</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">shop</a>
                                                    <ul>
                                                        <li><a href="category-page.html">left sidebar</a></li>
                                                        <li><a href="category-page(right).html">right sidebar</a></li>
                                                        <li><a href="category-page(no-sidebar).html">no sidebar</a></li>
                                                        <li><a href="category-page(sidebar-popup).html">sidebar popup</a></li>
                                                        <li><a href="category-page(metro).html">metro <span className="new-tag">new</span></a></li>
                                                        <li><a href="category-page(full-width).html">full width <span className="new-tag">new</span></a></li>
                                                        <li><a href="category-page(infinite-scroll).html">infinite scroll</a></li>
                                                        <li><a href="category-page(3-grid).html">3 grid</a></li>
                                                        <li><a href="category-page(6-grid).html">6 grid</a></li>
                                                        <li><a href="category-page(list-view).html">list view</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">product</a>
                                            <ul>
                                                <li>
                                                    <a href="#">sidebar</a>
                                                    <ul>
                                                        <li><a href="product-page.html">left sidebar</a></li>
                                                        <li><a href="product-page(right-sidebar).html">right sidebar</a></li>
                                                        <li><a href="product-page(no-sidebar).html">no sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">thumbnail image</a>
                                                    <ul>
                                                        <li><a href="product-page(left-image).html">left image</a></li>
                                                        <li><a href="product-page(right-image).html">right image</a></li>
                                                        <li><a href="product-page(image-outside).html">image outside <span className="new-tag">new</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">3 column</a>
                                                    <ul>
                                                        <li><a href="product-page(3-col-left).html">thumbnail left</a></li>
                                                        <li><a href="product-page(3-col-right).html">thumbnail right</a></li>
                                                        <li><a href="product-page(3-column).html">thubnail bottom</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="product-page(4-image).html">4 image <span className="new-tag">new</span></a></li>
                                                <li><a href="product-page(sticky).html">sticky</a></li>
                                                <li><a href="product-page(accordian).html">accordian</a></li>
                                                <li><a href="product-page(bundle).html">bundle<span className="new-tag">new</span></a></li>
                                                <li><a href="product-page(image-swatch).html">image swatch <span className="new-tag">new</span></a></li>
                                                <li><a href="product-page(vertical-tab).html">vertical tab</a></li>
                                            </ul>
                                        </li>
                                        <li className="mega" id="hover-cls"><a href="#">features
                                            <div className="lable-nav">new</div>
                                        </a>
                                            <ul className="mega-menu full-mega-menu">
                                                <li>
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col mega-box">
                                                                <div className="link-section">
                                                                    <div className="menu-title">
                                                                        <h5>portfolio</h5></div>
                                                                    <div className="menu-content">
                                                                        <ul>
                                                                            <li><a href="grid-2-col.html">portfolio grid 2</a></li>
                                                                            <li><a href="grid-3-col.html">portfolio grid 3</a></li>
                                                                            <li><a href="grid-4-col.html">portfolio grid 4</a></li>
                                                                            <li><a href="masonary-2-grid.html">mesonary grid 2</a></li>
                                                                            <li><a href="masonary-3-grid.html">mesonary grid 3</a></li>
                                                                            <li><a href="masonary-4-grid.html">mesonary grid 4</a></li>
                                                                            <li><a href="masonary-fullwidth.html">mesonary full width</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col mega-box">
                                                                <div className="link-section">
                                                                    <div className="menu-title">
                                                                        <h5>add to cart</h5></div>
                                                                    <div className="menu-content">
                                                                        <ul>
                                                                            <li><a href="nursery.html">cart modal popup</a></li>
                                                                            <li><a href="vegetables.html">qty. counter <i className="fa fa-bolt icon-trend" aria-hidden="true"></i></a></li>
                                                                            <li><a href="bags.html">cart top</a></li>
                                                                            <li><a href="shoes.html">cart bottom</a></li>
                                                                            <li><a href="watch.html">cart left</a></li>
                                                                            <li><a href="tools.html">cart right</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col mega-box">
                                                                <div className="link-section">
                                                                    <div className="menu-title">
                                                                        <h5>theme elements</h5></div>
                                                                    <div className="menu-content">
                                                                        <ul>
                                                                            <li><a href="element-title.html">title</a></li>
                                                                            <li><a href="element-banner.html">collection banner</a></li>
                                                                            <li><a href="element-slider.html">home slider</a></li>
                                                                            <li><a href="element-category.html">category</a></li>
                                                                            <li><a href="element-service.html">service</a></li>
                                                                            <li><a href="element-image-ratio.html">image size ratio <i className="fa fa-bolt icon-trend" aria-hidden="true"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col mega-box">
                                                                <div className="link-section">
                                                                    <div className="menu-title">
                                                                        <h5>product elements</h5></div>
                                                                    <div className="menu-content">
                                                                        <ul>
                                                                            <li className="up-text"><a href="element-productbox.html">product box<span>10+</span></a></li>
                                                                            <li><a href="element-product-slider.html">product slider</a></li>
                                                                            <li><a href="element-no_slider.html">no slider</a></li>
                                                                            <li><a href="element-mulitiple_slider.html">multi slider</a></li>
                                                                            <li><a href="element-tab.html">tab</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col mega-box">
                                                                <div className="link-section">
                                                                    <div className="menu-title">
                                                                        <h5>email template   </h5></div>
                                                                    <div className="menu-content">
                                                                        <ul>
                                                                            <li><a href="email-order-success.html">order success</a></li>
                                                                            <li><a href="email-order-success-two.html">order success 2</a></li>
                                                                            <li><a href="email-template.html">email template</a></li>
                                                                            <li><a href="email-template-two.html">email template 2</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">pages</a>
                                            <ul>
                                                <li>
                                                    <a href="#">account</a>
                                                    <ul>
                                                        <li><a href="wishlist.html">wishlist</a></li>
                                                        <li><a href="cart.html">cart</a></li>
                                                        <li><a href="dashboard.html">Dashboard</a></li>
                                                        <li><a href="login.html">login</a></li>
                                                        <li><a href="register.html">register</a></li>
                                                        <li><a href="contact.html">contact</a></li>
                                                        <li><a href="forget_pwd.html">forget password</a></li>
                                                        <li><a href="profile.html">profile <span className="new-tag">new</span></a></li>
                                                        <li><a href="checkout.html">checkout</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="about-page.html">about us</a></li>
                                                <li><a href="search.html">search</a></li>
                                                <li><a href="typography.html">typography <span className="new-tag">new</span></a></li>
                                                <li><a href="review.html">review <span className="new-tag">new</span></a></li>
                                                <li><a href="order-success.html">order success</a></li>
                                                <li>
                                                    <a href="#">compare</a>
                                                    <ul>
                                                        <li><a href="compare.html">compare</a></li>
                                                        <li><a href="compare-2.html">compare-2 <span className="new-tag">new</span></a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="collection.html">collection</a></li>
                                                <li><a href="lookbook.html">lookbook</a></li>
                                                <li><a href="sitemap.html">site map <span className="new-tag">new</span></a></li>
                                                <li><a href="404.html">404</a></li>
                                                <li><a href="coming-soon.html">coming soon <span className="new-tag">new</span></a></li>
                                                <li><a href="faq.html">FAQ</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">blog</a>
                                            <ul>
                                                <li><a href="blog-page.html">left sidebar</a></li>
                                                <li><a href="blog(right-sidebar).html">right sidebar</a></li>
                                                <li><a href="blog(no-sidebar).html">no sidebar</a></li>
                                                <li><a href="blog-details.html">blog details</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div>
                                <div className="icon-nav">
                                    <ul>
                                        <li className="onhover-div mobile-search">
                                            <div><img src="assets/images/icon/search.png" onclick="openSearch()" className="img-fluid blur-up lazyload" alt=""> <i className="ti-search" onclick="openSearch()"></i></div>
                                            <div id="search-overlay" className="search-overlay">
                                                <div> <span className="closebtn" onclick="closeSearch()" title="Close Overlay">×</span>
                                                    <div className="overlay-content">
                                                        <div className="container">
                                                            <div className="row">
                                                                <div className="col-xl-12">
                                                                    <form>
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search a Product">
                                                                        </div>
                                                                        <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="onhover-div mobile-setting">
                                            <div><img src="assets/images/icon/setting.png" className="img-fluid blur-up lazyload" alt=""> <i className="ti-settings"></i></div>
                                            <div className="show-div setting">
                                                <h6>language</h6>
                                                <ul>
                                                    <li><a href="#">english</a></li>
                                                    <li><a href="#">french</a></li>
                                                </ul>
                                                <h6>currency</h6>
                                                <ul className="list-inline">
                                                    <li><a href="#">euro</a></li>
                                                    <li><a href="#">rupees</a></li>
                                                    <li><a href="#">pound</a></li>
                                                    <li><a href="#">doller</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="onhover-div mobile-cart">
                                            <div><img src="assets/images/icon/cart.png" className="img-fluid blur-up lazyload" alt=""> <i className="ti-shopping-cart"></i></div>
                                            <ul className="show-div shopping-cart">
                                                <li>
                                                    <div className="media">
                                                        <a href="#"><img alt="" className="mr-3" src="assets/images/fashion/product/1.jpg"></a>
                                                        <div className="media-body">
                                                            <a href="#">
                                                                <h4>item name</h4>
                                                            </a>
                                                            <h4><span>1 x $ 299.00</span></h4>
                                                        </div>
                                                    </div>
                                                    <div className="close-circle"><a href="#"><i className="fa fa-times" aria-hidden="true"></i></a></div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <a href="#"><img alt="" className="mr-3" src="assets/images/fashion/product/2.jpg"></a>
                                                        <div className="media-body">
                                                            <a href="#">
                                                                <h4>item name</h4>
                                                            </a>
                                                            <h4><span>1 x $ 299.00</span></h4>
                                                        </div>
                                                    </div>
                                                    <div className="close-circle"><a href="#"><i className="fa fa-times" aria-hidden="true"></i></a></div>
                                                </li>
                                                <li>
                                                    <div className="total">
                                                        <h5>subtotal : <span>$299.00</span></h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="buttons"><a href="cart.html" className="view-cart">view cart</a> <a href="#" className="checkout">checkout</a></div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </header>
        )
    }
}