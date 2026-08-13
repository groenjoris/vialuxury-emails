# E-maildesigns — overzicht

Geïmplementeerd uit het Claude Design-project *Folder uitwerken en formulier*, bestand
`Mail Overzicht.dc.html`. Statische pagina, geen build-stap en geen dependencies.

## Draaien

Serveer de map over HTTP (niet `file://` openen — dan blokkeert de browser `fetch`, waardoor
"Kopieer HTML" en "Download .html" niet werken):

```bash
npx serve -l 4180 .
```

Daarna: <http://localhost:4180/mail-overzicht/> (`python3 -m http.server 4180` werkt ook).

## Wat de pagina doet

- **Index** — kaartenraster met een levende preview van elk design (664 px breed, op 0,5
  geschaald in een venster van 300 px), plus filterchips voor *Welkom inschrijving*,
  *Reminder welkom code* en *Reminder bestaande klant*. Eén filter tegelijk actief;
  nog een klik op dezelfde chip of op *Wis filter* zet hem uit. De sectie
  *Inspiration examples* staat buiten het filter.
- **Detail** — grote preview met versie-, licht/donker- en desktop/mobiel-toggles
  (stage 700 px resp. 375 px), plus *Kopieer HTML* en *Download .html* voor de
  productie-HTML. `Esc` gaat terug naar het overzicht.

## De losse e-maildesigns (`emails/`)

De overzichtspagina rendert elk design in een `<iframe>` uit deze map. Verwachte
bestandsnaam is de componentnaam uit het designproject plus `.html`:

| Design | Versies → bestand |
| --- | --- |
| Welkom (Mail 1A) | `Mail1A.html`, `Mail1Av2.html`, `Mail1Av3.html`, `Mail1Av4.html`, `Mail1Av5.html` |
| Welkom (Mail 1B) | `Mail1B.html`, `Mail1Bv2.html` |
| Welkom (Mail 1A FAN) | `Mail1AFan.html`, `Mail1AFanv2.html` |
| Reminder welkom code (Mail 2) | `Mail2Reminder.html` |
| Reminder welkom code (Mail 3) | `Mail3Reminder.html`, `Mail3Reminderv2.html` |
| Reminder welkom code (Mail 4) | `Mail4Reminder.html` |
| Reminder welkom code (Mail 5) | `Mail5Reminder.html`, `Mail5Reminderv2.html` |
| Klant geboekt & uitgeschreven | `KlantGeboektUitgeschreven.html`, `KlantGeboektUitgeschrevenv2.html` |
| Klant geboekt & inactief | `KlantGeboektInactief.html`, `KlantGeboektInactiefv2.html` |
| Boekingsbevestiging | `Boekingsbevestiging.html` |
| Deal van de week | `DealVanDeWeek.html` |

Contract per bestand:

- Compleet HTML-document (dat is ook precies wat *Kopieer HTML* / *Download .html* teruggeeft).
- Leest `?mode=light|dark` en `?layout=desktop|mobile` uit de query string en stelt zichzelf
  daarop in. De overzichtspagina geeft die parameters mee bij elke toggle.
- Rendert op 100% breedte van de iframe, zonder eigen horizontale marges.

Ontbreekt een bestand, dan zet de overzichtspagina er automatisch een placeholder met het
verwachte pad neer; zodra het bestand er staat verschijnt de echte preview zonder
codewijziging. Nieuw design toevoegen? Eén entry in de `DESIGNS`-array in `index.html`.

## Merkfonts

`Recoleta-SemiBold.ttf`, `basisgrotesque-regular.ttf` en `basisgrotesque-bold.ttf` zitten niet
in deze repo. Zet ze in `assets/fonts/` — de `@font-face`-regels in `index.html` verwijzen er
al naar. Zonder die bestanden valt de pagina terug op Georgia (display) en Helvetica (body).
