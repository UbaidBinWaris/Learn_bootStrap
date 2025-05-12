// "use client"
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
<main>
  <section className="grid grid-cols-2 bg-purple-300  gap-5">
    <div className="flex flex-col justify-center items-start gap-7 px-20 py-10">
     <div className="text-5xl font-bold">
      The best URL shortener in Market
     </div >
     <p className="text-lg  px-20">
  We are the most stright forward URl shortener in the world. Most of the URl shortener will track you or ask ypu to give your details for login. We understand you needs and hence we have created this URL shortener</p>
     <div className="flex items-center gap-4">
          <Link href="/shorten">
            <button className="btn">Try now</button>
          </Link>
          <Link href="https://github.com/UbaidBinWaris">
            <button className="btn">Github</button>
          </Link>
        </div>
    </div>
    <div className="flex justify-center items-center">
      <Image 
        src="/vector.jpg"
        alt="hero"
        width={500}
        height={500}
        className="w-full h-full object-contain"
      />
    </div>
  </section>
</main>
  );
}
