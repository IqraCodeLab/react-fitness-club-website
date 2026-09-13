const icons = {
  dumbbell: (
    <>
      <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  barbell: (
    <>
      <path d="M4 9v6M7 7v10M10 6v12M17 6v12M20 7v10M23 9v6M10 12h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  muscle: (
    <>
      <path d="M6.5 3.5c-2 1-3.5 3.2-3.5 5.8 0 1.4.4 2.6 1.1 3.4.4-.4 1-.6 1.6-.6h.3c.2 1.1.9 2 1.9 2.4 0-2 1-3.8 2.6-4.8A6.5 6.5 0 0 0 11 4.6c-1.4-.4-3-.9-4.5-1.1zm11 0c2 1 3.5 3.2 3.5 5.8 0 1.4-.4 2.6-1.1 3.4-.4-.4-1-.6-1.6-.6h-.3c-.2 1.1-.9 2-1.9 2.4 0-2-1-3.8-2.6-4.8A6.5 6.5 0 0 1 13 4.6c1.4-.4 3-.9 4.5-1.1zM12 16v6M8 19l4 3 4-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  flame: (
    <>
      <path d="M12 2c1 4-4 5.5-4 11a4.5 4.5 0 0 0 9 0c0-2-1-3.5-2-5-.6 1-1 1.6-1 1.6-.5-3.5 2-5.5-2-7.6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  heart: (
    <>
      <path d="M12 21C7 16.5 3 13 3 8.8A4.8 4.8 0 0 1 7.8 4c1.7 0 3.3.9 4.2 2.3A5 5 0 0 1 16.2 4 4.8 4.8 0 0 1 21 8.8C21 13 17 16.5 12 21z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  move: (
    <>
      <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  glove: (
    <>
      <path d="M12 4c-2-1.5-5 .3-5 2.8v4.4c0 .9-.6 1.4-.8 2.5-.2 1.4 0 3.2 0 3.2.7.4 2 .7 3.3.6 2.3-.2 3.2-1 3.7-2.4.5-1.5.3-3.3.3-5.2V7.5C13.5 5.5 13.2 4.8 12 4zM12 4V2M8.5 15l-1 2.5M13 9h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  scale: (
    <>
      <path d="M4 4h16M7 4l-3 8a3 3 0 0 0 6 0L7 4zM17 4l-3 8a3 3 0 0 0 6 0l-3-8zM8 20h8M12 12v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 15c-1.5-1-2-3-1-5.5.8-2 2.2-3.4 4.5-4.3.8-1.3 2-2 3.5-2.2-.2 1.5-.9 2.7-2.2 3.5-.9 2.3-2.3 3.7-4.3 4.5-2.5 1-4.5.5-5.5-1zM4 20c2 0 3-.5 3-2-2 0-3 .5-3 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="14.5" cy="9.5" r="1.5" fill="currentColor" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M9 14.5 7.5 21l4.5-2.5L16.5 21 15 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  equipment: (
    <>
      <path d="M4 21v-5M4 10V4M20 21v-5M20 10V4M4 16h3M4 7h3M20 16h-3M20 7h-3M7 8v8M17 8v8M10 5v14M14 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M2.5 10h19M6 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  apple: (
    <>
      <path d="M12 7c-2 0-3.5-1-4.5-2.5C5.5 5 5 7.3 5.6 9.3c-.6 1.2-.9 3 .9 5 1 1.2 2.5 3 3.5 5.2.6 1.3 1 1.7 2 1.7s1.4-.4 2-1.7c1-2.2 2.5-4 3.5-5.2 1.8-2 1.5-3.8.9-5 .6-2 .1-4.3-1.9-4.8C15.5 6 14 7 12 7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 7C12 4.5 13.5 3 15.5 2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  users: (
    <>
      <path d="M17 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20M10.5 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM21 20v-1.5a4 4 0 0 0-3-3.85M15.5 3.7a3.5 3.5 0 0 1 0 6.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  spa: (
    <>
      <path d="M12 21c-5-2-8-6-8-10 0-1 .2-2 .6-3C7.5 8 9 9 10 10.5M12 21c5-2 8-6 8-10 0-1-.2-2-.6-3-2.9 0-4.4 1-5.4 2.5M12 21v-6M12 12c-.5-3 1-6 3.5-8M12 12c.5-3-1-6-3.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  locker: (
    <>
      <path d="M4 4h16v16H4zM10 4v16M7 9h1M8 12h1M8 15h1M15 9h1M16 12h1M16 15h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 4 5v6c0 5.5 3.5 9.5 8 11 4.5-1.5 8-5.5 8-11V5l-8-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m8.5 11.5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  check: (
    <>
      <path d="m4.5 12.5 5 5L19.5 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  x: (
    <>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  arrowLeft: (
    <>
      <path d="M20 12H4M10 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  chevronDown: (
    <>
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  chevronRight: (
    <>
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 20V4M6 10l6-6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  star: (
    <>
      <path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" fill="currentColor" />
    </>
  ),
  starOutline: (
    <>
      <path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </>
  ),
  play: (
    <>
      <path d="M7 4.5v15l13-7.5L7 4.5z" fill="currentColor" />
    </>
  ),
  phone: (
    <>
      <path d="M4.5 3h3l1.5 4.5-2 1.5a14 14 0 0 0 5.5 5.5l1.5-2L18.5 14v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 2.5 5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="m3.5 7 8.5 6 8.5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  clockSmall: (
    <>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  send: (
    <>
      <path d="M21 3 10.5 13.5M21 3l-7 18-3.5-7.5L3 10l18-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  facebook: (
    <>
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.6V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H7.5v3h2.8v8h3.2z" fill="currentColor" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </>
  ),
  twitter: (
    <>
      <path d="M21 5.5c-.7.3-1.4.5-2.2.6a3.9 3.9 0 0 0 1.7-2.2c-.8.5-1.6.8-2.5 1a3.9 3.9 0 0 0-6.7 3.6A11 11 0 0 1 3.7 4.6a3.9 3.9 0 0 0 1.2 5.2c-.6 0-1.2-.2-1.8-.5a3.9 3.9 0 0 0 3.2 3.9c-.6.2-1.2.2-1.8.1a3.9 3.9 0 0 0 3.6 2.7A7.8 7.8 0 0 1 2.5 17.5 11 11 0 0 0 8.4 19c7.2 0 11.1-6 11.1-11.1v-.5c.7-.6 1.4-1.3 1.9-2.1z" fill="currentColor" />
    </>
  ),
  youtube: (
    <>
      <path d="M21.5 8a3 3 0 0 0-2.1-2.2C17.6 5.4 12 5.4 12 5.4s-5.6 0-7.4.4A3 3 0 0 0 2.5 8a31 31 0 0 0-.4 4 31 31 0 0 0 .4 4 3 3 0 0 0 2.1 2.1c1.8.5 7.4.5 7.4.5s5.6 0 7.4-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-4 31 31 0 0 0-.4-4zM10 15V9l5 3-5 3z" fill="currentColor" />
    </>
  ),
  zoom: (
    <>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="m20 20-3.5-3.5M8 11h6M11 8v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  quote: (
    <>
      <path d="M7 11a4 4 0 0 1-4 4H3v-1.5A4.5 4.5 0 0 1 7.5 9c.3 0 .6.03.9.09A4.5 4.5 0 0 0 7 11zm9 0a4 4 0 0 1-4 4h0v-1.5A4.5 4.5 0 0 1 16.5 9c.3 0 .6.03.9.09A4.5 4.5 0 0 0 16 11z" fill="currentColor" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </>
  ),
  xClose: (
    <>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </>
  ),
  map: (
    <>
      <path d="M3 5.5 9 3l6 2 6-2.5v16L15 21l-6-2-6 2.5v-16zM9 3v16M15 5v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  hours: (
    <>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 6.5V12l3.5 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 8h.01M12 11v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" fill="none" />
    </>
  ),
};

export default function Icon({ name, size = 20, className = '', style }) {
  const paths = icons[name] || icons.info;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      {paths}
    </svg>
  );
}
