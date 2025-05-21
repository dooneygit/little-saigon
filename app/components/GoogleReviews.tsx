'use client';

import { useEffect } from 'react';

export default function GoogleReviews() {
  useEffect(() => {
    const scriptId = 'elfsight-platform-script';

    // Avoid duplicating the script if already loaded
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="elfsight-app-9fc2a77d-9d03-4e54-a9ec-db46213e113d" data-elfsight-app-lazy></div>
  );
}
