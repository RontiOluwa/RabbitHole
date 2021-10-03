import Image from 'next/image'
import LogoAsset from '../../public/svg/LogoAsset.svg'
import LogoText from '../../public/svg/icons.svg'


export default function Top() {
  return (
    <div className="header">
      <h4 className="animate__animated animate__fadeInDown">
          <span data-text="FALL">FALL</span><br />
          <span data-text="DOWN" className="down">DOWN </span><br />
          THE <br />
          RABBIT <br />
          H<Image width="50" height="50" src={LogoAsset} alt=""/>LE
      </h4>
      <div className="center">
          <p className="shimmer__effect">Enter a social club like no other</p>
          <div className="animate__animated animate__rubberBand animate__delay">
            <Image width="200" height="200" src={LogoText} alt=""/>
          </div>
      </div>
    </div>
  )
}
