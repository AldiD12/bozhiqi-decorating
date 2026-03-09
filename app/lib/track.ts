/**
 * Fire a gtag event if analytics is loaded and consent has been given.
 * Safe to call even before gtag is initialised.
 */
export function track(eventName: string, params?: Record<string, string | number>) {
  if (
    typeof window !== 'undefined' &&
    typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag === 'function'
  ) {
    (window as Window & { gtag?: (...args: unknown[]) => void }).gtag!('event', eventName, params);
  }
}

export const events = {
  callClick: () => track('call_click', { event_category: 'engagement', event_label: 'phone' }),
  whatsappClick: () => track('whatsapp_click', { event_category: 'engagement', event_label: 'whatsapp' }),
  quoteFormStart: () => track('quote_form_start', { event_category: 'form', event_label: 'quote_step_1' }),
  quoteFormComplete: (service: string) =>
    track('quote_form_complete', { event_category: 'form', event_label: service }),
  checkatradeClick: () =>
    track('checkatrade_click', { event_category: 'engagement', event_label: 'checkatrade' }),
};
