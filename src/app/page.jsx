"use client"
import Image from 'next/image'
import style from './page.module.css';
import hero from '../../public/hero.png';

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.item}>
        <h1 className={style.title}>Better design <br/> for your digital products</h1>
        <p className={style.desc}>Turning your Idea into Reality. We bring together the teams from the global tech industry. Good service and standard design is our motto.</p>
        <button className={style.button}>See Our Works</button>
      </div>
      <div className={style.item}></div>
       <Image src={hero} className={style.bannerImg} alt='img'/>
    </div>
  )
}
