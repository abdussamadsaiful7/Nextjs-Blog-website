'use client'
import React from 'react';
import style from './page.module.css';
import Image from 'next/image';
import Button from '@/Components/Button/Button';

const About = () => {
    return (
        <div className={style.container}>
            <div className={style.imgContainer}>
                <Image className={style.img} src="/about4.jpg" fill={true} alt="" />
            </div>
            <div className={style.imgText}>
                <h1 className={style.imgTitle}>Digital Storyteller</h1>
                <h1 className={style.imgDecs}>Handcrafting award winning digital experiences</h1>
            </div>
            <div className={style.textContainer}>

                <div className={style.item}>
                    <h1 className={style.title}>Who are we?</h1>
                    <p className={style.desc}>Welcome to our art gallery store! We are a curated space that showcases a diverse collection of artworks from talented artists, ranging from paintings and sculptures to photography and mixed media. Our goal is to inspire and engage art enthusiasts, collectors, and the broader community with captivating and thought-provoking pieces.
                        <br />  <br />
                        Whether you are seeking to enrich your personal art collection or simply appreciate creativity at its finest, we aim to provide a delightful experience through our carefully curated exhibits.</p>
                </div>

                <div className={style.item}>
                    <h1 className={style.title}>What we do?</h1>
                    <p className={style.desc}>
                        We are an art gallery store, passionately curating and exhibiting a diverse range of captivating artworks. Our mission is to promote talented artists, inspire creativity, and provide art enthusiasts with an enriching experience. Discover stunning paintings, sculptures, photography, and more, as we create a haven for art lovers and collectors alike.
                        <br/>  <br />
                        - Dynamic design 
                        <br/>
                        - Fast and handy mobile service
                    </p>
                    <Button url="/contact" text="Contact"/>
                </div>
            </div>
        </div>
    );
};

export default About;