import React, {useState} from 'react';
import {Header} from "../components/layout/Header";
import CatImg from '../assets/img/mint-cat.png'
import Image from 'next/image'

const Mint = () => {

    const [mintValue, setMintValue] = useState(1);

    const onMinusClickHandler = () => {
        if (mintValue <= 1) return;
        setMintValue(mintValue - 1)
    }

    const onPlusClickHandler = () => {
        if (mintValue >=5) return;
        setMintValue(mintValue + 1);
    }

    const onValueInputHandler = (e) => {
        if (+e.target.value <= 1 || +e.target.value >=5) return;
        setMintValue(+e.target.value);

    }

    // Mint button click handler
    const mintClickHandler = () => {
        console.log('minting')
    }

    return (
        <div className={'mint-page'}>
            <Header/>
            <div className="mint-section">
                <div className="container">
                    <div className="mint-product">
                        <div className="mint-image-outer">
                            <Image alt={'cat image'} src={CatImg} className="img-fluid mint-image"/>
                        </div>
                        <div className="mint-quantity-outer">
                            <div onClick={onMinusClickHandler} className="minus-btn">-</div>
                            <div className="qty-field button">
                                <input onChange={onValueInputHandler} type="text" name="" value={mintValue}/>
                            </div>
                            <div onClick={onPlusClickHandler} className="plus-btn">+</div>
                        </div>
                        <div className="mint-btn-outer">
                            <button onClick={mintClickHandler} className="custom-btn">mint!</button>
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

export default Mint;
