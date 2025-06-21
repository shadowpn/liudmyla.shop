import Image from "next/image";

export default function Logo() {
  return (
    <div className="mb-8">
      <Image
        src="/logo.webp"
        alt="Liudmyla Logo"
        width={500}
        height={200}
        priority
      />
    </div>
  );
}
