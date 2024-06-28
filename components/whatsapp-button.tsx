import WhatsApp from '@/public/WhatsApp_icon.png.webp';
import Image from 'next/image';
import Link from 'next/link';

export function WhatsappButton() {
  return (
    <Link
      id="WHATSAPP_ICON"
      href="https://wa.me/6287716254614"
      className="fixed bottom-8 right-4 z-[80] animate-fade-in-bottom duration-2000"
    >
      <Image src={WhatsApp} width={64} height={64} alt="WhatsApp" />
    </Link>
  );
}
