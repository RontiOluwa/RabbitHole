/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import icons from '../../public/svg/icons.svg'
import SVG from '../../public/png/down_web.png'

export default function Home() {
  return (
    <div className="step mw__67">
      <div className="center">
        <Image width="100" height="50" src={icons} alt=""/>
        <h4 className="sub__title">FURTHER DOWN THE RABBIT HOLE</h4>
        <p className="sub__desc">Lorem ipsum</p>
      </div>
      {/* <div className="down__svg"></div> */}
      <div>
        <img src={SVG} className="step___img" alt="" />
      </div>
    </div> 
  )
}
