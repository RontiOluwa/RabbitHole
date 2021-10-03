/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image'
import icons from '../../public/svg/icons.svg'
import Bg from '../../public/svg/black-and-white-alice_0001_pocket-watch.svg'
import AOS from 'aos'

export default class FAQ extends React.Component {
    componentDidMount() {
        AOS.init();
    }
    render() {
        return (
            <div className="faq relative mt__5">
                <div className="mw__67">
                    <div className="center">
                        <Image width="100" height="50" src={icons} alt=""/>
                        <h4 className="sub__title">FAQ</h4>
                    </div>
                    <div className="flex faq__list">
                        <div className="w_50">
                            <ul>
                                <li data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                    <b>
                                        Is membership <br />lifetime?
                                    </b>
                                    <p>
                                        As long as you hold Rabbit Hole NFTs, you are guaranteed to have access to Rabbit Hole and shadow__efftect that corresponds to your level of membership.
                                    </p>
                                </li>
                                <li data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                    <b>
                                        Is membership <br />refundable?
                                    </b>
                                    <p>
                                        You can transfer or sell your NFTs at whatever their market value is at the time, but your membership access will be revoked until you again hold a NFT to qualify for membership. There will be rewards for members who continue to hold through every season, and those who join in early.
                                    </p>
                                </li>
                                <li data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                    <b>
                                        Are there rewards to buying in <br />Season 1?
                                    </b>
                                    <p>
                                        Yes! Season 1 will be the most important community in Rabbit Hole&apos;s ecosystem, as they will have the most influence over future proposals in the DAO, and will receive other exclusive benefits for being early.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="w_50">
                            <ul>
                                <li data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                    <b>
                                        When will be the launch of the private <br /> Discord server, shadow__efftect
                                    </b>
                                    <p>
                                        There are a few channels available for public access on our Discord now, and we will launch the private features of shadow__efftect soon after we reach enough members to justify opening access.
                                    </p>
                                </li>
                                <li data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                    <b>
                                        When will there be community <br /> governance?
                                    </b>
                                    <p>
                                        As season 1 members grow, we will launch the Rabbit Hole DAO and enact governance, allowing the community to vote on future proposals and projects starting in season 2.
                                    </p>
                                </li>
                                <li data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                    <b>
                                        What else can the NFTs be used for?
                                    </b>
                                    <p>
                                        We will have an internal currency / token ($MAD) that you will automatically get airdropped just for holding our NFTs. $MAD will be our internal currency used for a variety of Rabbit Hole services, not just used for governance or membership. When coliving spaces are announced, you&apos;ll be able to pay your rent in $MAD as well!
                                    </p>
                                </li>
                                <li data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                    <b>
                                        Will there be social avatars, or a metaverse?
                                    </b>
                                    <p>
                                        We are partnering with several gaming platforms that will allow for customized avatars from Rabbit Hole, and are committed to building spaces for members in whatever the most popular metaverse platforms become, including VR spaces.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img alt="" width="" height="" className="bg__right" src={Bg}/>
            </div>
          )
    }
}
