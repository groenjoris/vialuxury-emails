import type * as React from "react";
import BookingConfirmation from "@/emails/booking-confirmation";
import DealAlert from "@/emails/deal-alert";
import Mail1B from "@/emails/mail-1b";
import Mail2Reminder from "@/emails/mail-2-reminder";
import Mail3Reminder from "@/emails/mail-3-reminder";
import WelkomMail1A from "@/emails/welkom-mail-1a";
import WelkomMail1Fan from "@/emails/welkom-mail-1-fan";

export type EmailSection = "designs" | "inspiration";

export type EmailEntry = {
  slug: string;
  title: string;
  description: string;
  section: EmailSection;
  // Elke e-mail exporteert PreviewProps met representatieve voorbeelddata
  // en accepteert een optionele `mode`-prop ("light" | "dark").
  Component: React.ComponentType<any> & { PreviewProps?: Record<string, unknown> };
};

export const emails: EmailEntry[] = [
  {
    slug: "welkom-mail-1a",
    title: "Welkom (Mail 1A)",
    description: "Welkomstmail na eerste boeking: account, FAQ, deal-opt-in en thema-inspiratie. Naar Figma-ontwerp 'Nieuwsbrief'.",
    section: "designs",
    Component: WelkomMail1A,
  },
  {
    slug: "welkom-mail-1-fan",
    title: "Welkom FAN (Mail 1)",
    description: "Welkomstmail voor nieuwe nieuwsbriefinschrijvers met een €10 kortingscode, drie populaire arrangementen en een deals-opt-in.",
    section: "designs",
    Component: WelkomMail1Fan,
  },
  {
    slug: "mail-1b",
    title: "Welkom (Mail 1B)",
    description: "Welkomstmail-variant met de deals-opt-in bovenaan, gevolgd door boekingsgegevens, FAQ en drie reisthema's.",
    section: "designs",
    Component: Mail1B,
  },
  {
    slug: "mail-2-reminder",
    title: "Reminder (Mail 2)",
    description: "Herinnering dat het €10-welkomstcadeau nog klaarstaat, met kortingscode, CTA en drie inspiratiethema's.",
    section: "designs",
    Component: Mail2Reminder,
  },
  {
    slug: "mail-3-reminder",
    title: "Reminder (Mail 3)",
    description: "Laatste herinnering voor de €10 welkomstkorting, met kortingscode en drie arrangement-suggesties om de code te verzilveren.",
    section: "designs",
    Component: Mail3Reminder,
  },
  {
    slug: "booking-confirmation",
    title: "Boekingsbevestiging",
    description: "Transactionele bevestiging na een geslaagde boeking, met reisdetails en totaalprijs.",
    section: "inspiration",
    Component: BookingConfirmation,
  },
  {
    slug: "deal-alert",
    title: "Deal van de week",
    description: "Commerciële nieuwsbrief rond één deal: hero-foto, USP's, oude vs. nieuwe prijs en CTA.",
    section: "inspiration",
    Component: DealAlert,
  },
];

export function getEmail(slug: string): EmailEntry | undefined {
  return emails.find((e) => e.slug === slug);
}
