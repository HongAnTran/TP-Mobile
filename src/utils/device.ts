"use client"


export function getDeviceType() {

  const userAgent = navigator.userAgent.toLowerCase();

  const isMobileUA = /mobile|android|kindle|silk|midp|phone|(opera m(ob|in)i)|windows (phone|ce)|blackberry|bb|playbook|meego/.test(userAgent);
  const isTabletUA = /tablet|ipad|playbook|silk|android(?!.*mobi)/.test(userAgent);

  const width = window.innerWidth;
  // Additional check using screen size
  const isMobileSize = width < 640; // Mobile devices typically have widths up to 767px
  const isTabletSize = width >= 640 && width <= 1024; // Tablets typically have widths between 768px and 1024px
  if (isTabletUA || isTabletSize) {
    return 'tablet';
  } else if (isMobileUA || isMobileSize) {
    return 'mobile';
  } else {
    return 'desktop';
  }
}

