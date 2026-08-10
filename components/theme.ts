// ViaLuxury huisstijl-tokens voor e-mails (bron: vialuxury-brand skill)
export const brand = {
  tealDark: "#206861", // primaire merkkleur — headers, grote vlakken
  tealLight: "#80C5B7", // secundair — zachte vlakken
  cloud: "#F5F5F5", // achtergrond
  ink: "#1A1A1A", // bodytekst, footer
  white: "#FFFFFF", // kaartoppervlakken
  ember: "#FB862C", // uitsluitend CTA's en doorgehaalde oude prijzen
};

// Nieuwsbrief-specifieke tokens (bron: Figma "Nieuwsbrief"-bestand)
export const newsletter = {
  ink: "#141414", // header/footer en tekst in de nieuwsbriefserie
  border: "#D6D6D6",
};

// E-mailclients hebben zelden custom fonts; Recoleta/Basis vallen terug
// op systeemfonts met vergelijkbaar karakter.
export const font = {
  heading: "'Recoleta', Georgia, 'Times New Roman', serif",
  body: "'Basis Grotesque Pro', Helvetica, Arial, sans-serif",
};

// Op Vercel worden afbeeldings-URL's absoluut, zodat gekopieerde HTML
// ook buiten de gallery werkt. Lokaal blijven ze relatief (werkt in de
// gallery-preview omdat een srcdoc-iframe de base-URL van de pagina erft).
export const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "";
