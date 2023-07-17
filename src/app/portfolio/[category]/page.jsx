"use client"
import React from 'react';
import style from './page.module.css';
import Button from '@/Components/Button/Button';
import Image from 'next/image';
const Category = ({ params }) => {
    console.log(params);
    return (
        <div className={style.container}>
            <h1 className={style.catTitle} >{params.category}</h1>

            {/* card-1 */}
            <div className={style.item}>
                <div className={style.content}>
                    <h1 className={style.title}>Creative Digital design</h1>
                    <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis quod nihil nam iusto consequuntur nemo dolorem voluptates numquam, totam reiciendis maiores ad tempora repudiandae cum eligendi ea nobis possimus.</p>
                    <Button text="See more" url="#" />
                </div>
                <div className={style.imgContainer}>
                    <Image className={style.img} src="/pic1.jpg" fill={true} alt="" />
                </div>
            </div>

            {/* card-2 */}
            <div className={style.item}>
                <div className={style.content}>
                    <h1 className={style.title}>Creative Portfolio</h1>
                    <p className={style.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, modi? Ea voluptatum natus alias blanditiis veniam perspiciatis, est illo ab autem deleniti, at numquam ipsam impedit sapiente voluptatibus soluta commodi!</p>
                    <Button text="See more" url="#" />
                </div>
                <div className={style.imgContainer}>
                    <Image className={style.img} src="/pic2.jpg" fill={true} alt="" />
                </div>
            </div>

            {/* card-3 */}
            <div className={style.item}>
                <div className={style.content}>
                    <h1 className={style.title}>Exclusive Illustrators Design</h1>
                    <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquam dolore sed similique expedita, id quod amet aperiam at dolores earum possimus reiciendis neque nesciunt dolorum ipsa in. Et, omnis.</p>
                    <Button text="See more" url="#" />
                </div>
                <div className={style.imgContainer}>
                    <Image className={style.img} src="/pic3.jpg" fill={true} alt="" />
                </div>
            </div>
            {/* card-4 */}
            <div className={style.item}>
                <div className={style.content}>
                    <h1 className={style.title}>Exclusive Illustrators Design</h1>
                    <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquam dolore sed similique expedita, id quod amet aperiam at dolores earum possimus reiciendis neque nesciunt dolorum ipsa in. Et, omnis.</p>
                    <Button text="See more" url="#" />
                </div>
                <div className={style.imgContainer}>
                    <Image className={style.img} src="/pic4.jpg" fill={true} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Category;