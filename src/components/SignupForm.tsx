import { useEffect } from 'react';

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

export default function SignupForm() {
  useEffect(() => {
    const id = 'hsforms-v2';
    const existing = document.getElementById(id) as HTMLScriptElement | null;

    const createForm = () => {
      try {
        (window as any).hbspt.forms.create({
          region: 'na1',
          portalId: '4268479',
          formId: 'ecc40a1f-7a44-4ac4-ae15-bb2abaf6d635',
          target: '#hubspot-form-container',
        });
      } catch (e) {
        console.warn('HubSpot form init failed:', e);
      }
    };

    if (existing) {
      if ((window as any).hbspt?.forms) createForm();
      else existing.addEventListener('load', createForm, { once: true });
      return;
    }

    const s = document.createElement('script');
    s.id = id;
    s.src = 'https://js.hsforms.net/forms/v2.js';
    s.async = true;
    s.defer = true;
    s.onload = createForm;
    document.body.appendChild(s);
  }, []);

  return (
    <section id="form-section" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Request Your Free AI-Sourced Creator Matches
          </h2>
          <p className="text-xl text-gray-600">
            Sign up and receive personalized creator suggestions tailored to your brand - no credit card required.
          </p>
        </div>

        <div
          id="hubspot-form-container"
          className="hs-form-frame mx-auto"
          style={{
            maxWidth: '640px',
            margin: '0 auto',
          }}
        />
      </div>
    </section>
  );
}
