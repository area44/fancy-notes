"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface AdsenseProps {
  adSlot?: string;
}

export default function Adsense({ adSlot }: AdsenseProps) {
  const pathname = usePathname();
  const adClient =
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-2837724975096238";

  useEffect(() => {
    if (!adClient) return;

    try {
      // @ts-expect-error
      const ads = window.adsbygoogle || [];
      // @ts-expect-error
      window.adsbygoogle = ads;
      ads.push({});
    } catch (err) {
      console.error("Adsense push error:", err);
    }
  }, [pathname, adClient]);

  if (!adClient) return null;

  return (
    <div className="my-8 flex justify-center overflow-hidden">
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", minHeight: "250px" }}
        data-ad-client={adClient}
        {...(adSlot ? { "data-ad-slot": adSlot } : {})}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
