import Image from 'next/image'
import Services from '../components/Index/Services'
import Card from '../components/Index/Card'
import FAQ from '../components/Index/FAQ'
import Step from '../components/Index/Step'
import Contact from '../components/Index/Contact'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Services />
      <Card />
      <Step />
      <FAQ />
      <Contact />
    </div>
  )
}
