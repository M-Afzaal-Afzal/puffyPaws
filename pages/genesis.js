import React, {useState} from 'react';
// import {Header} from "../components/layout/Header";
import Image from 'next/image';
import GenesisImg from '../assets/img/genesis-img.png';
import GenesisLogo from '../assets/img/genesis-logo-img.png';
import TwitterImg from '../assets/img/genesis-twitter.png'
import InstaImg from '../assets/img/genesis-insta.png';
import GenesisMenu from '../assets/img/genesis-menu.png';
import CloseIcon from '../assets/img/close-icon.png';
import NavTwitterImg from '../assets/img/twitter.png';
import NavInstagramImg from '../assets/img/insta.png';
import {FaArrowLeft,FaArrowRight} from "react-icons/fa";

const Genesis = () => {

    const [bidValue, setBidValue] = useState(1);

    const [imgValue,setImgValue] = useState(1);

    const onNextArrowClickHandler = () => {
        if (imgValue < 9) {
            setImgValue(imgValue + 1)
        } else {
            setImgValue(1);
        }
    }

    const onPrevArrowClickHandler = () => {
        if (imgValue > 1) {
            setImgValue(imgValue - 1)
        } else {
            setImgValue(9)
        }
    }

    const onBidValueChangeHandler = (e) => {
        setBidValue(+e.target.value);
    }

    const bidClickHandler = () => {
        console.log('bidding', bidValue)
    }

    return (
        <div className={'genesis-page'}>

         {/*<Header/>*/}

            <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-0 py-5 main-navigation">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <Image alt={'genesis logo'} src={GenesisLogo} className="img-fluid"/></a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Image alt={'twitter'} src={TwitterImg} className="img-fluid"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Image alt={'instagram'} src={InstaImg}
                                                                  className="img-fluid"/></a>
                        </li>
                        <li className="nav-item custom-btn-li genesis-btn">
                            <a className="nav-link custom-btn" href="#">join discord!</a>
                        </li>
                        <li className="nav-item ml-5">
                            <a className="nav-link drawer-menu-opener" href="#">
                                <Image alt={'genesis menu'} src={GenesisMenu}
                                     className="img-fluid"/></a>
                        </li>
                    </ul>
                    <div className="drawer-menu">
                        <div className="drawer-menu-closer">
                            <Image alt={'close icon'} src={CloseIcon} className=""/>
                        </div>
                        <div className="drawer-menu-ul">
                            <ul className="list-unstyled">
                                <li className="drawer-menu-li">
                                    <a href="#">about</a>
                                </li>
                                <li className="drawer-menu-li">
                                    <a href="#">roadmap</a>
                                </li>
                                <li className="drawer-menu-li">
                                    <a href="#">the artist</a>
                                </li>
                                <li className="drawer-menu-li">
                                    <a href="#">faq</a>
                                </li>
                            </ul>
                        </div>
                        <div className="drawer-menu-social">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <Image src={NavTwitterImg} alt={'twitter '}/></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <Image alt={'instagram'} src={NavInstagramImg}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="drawer-menu-disclaimer">
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#exampleModal">disclaimer</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="genesis-section">
                <div className="container">
                    <div className="bidding-area">
                        <div className="make-a-bid">
                            <div className="paw-image-outer">
                                <Image priority={true} width={316} height={324} alt={'genesis image'} src={`/img/${imgValue}.png`} className="img-fluid paw-image"/>
                            </div>
                            <div className="paw-desc">

                                {/* todo - this is the changing - copy this */}
                                {/* Genesis Arrows are there sheraz bhai -  */}
                                <div className={'arrows'}>
                                    <div onClick={onPrevArrowClickHandler} className={'arrow'}>
                                        <FaArrowLeft/>
                                    </div>
                                    <div onClick={onNextArrowClickHandler} className={'arrow arrow-2'}>
                                        <FaArrowRight/>
                                    </div>
                                </div>

                                {/* End of the arrows */}

                                <div className="paw-name">paw name</div>
                                <div className="current-bid-and-winner">
                                    <div className="current-bid">
                                        <div className="title">current bid</div>
                                        <div className="number">90.00</div>
                                    </div>
                                    <div className="winner">
                                        <div className="title">winner</div>
                                        <div className="number">0x91...e1f5</div>
                                    </div>
                                </div>
                                <div className="bid-amount">
                                    <input onChange={onBidValueChangeHandler} type="text" name="" value={bidValue} className="bid-amount-field"/>
                                    <span>eth</span>
                                </div>
                                <div className="bid-btn">
                                    <button onClick={bidClickHandler} className="custom-btn">bid</button>
                                </div>
                            </div>
                        </div>


                        <div className="bid-history">
                            <ul className="bid-list">
                                <li className="bid-list-item">
                                    <a href="#" className="bid-list-item-inner">
                                        <div className="name-and-image">
                                            <img src="img/1.png" alt="" className="img-fluid"/>
                                            <span>markstevens.eth</span>
                                        </div>
                                        <div className="number">
                                            <i className="fa fa-align-justify"></i>
                                            <span>25.00</span>
                                            <i className="fa fa-external-link"></i>
                                        </div>
                                    </a>
                                </li>
                                <li className="bid-list-item">
                                    <a href="#" className="bid-list-item-inner">
                                        <div className="name-and-image">
                                            <img src="img/1.png" alt="" className="img-fluid"/>
                                            <span>markstevens.eth</span>
                                        </div>
                                        <div className="number">
                                            <i className="fa fa-align-justify"></i>
                                            <span>25.00</span>
                                            <i className="fa fa-external-link"></i>
                                        </div>
                                    </a>
                                </li>
                                <li className="bid-list-item">
                                    <a href="#" className="bid-list-item-inner">
                                        <div className="name-and-image">
                                            <img src="img/1.png" alt="" className="img-fluid"/>
                                            <span>markstevens.eth</span>
                                        </div>
                                        <div className="number">
                                            <i className="fa fa-align-justify"></i>
                                            <span>25.00</span>
                                            <i className="fa fa-external-link"></i>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                            <div className="bid-history-link-outer">
                                <a href="#" className="bid-history-link">bid history</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*// <!-- Modal -->*/}
            <div className="modal fade disclaimer-modal" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <button type="button" className="close close-modal" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body">
                            <h4 className="disclaimer-heading">disclaimer</h4>
                            <p>The Puffy Paws Pack NFT’s are non-fungible tokens representing ownership of a digital
                                artwork only. Accordingly, no information on this website (or any other documents
                                mentioned therein) is or may be considered to be advice or an invitation to enter into
                                an agreement for any investment purpose. Further, as Puffy Paws Pack NFT’s represent
                                artwork, nothing on this website qualifies or is intended to be an offering of
                                securities in any jurisdiction nor does it constitute an offer or an invitation to
                                purchase shares, securities or other financial product.</p>
                            <p>Due to the artistic nature of the project, neither this document nor the Puffy Paws Pack
                                NFT’s have been registered with or approved by any regulator in any jurisdiction. It
                                remains in your responsibility to assure that the purchase of the Puffy Paws Pack NFT
                                and the associated art is in compliance with laws and regulations in your
                                jurisdiction.</p>
                            <p>We undertake no obligation to publicly update or revise any information or opinions
                                published on the website. We reserve the right to amend the information at any time
                                without prior notice. <br/>Puffy Paws Pack is not a registered broker, analyst or
                                investment advisor. If you are willing to, or have purchased Puffy Paws Pack, you agree
                                that you are not purchasing a security or investment. The Puffy Paws Pack team can not
                                be held liable for any losses or taxes you may incur. Do conduct your own due diligence
                                and consult your financial advisor before making any investment decisions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Genesis;
