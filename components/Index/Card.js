/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image'
import icons from '../../public/svg/icons.svg'
import Icon1 from '../../public/svg/Icon1.svg'
import Icon2 from '../../public/svg/Icon2.svg'
import Icon3 from '../../public/svg/Icon3.svg'
import Art1 from '../../public/png/Art1.png'
import Art2 from '../../public/png/Hatter.png'
import IconBlock2 from '../../public/svg/IconBlock2.svg'
import IconBlock3 from '../../public/svg/IconBlock3.svg'
import IconBlock4 from '../../public/svg/IconBlock4.svg'
import IconBlock1 from '../../public/svg/IconBlock1.svg'
import IconBlock from '../../public/svg/Icon Block.svg'
import Royal from '../../public/png/Royal.png'
import Icons2 from '../../public/svg/Icon Block (2).svg'
import Icons1 from '../../public/png/Icon Block (1).png'
import Bg from '../../public/svg/black-and-white-alice_0008_key.svg'
import AOS from 'aos'

const Cards = [
    {
      name: 'Tier 1',
      active: true,
      desc: 'WHITE RABBIT',
      perks: 'TIER 1 PERKS',
      features : [
        {
            image: Icon1,
            details: 'Access to Trading insights channel for in-depth strategies/analyses for stocks and crypto.'
        },
        {
            image: Icon2,
            details: 'Vetted job board and meetup/matchmaking service.'
        },
        {
            image: Icon3,
            details: 'Exclusive access to events, brand promotions and discounts.'
        }
      ],
      image: Art1,
      price: 0.1,
      supply: '0000 / 5000'
    },
    {
        name: 'Tier 2',
        active: false,
        desc: 'MAD HATTER',
        perks: 'TIER 2 PERKS',
        features : [
            {
                image: IconBlock2,
                details: ' All Tier 1 Perks',
                more: true
            },
            {
                image: IconBlock1,
                details: 'Professional feedback provided by our Resident Artist for all your creative work.'
            },
            {
                image: IconBlock3,
                details: 'Professional feedback provided by our Resident Artist for all your creative work.'
            },
            {
                image: IconBlock4,
                details: 'Virtual and physical co-working spaces.'
            }
        ],
        image: Art2,
        price: 0.2,
        supply: '0000 / 3000'
    },
    {
        name: 'Tier 3',
        active: false,
        desc: 'ROYAL OF HEARTS',
        perks: ' TIER 3 PERKS',
        features : [
            {
                image: IconBlock2,
                details: 'All Tier 1 & 2 Perks',
                more: true
            },
            {
                image: IconBlock,
                details: 'Virtual concierge service 24/7.'
            },
            {
                image: Icons1,
                details: 'Personal Investment management and advisory.'
            },
            {
                image: Icons2,
                details: 'Personalized AI service acting as a customized virtual assistant.'
            }
        ],
        image: Royal,
        price: 0.3,
        supply: '0000 / 2000'
    }
]
  

export default class Top extends React.Component {
    componentDidMount() {
        AOS.init();
    }
    render() {
        return (
            <div className="paths relative" id="membership">
                <div className="mw__67">
                <div className="center">
                    <Image width="100" height="50" src={icons} alt=""/>
                    <h4 className="sub__title">CHOOSE YOUR PATH INTO
                    <br />
                    <span className="shadow__efftect"> WONDERLAND </span> </h4>
                    <p className="sub__desc">Lorem ipsum</p>
                </div>
                <div className="flex">
                    {
                        Cards.map((item, i) => {
                            return(
                                <div key={i} className="card" data-aos="zoom-in">
                                    <div className="card__top">
                                        <b>{item.name}</b>
                                        <span className="card__checkmark"></span>
                                    </div>
                                    <p>{item.desc}</p>
                                    <li className="line left"></li><br />
                                    <span>
                                        {item.perks}:
                                    </span>
                                    <div>
                                        <ul>
                                            {
                                                item.features.map((list, x) => {
                                                   return (
                                                    <li key={x}>
                                                        <Image width="15" height="15" src={list.image} alt=""/>
                                                        <a className={list.more? "light__red": ''}>
                                                            {list.details}
                                                        </a>
                                                    </li>
                                                   )
                                                })
                                            }
                                        </ul>
                                        <div className="art">
                                            <img width="300" height="350" src={item.image} alt=""/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex">
                                            <div className="w-72 card__figures">
                                                <label>
                                                    Price:
                                                </label>
                                                <br />
                                                <b>{item.price} ETH</b>
                                            </div>
                                            <div className="w_50 card__figures">
                                                <label>
                                                    Supply:
                                                </label>
                                                <br />
                                                <b>{item.supply}</b>
                                            </div>
                                        </div>
                                        <div className="card__form">
                                            <input 
                                                className="card__amount" 
                                                type="number" 
                                                placeholder="Enter Amount"
                                                min="1"
                                                max="4"
                                                onChange={(evt) =>{
                                                    if(item.name === 'Tier 1') {
                                                        if(evt.target.value > 5)
                                                        {evt.target.value = 5}
                                                    } else if (item.name === 'Tier 2'){
                                                        if(evt.target.value > 3)
                                                        {evt.target.value = 3}
                                                    } else if (item.name === 'Tier 3'){
                                                        if(evt.target.value > 2)
                                                        {evt.target.value = 2}
                                                    }
                                                }}
                                            />
                                            <button>Mint</button>
                                        </div>
                                    </div>
                                </div>           
                            )
                        })
                    }
                    </div>
                </div>
                <img width="450" height="450" className="bg__left" src={Bg} alt=""/>
            </div>
          )
    }
}
