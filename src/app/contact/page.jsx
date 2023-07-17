import React from 'react';
import style from './page.module.css';
import Image from 'next/image';
import Button from '@/Components/Button/Button';

const Contact = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Let's Keep in Touch</h1>
            <div className={style.contact}>
                <div className={style.imgContainer}>
                    <Image src="/man.png" fill={true} alt="image" 
                    className={style.image}/>
                </div>
                <div className={style.form}>
                    <input type="text" placeholder='name' className={style.input}/>
                    <input type="email" placeholder='email' className={style.input}/>
                    <textarea className={style.textArea} placeholder='message' cols="50" row="50">
                    </textarea>
                    <Button url="#" text="Send"/>
                </div>
            </div>
        </div>
    );
};

export default Contact;