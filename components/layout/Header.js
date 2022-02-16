import React from 'react';
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../../assets/img/logo.png";
import TwitterImage from "../../assets/img/twitter.png";
import InstaImage from "../../assets/img/insta.png";
import MenuIcon from "../../assets/img/menu-icon.png";
import CloseIcon from "../../assets/img/close-icon.png";

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-0 py-5 main-navigation">
            <div className="container">
                <Link passHref className="navbar-brand" href="/">
                    <Image alt={'Logo Image'} src={LogoImage} className="img-fluid"/>
                </Link>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <Image alt={'twitter'} src={TwitterImage} className="img-fluid"/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <Image alt={'instagram'} src={InstaImage} className="img-fluid"/></a>
                    </li>
                    <li className="nav-item custom-btn-li">
                        <a className="nav-link custom-btn" href="#">join discord!</a>
                    </li>
                    <li className="nav-item ml-5">
                        <a className="nav-link drawer-menu-opener" href="#">
                            <Image alt={'Menu Icon'}
                                   src={MenuIcon}
                                   className="img-fluid"/></a>
                    </li>
                </ul>

                <div className="drawer-menu">
                    <div className="drawer-menu-closer">
                        <Image alt={'close Icon'} src={CloseIcon} className=""/>
                    </div>
                    <div className="drawer-menu-ul">
                        <ul className="list-unstyled">
                            <li className="drawer-menu-li">
                                <a href="#about">about</a>
                            </li>
                            <li className="drawer-menu-li">
                                <a href="#roadmap">roadmap</a>
                            </li>
                            <li className="drawer-menu-li">
                                <a href="#artist">the artist</a>
                            </li>
                            <li className="drawer-menu-li">
                                <a href="#faq">faq</a>
                            </li>
                        </ul>
                    </div>
                    <div className="drawer-menu-social">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="#">
                                    <Image alt={'twitter'} src={TwitterImage}/></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <Image alt={'instagram'} src={InstaImage} className="img-fluid"/></a>
                            </li>
                        </ul>
                    </div>
                    <div className="drawer-menu-disclaimer">
                        <a href="javascript:void(0)" data-toggle="modal"
                           data-target="#exampleModal">disclaimer</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
