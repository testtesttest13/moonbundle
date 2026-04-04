import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.png"
        alt="Moonbundles"
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
      />
      <span className="text-lg font-bold tracking-tight text-white font-[family-name:var(--font-heading)]">
        Moonbundles
      </span>
    </div>
  );
}
