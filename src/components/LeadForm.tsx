import { useEffect, useRef, useState } from 'react';
import useHubspotLoader from '../lib/useHubspotLoader';

type LeadFormProps = {
  portalId?: string;
  formId?: string;
  region?: 'na1' | 'eu1' | 'ap1';
  prefillValue?: string;
};

export default function LeadForm({
  portalId = '4268479',
  formId = 'ecc40a1f-7a44-4ac4-ae15-bb2abaf6d635',
  region = 'na1',
  prefillValue = '',
}: LeadFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ready = useHubspotLoader();
  const [formCreated, setFormCreated] = useState(false);

  // Lese URL Parameter für Vorausfüllung
  const getUrlParam = (param: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param) || '';
  };

  // Bestimme ob Email oder Website
  const isEmail = (value: string) => value.includes('@');

  const websiteValue = !isEmail(prefillValue) ? (prefillValue || getUrlParam('website')) : getUrlParam('website');
  const emailValue = isEmail(prefillValue) ? (prefillValue || getUrlParam('email')) : getUrlParam('email');

  const prefillWebsiteRef = useRef(websiteValue);
  const prefillEmailRef = useRef(emailValue);

  // Update refs und force form recreation wenn sich Wert ändert
  useEffect(() => {
    const newWebsite = !isEmail(prefillValue) ? (prefillValue || getUrlParam('website')) : getUrlParam('website');
    const newEmail = isEmail(prefillValue) ? (prefillValue || getUrlParam('email')) : getUrlParam('email');

    if ((newWebsite && newWebsite !== prefillWebsiteRef.current) ||
        (newEmail && newEmail !== prefillEmailRef.current)) {
      prefillWebsiteRef.current = newWebsite;
      prefillEmailRef.current = newEmail;
      setFormCreated(false); // Force form recreation
    }
  }, [prefillValue]);

  useEffect(() => {
    if (!ready || !containerRef.current || !(window as any).hbspt || formCreated) return;

    containerRef.current.innerHTML = '';

    console.log('Creating form with prefill - website:', prefillWebsiteRef.current, 'email:', prefillEmailRef.current);

    // HubSpot liest automatisch URL-Parameter wenn Feldnamen übereinstimmen
    (window as any).hbspt.forms.create({
      portalId,
      formId,
      region,
      target: '#lead-form-mount',
      css: '',
      cssRequired: '',
      onFormReady: ($form: any) => {
        console.log('Form ready, prefilling website:', prefillWebsiteRef.current, 'email:', prefillEmailRef.current);

        // Customize button text
        const btn = $form.find('input[type=submit], button[type=submit]');
        if (btn && btn.length > 0) {
          btn.val('Generate My Creator Matches');
          btn.text('Generate My Creator Matches');
        }

        // Prefill website field
        if (prefillWebsiteRef.current) {
          console.log('Setting website field');
          const websiteField = $form.find('input[name="website"]');
          if (websiteField && websiteField.length > 0) {
            websiteField.val(prefillWebsiteRef.current);
            websiteField.trigger('change');
            websiteField.trigger('input');
          }

          // Fallback: Set via DOM
          setTimeout(() => {
            const websiteInput = document.querySelector('#lead-form-mount input[name="website"]') as HTMLInputElement;
            if (websiteInput && !websiteInput.value) {
              websiteInput.value = prefillWebsiteRef.current;
              websiteInput.dispatchEvent(new Event('input', { bubbles: true }));
              websiteInput.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }, 500);
        }

        // Prefill email field
        if (prefillEmailRef.current) {
          console.log('Setting email field');
          const emailField = $form.find('input[type="email"], input[name="email"]');
          if (emailField && emailField.length > 0) {
            emailField.val(prefillEmailRef.current);
            emailField.trigger('change');
            emailField.trigger('input');
          }

          // Fallback: Set via DOM
          setTimeout(() => {
            const emailInput = document.querySelector('#lead-form-mount input[type="email"]') as HTMLInputElement;
            if (emailInput && !emailInput.value) {
              emailInput.value = prefillEmailRef.current;
              emailInput.dispatchEvent(new Event('input', { bubbles: true }));
              emailInput.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }, 500);
        }
      },
    });

    setFormCreated(true);
  }, [ready, portalId, formId, region, formCreated]);

  return (
    <div
      id="lead-form"
      className="scroll-mt-24"
    >
      <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl ring-1 ring-black/5 p-8 md:p-10">
        <header className="mb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#233C42]">
            Request Your Free AI-Sourced Creator Matches
          </h2>
          <p className="mt-2 text-[#233C42]/70">
            Sign up and receive personalized creator suggestions tailored to your brand – no
            credit card required.
          </p>
        </header>

        <div id="lead-form-mount" ref={containerRef} />

        <p className="mt-4 text-center text-sm text-[#233C42]/50">
          🔒 Your data is safe. We'll only use it to set up your creator matches.
        </p>
      </div>
    </div>
  );
}
