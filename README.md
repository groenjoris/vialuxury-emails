# ViaLuxury E-mails

E-maildesigns voor ViaLuxury, gebouwd met [react-email](https://react.email) en gedeeld via een Next.js-gallery op Vercel.

## Structuur

- `emails/` — de e-mailontwerpen zelf (één `.tsx` per e-mail, met `PreviewProps` als voorbeelddata)
- `components/` — gedeelde bouwstenen: `EmailLayout` (header/footer) en `theme.ts` (huisstijl-tokens)
- `lib/registry.ts` — lijst van alle e-mails die in de gallery verschijnen
- `app/` — de gallery-site (overzicht, grote preview met mobiel/desktop-toggle, kopieer/download HTML)
- `public/mail-overzicht/` — losse statische overzichtspagina op `/mail-overzicht`, die de
  designbestanden uit het Claude Design-project rechtstreeks rendert (incl. de v2–v5-varianten
  die nog niet naar React zijn geport). Zie [de eigen README](public/mail-overzicht/README.md).
- `dc-templates/` — archief van de `.dc.html`-designbronbestanden. Deze map wordt niet
  gebuild of geserveerd; hij staat er als bron voor de designs.

## Commando's

```bash
npm run dev     # gallery op http://localhost:3200
npm run email   # react-email editor met hot reload op http://localhost:3300
npm run build   # productie-build (draait ook op Vercel)
```

## Nieuwe e-mail toevoegen

1. Maak `emails/mijn-email.tsx` (kopieer een bestaande als vertrekpunt, gebruik `EmailLayout` en `theme.ts`)
2. Zet `MijnEmail.PreviewProps = { ... }` met representatieve voorbeelddata
3. Registreer hem in `lib/registry.ts` met slug, titel en omschrijving

## Huisstijl

Kleuren en typografie komen uit `components/theme.ts` (bron: ViaLuxury-brandrichtlijnen).
Bold Ember `#FB862C` uitsluitend voor CTA's en doorgehaalde oude prijzen; koppen in
Recoleta (terugval: Georgia), bodytekst in Basis Grotesque Pro (terugval: Helvetica/Arial).

Let op: e-mailclients laden zelden custom fonts — de ontwerpen gebruiken daarom
font-stacks met systeemterugval. Afbeeldingen in e-mails krijgen op Vercel automatisch
absolute URL's (zie `baseUrl` in `theme.ts`), zodat gekopieerde HTML ook in een
e-mailclient of ESP werkt.
