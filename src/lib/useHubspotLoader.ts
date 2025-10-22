import { useEffect, useState } from 'react';

export default function useHubspotLoader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if ((window as any).hbspt) {
      setReady(true);
      return;
    }

    const scriptId = 'hs-forms-v2';
    if (document.getElementById(scriptId)) {
      const onLoad = () => setReady(true);
      (document.getElementById(scriptId) as HTMLScriptElement).addEventListener('load', onLoad, { once: true });
      return () => (document.getElementById(scriptId) as HTMLScriptElement)?.removeEventListener('load', onLoad);
    }

    const s = document.createElement('script');
    s.id = scriptId;
    s.src = 'https://js.hsforms.net/forms/v2.js';
    s.async = true;
    s.defer = true;
    s.onload = () => setReady(true);
    document.head.appendChild(s);

    return () => {
      // Script bleibt hängen – erneutes Laden stört i. d. R. nicht.
    };
  }, []);

  return ready;
}
