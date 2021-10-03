import Nav from '../components/Index/Nav'
import Top from '../components/Index/Top'

export default function Home() {
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper__container">
            <Nav />
            <Top />
        </div>
      </div>  
    </div>
  )
}
