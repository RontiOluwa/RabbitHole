/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Rabbits from '../../public/png/Rabbits.png'
import RabbitHat from '../../public/png/WhiteRabbit&Stuff.png'
import Queen from '../../public/png/Queen.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
export default class Service extends React.Component  {
    componentDidMount() {
        AOS.init({
            disable: 'mobile',
        });
    }
    render() {
        return (
            <div id="service" className="mw__67">
                <div className="flex mt__5">
                    <div className="w_50 club left left__position" data-aos="fade-right">
                        <img src={Rabbits} alt=""/>
                    </div>
                    <div className="w_50 right right__position" data-aos="fade-left">
                        <li className="line right right__position"></li><br />
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor in neque nisi sit. Pretium leo diam felis quam nunc, egestas. Est nisl, nulla amet facilisis vitae pharetra, non vel. Ultricies pulvinar sit purus, egestas posuere blandit. Id vitae habitant sit urna, sit ut.
                        </p>
                    </div>
                </div>
                <div className="flex mt__5 reverse">
                    <div className="w_50 club left left__position" data-aos="fade-right">
                        <li className="line left left__position"></li><br />
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor in neque nisi sit. Pretium leo diam felis quam nunc, egestas. Est nisl, nulla amet facilisis vitae pharetra, non vel. Ultricies pulvinar sit purus, egestas posuere blandit. Id vitae habitant sit urna, sit ut.
                        </p>
                    </div>
                    <div className="w_50 right right__position" data-aos="fade-left">
                        <img src={RabbitHat} className="w__20" alt=""/>
                    </div>
                </div>
                <div className="flex mt__5">
                    <div className="w_50 club left left__position" data-aos="fade-right">
                        <img src={Queen} alt=""/>
                    </div>
                    <div className="w_50 right right__position" data-aos="fade-left">
                        <li className="line right right__position"></li><br />
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor in neque nisi sit. Pretium leo diam felis quam nunc, egestas. Est nisl, nulla amet facilisis vitae pharetra, non vel. Ultricies pulvinar sit purus, egestas posuere blandit. Id vitae habitant sit urna, sit ut.
                        </p>
                    </div>
                </div>
            </div>
          )
    }
}
