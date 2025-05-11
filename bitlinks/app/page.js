"use client"
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
<main>
  <section>
    <div>
     <div>
      The best URL shortener in Market
     </div>
     <p>We are the most stright forward URl shortener in the world. Most of the URl shortener will track you or ask ypu to give your details for login. We understand you needs and hence we have created this URL shortener</p>
     <div className="flex items-center gap-4">
          <Link href="/shorten">
            <button className="btn">Try now</button>
          </Link>
          <Link href="https://github.com/UbaidBinWaris">
            <button className="btn">Github</button>
          </Link>
        </div>
    </div>
    <div>
      <Image 
        src="/images/hero.png"
        alt="hero"
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
    </div>
  </section>
</main>
  );
}
