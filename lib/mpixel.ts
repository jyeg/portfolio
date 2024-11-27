// import { FB_PIXEL_ID } from './constants';

// export const trackEvent = (event: string, data: Record<string, unknown>) => {
//   if (typeof window !== 'undefined') {
//     import('react-facebook-pixel')
//       .then((x) => x.default)
//       .then((ReactPixel) => {
//         ReactPixel.init(FB_PIXEL_ID ?? '');
//         ReactPixel.track(event, data);
//       });
//   }
// };

export const pageView = () => {
  // @ts-expect-error window.fbq is not defined in the global scope
  window.fbq('track', 'PageView');
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const trackEvent = (name: string, options = {}) => {
  // @ts-expect-error window.fbq is not defined in the global scope
  window.fbq('track', name, options);
};
