import Image from "next/image";

const certifications = [
  { name: "ABS", src: "/images/home/logo_abs.png" },
  { name: "ClassNK", src: "/images/home/logo_classnk.png" },
  { name: "Bureau Veritas", src: "/images/home/logo_bureauveritas.png" },
  { name: "DNV", src: "/images/home/logo_dnv.png" },
  { name: "GL", src: "/images/home/logo_gl.png" },
  { name: "KR", src: "/images/home/logo_kr.png" },
  { name: "Lloyd's Register", src: "/images/home/logo_lr.png" },
  { name: "RINA", src: "/images/home/logo_rina.png" },
];

const doubled = [...certifications, ...certifications];

export default function HomeCertifications() {
  return (
    <section className="bg-white py-[60px] overflow-hidden">
      <p className="text-[#2e3b5d] text-lg font-semibold mb-10 text-center">
        獲得國際船級社專業認證
      </p>
      <div className="relative w-full">
        <div
          className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }}
        />

        <div
          className="flex items-center gap-8 md:gap-16"
          style={{
            width: "max-content",
            animation: "marquee 20s linear infinite",
          }}
        >
          {doubled.map((cert, i) => (
            <div key={i} className="relative h-[48px] w-[80px] md:h-[68px] md:w-[120px] flex-shrink-0">
              <Image
                src={cert.src}
                alt={cert.name}
                fill
                className="object-contain opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
