"use client"
import Image from 'next/image'
import style from './page.module.css';
import hero from '../../public/hero.png';
import Button from '@/Components/Button/Button';

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.item}>
        <h1 className={style.title}>
           Realm
          Discover a World of Artistic Brilliance</h1>
        <p className={style.desc}>Turning your Idea into Reality. We bring together the teams from the global tech industry. Good service and standard design is our motto.</p>
        {/* <button className={style.container}>See Our Works</button> */}
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={style.item}></div>
      <Image src={hero} className={style.bannerImg} alt='img' />
    </div>
  )
}
