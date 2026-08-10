import { Column, Img, Row, Section } from "@react-email/components";
import * as React from "react";
import { baseUrl, newsletter } from "./theme";

export default function NewsletterHeader() {
  return (
    <Section style={{ backgroundColor: newsletter.ink, padding: "16px 20px" }}>
      <Row>
        <Column>
          <Img
            src={`${baseUrl}/images/logo-vialuxury-horizontal.png`}
            alt="ViaLuxury"
            width="201"
            style={{ height: "auto" }}
          />
        </Column>
        <Column align="right">
          <Img
            src={`${baseUrl}/images/mail-1a/trustpilot.png`}
            alt="Trustpilot 4.5/5 — 15.500+ reviews"
            width="106"
            height="50"
          />
        </Column>
      </Row>
    </Section>
  );
}
