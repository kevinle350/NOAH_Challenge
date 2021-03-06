import React, {useState} from 'react';
import './Footer.css'
import { Button, Card } from 'react-bootstrap';
import user from './images/User.png';
import { FaWallet } from 'react-icons/fa';
import { AiFillDollarCircle } from 'react-icons/ai';
import { HiGift } from 'react-icons/hi';
import { GiSprout } from 'react-icons/gi';


function Footer() {
    //States for footer pages
    const [wallet, setWallet] = useState(false)
    const [earn, setEarn] = useState(false)
    const [borrow, setBorrow] = useState(false)
    const [rewards, setRewards] = useState(true)

    return (
        <>
            <div className='center-footer'>
                <div className='footer-bg'>
                    <div className='personal'>
                        <Card>
                            <div className='personal-data-wrapper'>
                                <div className='personal-data'>
                                    <p>9999</p>
                                    <img className='user-img-footer' src={user} />
                                    <p>Shah</p>
                                </div>
                                <p>500</p>
                            </div>
                        </Card>
                    </div>
                    <div className='footer-wrapper'>
                        <Button
                            href="/wallet"
                            className={!wallet ? 'footer-btn' : 'footer-btn clicked'}
                            onClick={() => { setWallet(true); setEarn(false); setBorrow(false); setRewards(false) }}
                        >
                            <div className='icon-style'><FaWallet /></div>
                            Wallet
                        </Button>
                        <Button
                            href="/earn"
                            className={!earn ? 'footer-btn' : 'footer-btn clicked'}
                            onClick={() => { setWallet(false); setEarn(true); setBorrow(false); setRewards(false) }}
                        >
                            <div className='icon-style'><GiSprout /></div>
                            Earn
                        </Button>
                        <Button
                            href="/borrow"
                            className={!borrow ? 'footer-btn' : 'footer-btn clicked'}
                            onClick={() => { setWallet(false); setEarn(false); setBorrow(true); setRewards(false) }}
                        >
                            <div className='icon-style'><AiFillDollarCircle /></div>
                            Borrow
                        </Button>
                        <Button
                            href="/rewards"
                            className={!rewards ? 'footer-btn' : 'footer-btn clicked'}
                            onClick={() => { setWallet(false); setEarn(false); setBorrow(false); setRewards(true) }}
                        >   
                            <div className='icon-style'><HiGift /></div>
                            Rewards                        
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;