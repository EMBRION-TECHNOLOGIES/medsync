'use client';

import Button from '@/components/ui/button';
import { Apple, Smartphone } from 'lucide-react';

export default function DownloadButtons() {
  const appStoreUrl = process.env.NEXT_PUBLIC_APP_STORE_URL;
  const googlePlayUrl = process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL;

  if (!appStoreUrl && !googlePlayUrl) {
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="/contact">
          <Button
            variant="primary"
            size="lg"
            className="shadow-lg hover:shadow-xl"
          >
            Get Started
          </Button>
        </a>
        <a href="/contact">
          <Button
            variant="outline"
            size="lg"
          >
            Join Waitlist
          </Button>
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      {appStoreUrl && (
        <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant="primary"
            size="lg"
            className="shadow-lg hover:shadow-xl"
          >
            <Apple className="w-5 h-5 mr-2" />
            Download for iOS
          </Button>
        </a>
      )}
      {googlePlayUrl && (
        <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="lg"
          >
            <Smartphone className="w-5 h-5 mr-2" />
            Download for Android
          </Button>
        </a>
      )}
    </div>
  );
}
