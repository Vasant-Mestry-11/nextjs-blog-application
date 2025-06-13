import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return <section className={classes.hero}>
    <div className={classes.image}>
      <Image src="/images/site/vasant.jpg" alt='vasant image' height={300} width={300} />
    </div>
    <h1>Hi, I&#39;m Vasant</h1>
    <p>I blog about web development - especially frontend frameworks like React</p>
  </section>
}

export default Hero