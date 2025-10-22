export function scrollToLeadForm(offset = 96) {
  const el = document.getElementById('lead-form');
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}
