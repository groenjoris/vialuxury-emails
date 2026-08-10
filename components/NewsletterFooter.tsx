import { Column, Img, Link, Row, Section, Text } from "@react-email/components";
import * as React from "react";
import { baseUrl, font, newsletter } from "./theme";

const small = {
  color: "#FFFFFF",
  fontSize: "12px",
  lineHeight: "16px",
  margin: 0,
};

const iconText = { ...small, margin: "0 0 8px" };

type Props = {
  recipientEmail: string;
};

export default function NewsletterFooter({ recipientEmail }: Props) {
  return (
    <Section style={{ backgroundColor: newsletter.ink, padding: "32px", fontFamily: font.body }}>
      <Row>
        <Column style={{ width: "50%", verticalAlign: "top" }}>
          <Img
            src={`${baseUrl}/images/logo-vialuxury-horizontal.png`}
            alt="ViaLuxury"
            width="201"
            style={{ height: "auto" }}
          />
          <Text style={{ ...small, fontWeight: 700, margin: "20px 0 8px" }}>Volg ons op</Text>
          <Row style={{ width: "54px" }}>
            <Column>
              <Link href="https://www.instagram.com/vialuxury">
                <Img src={`${baseUrl}/images/mail-1a/icon-instagram.png`} alt="Instagram" width="19" height="19" />
              </Link>
            </Column>
            <Column style={{ paddingLeft: "8px" }}>
              <Link href="https://www.facebook.com/vialuxury">
                <Img src={`${baseUrl}/images/mail-1a/icon-facebook.png`} alt="Facebook" width="19" height="19" />
              </Link>
            </Column>
          </Row>
        </Column>
        <Column style={{ width: "50%", verticalAlign: "top" }}>
          <Text style={{ ...small, fontWeight: 700, margin: "0 0 8px" }}>Hulp nodig?</Text>
          <Text style={iconText}>
            <Img
              src={`${baseUrl}/images/mail-1a/icon-phone.png`}
              alt=""
              width="18"
              height="18"
              style={{ display: "inline", verticalAlign: "middle", marginRight: "8px" }}
            />
            +31 20 705 2222
          </Text>
          <Text style={iconText}>
            <Img
              src={`${baseUrl}/images/mail-1a/icon-whatsapp.png`}
              alt=""
              width="18"
              height="18"
              style={{ display: "inline", verticalAlign: "middle", marginRight: "8px" }}
            />
            +31 20 808 8809
          </Text>
          <Text style={{ ...small, margin: "0 0 16px" }}>Ma t/m Vr: 8:00 — 18:00</Text>
          <Text style={{ ...small, margin: "0 0 8px" }}>Prijswijzigingen en/of zetfouten voorbehouden.</Text>
          <Text style={{ ...small, margin: "0 0 8px" }}>Copyright © ViaLuxury, All Rights Reserved</Text>
          <Text style={{ ...small, margin: "0 0 8px" }}>
            Te veel mail? Ontvang voortaan minder vaak, of helemaal niet meer.
          </Text>
          <Text style={small}>
            <Link href="https://vialuxury.nl" style={{ color: "#FFFFFF", textDecoration: "underline", fontSize: "12px" }}>
              Wijzig e-mailvoorkeuren
            </Link>{" "}
            |{" "}
            <Link href="https://vialuxury.nl" style={{ color: "#FFFFFF", textDecoration: "underline", fontSize: "12px" }}>
              Uitschrijven
            </Link>{" "}
            |{" "}
            <Link href="https://vialuxury.nl" style={{ color: "#FFFFFF", textDecoration: "underline", fontSize: "12px" }}>
              Webversie
            </Link>
          </Text>
        </Column>
      </Row>
      <Row>
        <Column>
          <Text style={{ ...small, margin: "24px 0 0" }}>
            Je ontvangt deze e-mail op <strong>{recipientEmail}</strong>.
          </Text>
        </Column>
      </Row>
    </Section>
  );
}
