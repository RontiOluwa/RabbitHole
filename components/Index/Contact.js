import Image from 'next/image'
import icons from '../../public/svg/icons.svg'


export default function Contact() {
  return (
    <div className="contact mw__67" id="contact">
        <div className="center">
            <Image width="100" height="50" src={icons} alt=""/>
            <p className="desc"> WE&apos;RE ALL $MAD HERE</p>
            <div className="mt__5">
                <h3 className="sub__title">Contact</h3>
                <p>For Partnerships and Questions, Available At All Hours</p>
            </div>
            <div className="mt__5">
                <h3 className="sub__title font__sm">Main Email</h3>
                <p>team@rabbithole.social</p>
            </div>
            <div className="mt__5">
                <h3 className="sub__title font__sm">Support Email</h3>
                <p>help@rabbithole.social</p>
            </div>
        </div>
    </div>
  )
}
