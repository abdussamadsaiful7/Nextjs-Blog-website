import React from 'react';
import style from './page.module.css';
import Image from 'next/image';

const BlogPost = () => {
    return (
        <div className={style.container}>
            <div className={style.top}>
                <div className={style.info}>
                    <h1 className={style.title}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h1>
                    <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit molestias praesentium voluptates culpa id animi quisquam rem repudiandae delectus hic fugit voluptate, voluptatum veniam ducimus nemo et deleniti dolor exercitationem, iste ullam porro doloremque error tempore. Expedita, atque eius!</p>
                    <div className={style.author}>
                        <Image src="/samad.jpg" alt=''
                        width={40}
                        height={40}
                        className={style.avatar}/>
                        <span className={style.username}>Samad Saiful</span>
                    </div>
                </div>

                <div className={style.imageContainer}>
                    <Image src="/img1.jpg" width={400} height={250} alt=""
                    className={style.image}/>
                </div>

            </div>
            <div className={style.content}>
                <p className={style.text}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, vitae! Obcaecati sint ab quae! Magnam minima repudiandae quod ut esse, excepturi explicabo neque facere quae nostrum dolor corrupti mollitia adipisci culpa ea numquam aperiam laborum distinctio id illum. Autem vitae voluptates aspernatur? Qui, a architecto harum similique at voluptates sed repudiandae sit vitae deleniti totam impedit eaque laboriosam ab delectus. At fugit dignissimos nemo blanditiis error eligendi minima facilis rerum quis necessitatibus ipsam sapiente nobis incidunt ducimus eaque ea laboriosam ipsum et magnam provident vel odio laudantium, cupiditate perspiciatis. Quas tempore doloremque accusamus recusandae reiciendis, eius culpa non quibusdam nemo.
                    <br/> <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos magni totam doloremque non harum deleniti itaque iure quasi nam mollitia necessitatibus quaerat ea cumque assumenda nobis perferendis ducimus inventore nisi consequuntur, officia modi voluptatibus nihil et? Cum ullam, nisi esse consectetur ad harum sequi iure dolore nobis, vitae blanditiis labore iusto expedita, minima veniam magni odio excepturi quae enim! Laboriosam voluptas tempora vel earum? Rem nostrum tempora ex aliquam accusamus, tempore pariatur aspernatur! Fugiat quod amet assumenda in, iste quisquam, culpa maxime eaque aut neque reiciendis hic. Voluptatibus eveniet assumenda, itaque doloribus quia in quidem recusandae aliquam voluptatum, soluta iste?
                </p>
            </div>
        </div>
    );
};

export default BlogPost;