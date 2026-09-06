export default function IconSprite() {
  return (
    <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
      <symbol id="wave-mark" viewBox="0 0 64 48">
        <rect x="2" y="24" width="11" height="22" rx="2" fill="#0d9488" />
        <rect x="17" y="16" width="11" height="30" rx="2" fill="#1f2937" />
        <rect x="32" y="8" width="11" height="38" rx="2" fill="#e63946" />
        <rect x="47" y="0" width="11" height="46" rx="2" fill="#ffc61a" />
      </symbol>
      <symbol id="ic-palette" viewBox="0 0 24 24"><path d="M12 3.5a8.5 8.5 0 1 0 0 17c1 0 1.8-.8 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a4 4 0 0 0 4-4c0-3.9-3.6-7-8-7z" /><circle cx="8" cy="10.5" r="1" /><circle cx="12" cy="8.2" r="1" /><circle cx="16" cy="10.5" r="1" /></symbol>
      <symbol id="ic-mail" viewBox="0 0 24 24"><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="M4 7l8 6 8-6" /></symbol>
      <symbol id="ic-chart" viewBox="0 0 24 24"><line x1="4" y1="20" x2="4" y2="12" /><line x1="12" y1="20" x2="12" y2="6" /><line x1="20" y1="20" x2="20" y2="15" /><line x1="2" y1="20" x2="22" y2="20" /></symbol>
      <symbol id="ic-megaphone" viewBox="0 0 24 24"><path d="M3 10v4h3l9 4V6l-9 4z" /><path d="M6 14v4.5a1.5 1.5 0 0 0 3 0V14" /></symbol>
      <symbol id="ic-folder" viewBox="0 0 24 24"><path d="M3.5 6.5a1 1 0 0 1 1-1h4.6l2 2.4h8.4a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1z" /></symbol>
      <symbol id="ic-camera" viewBox="0 0 24 24"><path d="M4 8.5a1 1 0 0 1 1-1h2.2l1-1.8h7.6l1 1.8H19a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" /><circle cx="12" cy="12.3" r="3.6" /></symbol>
      <symbol id="ic-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" /></symbol>
      <symbol id="ic-check" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" /><path d="M8.3 12.2l2.6 2.6 5-5.4" /></symbol>
      <symbol id="ic-pin" viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.4" /></symbol>
      <symbol id="ic-phone" viewBox="0 0 24 24"><path d="M5 4.5h3.2l1.4 4.3-2 1.6a12 12 0 0 0 5.8 5.8l1.6-2 4.3 1.4V19a1.5 1.5 0 0 1-1.6 1.5C10.8 19.9 4.1 13.2 3.5 6.1A1.5 1.5 0 0 1 5 4.5z" /></symbol>
      <symbol id="ic-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20c0-3.6 2.9-6.2 6.5-6.2s6.5 2.6 6.5 6.2" /><circle cx="17.5" cy="8.6" r="2.4" /><path d="M15.8 13.9c2.9.4 5.2 2.7 5.2 5.9" /></symbol>
      <symbol id="ic-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3.2 2" /></symbol>
      <symbol id="ic-arrow" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7" /><path d="M9 7h8v8" /></symbol>
    </svg>
  );
}

export function Icon({ id, className = "icon" }: { id: string; className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#${id}`} />
    </svg>
  );
}
