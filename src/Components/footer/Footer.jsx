import React from 'react';
import style from './page.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div>@2023 Art Gallery. All right reserved</div>
            <div className={style.social}>

                <Image src="/facebook.png"  className={style.icon} width={30} height={30} alt='img' />
                <Image src="/linkedin.png"  className={style.icon} width={30} height={30} alt='img' />
                <Image src="/pinterest.png" className={style.icon}  width={30} height={30} alt='img' />
                <Image src="/youtube.png"   className={style.icon}width={30} height={30} alt='img'     />
                <Image src="/instagram.png" className={style.icon}  width={30} height={30} alt='img' />

            </div>
        </div>
    );
};

export default Footer;