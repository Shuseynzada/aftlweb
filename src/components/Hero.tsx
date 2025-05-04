import Image from 'next/image';

type HeroProps = {
  title: string;
  subtitle: string;
  imgSrc: string;
};

export default function Hero({ title, subtitle, imgSrc }: HeroProps) {
  return (
    <section className="relative h-screen">
      <Image
        src={imgSrc}
        alt="Hero background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white">{title}</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-200">{subtitle}</p>
      </div>
    </section>
  );
}