import type * as React from "react";
import BookingConfirmation from "@/emails/booking-confirmation";
import DealAlert from "@/emails/deal-alert";

export type EmailEntry = {
  slug: string;
  title: string;
  description: string;
  // Elke e-mail exporteert PreviewProps met representatieve voorbeelddata.
  Component: React.ComponentType<any> & { PreviewProps?: Record<string, unknown> };
};

export const emails: EmailEntry[] = [
  {
    slug: "booking-confirmation",
    title: "Boekingsbevestiging",
    description: "Transactionele bevestiging na een geslaagde boeking, met reisdetails en totaalprijs.",
    Component: BookingConfirmation,
  },
  {
    slug: "deal-alert",
    title: "Deal van de week",
    description: "Commerciële nieuwsbrief rond één deal: hero-foto, USP's, oude vs. nieuwe prijs en CTA.",
    Component: DealAlert,
  },
];

export function getEmail(slug: string): EmailEntry | undefined {
  return emails.find((e) => e.slug === slug);
}
