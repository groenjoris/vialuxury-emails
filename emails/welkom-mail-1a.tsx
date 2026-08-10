import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import NewsletterFooter from "../components/NewsletterFooter";
import NewsletterHeader from "../components/NewsletterHeader";
import { baseUrl, brand, font, newsletter } from "../components/theme";

type Props = {
  recipientName: string;
  recipientEmail: string;
};

const img = (file: string) => `${baseUrl}/images/mail-1a/${file}`;

const kop = {
  fontFamily: font.heading,
  fontWeight: 600,
  fontSize: "24px",
  lineHeight: "1.3",
  color: newsletter.ink,
  margin: 0,
};

const body14 = {
  fontFamily: font.body,
  fontSize: "14px",
  lineHeight: "1.3",
  color: newsletter.ink,
  margin: "8px 0 0",
};

const ctaLink = {
  fontFamily: font.body,
  fontSize: "14px",
  fontWeight: 700,
  color: brand.ember,
  textDecoration: "underline",
};

const photo = {
  border: `1px solid ${newsletter.border}`,
  borderRadius: "6px",
  objectFit: "cover" as const,
};

export default function WelkomMail1A({ recipientName, recipientEmail }: Props) {
  return (
    <Html lang="nl">
      <Head />
      <Preview>Welkom bij ViaLuxury — dit is handig om te weten</Preview>
      <Body style={{ backgroundColor: "#FFFFFF", margin: 0, padding: 0, fontFamily: font.body }}>
        <Container style={{ width: "626px", maxWidth: "626px" }}>
          <NewsletterHeader />

          {/* Fotostrip */}
          <Section style={{ paddingTop: "24px" }}>
            <Row>
              <Column style={{ width: "188px" }}>
                <Img src={img("strip-1.jpg")} alt="" width="188" height="186" style={{ ...photo, borderRadius: "3px" }} />
              </Column>
              <Column style={{ width: "234px", paddingLeft: "8px", paddingRight: "8px" }}>
                <Img src={img("strip-2.jpg")} alt="" width="234" height="186" style={{ ...photo, borderRadius: "3px" }} />
              </Column>
              <Column style={{ width: "188px" }}>
                <Img src={img("strip-3.jpg")} alt="" width="188" height="186" style={{ ...photo, borderRadius: "3px" }} />
              </Column>
            </Row>
          </Section>

          {/* Welkom */}
          <Section style={{ padding: "24px 10px 0", textAlign: "center" }}>
            <Heading
              as="h1"
              style={{
                fontFamily: font.heading,
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "1.2",
                color: newsletter.ink,
                margin: 0,
              }}
            >
              Welkom bij ViaLuxury
            </Heading>
            <Text style={{ ...body14, textAlign: "center" as const }}>
              Beste {recipientName}, wat leuk dat je bij ons geboekt hebt. Dit is handig om te weten.
            </Text>
          </Section>

          {/* Boekingsgegevens */}
          <Section style={{ paddingTop: "24px" }}>
            <Row>
              <Column style={{ width: "301px", verticalAlign: "top" }}>
                <Img src={img("booking.jpg")} alt="" width="301" height="190" style={photo} />
              </Column>
              <Column style={{ width: "301px", paddingLeft: "24px", verticalAlign: "top" }}>
                <Text style={{ ...kop, margin: 0 }}>Al je boekingsgegevens op één plek</Text>
                <Text style={body14}>
                  Log in met je emailadres, je ontvangt direct een inlogcode. Onder je account vind
                  je alles terug: data, arrangement en de details van je verblijf.
                </Text>
                <Text style={{ margin: "8px 0 0" }}>
                  <Link href="https://vialuxury.nl/login" style={ctaLink}>
                    Log in en bekijk je boeking &gt;
                  </Link>
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Vragen / FAQ */}
          <Section style={{ paddingTop: "32px" }}>
            <Row>
              <Column style={{ width: "301px", paddingRight: "24px", verticalAlign: "top" }}>
                <Text style={{ ...kop, margin: 0 }}>Vragen over je boeking?</Text>
                <Text style={body14}>
                  Je boeking vind je in je account. Hulp nodig? Bekijk onze FAQ of neem contact op.
                </Text>
                <Text style={{ margin: "8px 0 0" }}>
                  <Link href="https://vialuxury.nl/faq" style={ctaLink}>
                    Naar FAQ &gt;
                  </Link>
                </Text>
              </Column>
              <Column style={{ width: "301px", verticalAlign: "top" }}>
                <Img src={img("hotel.jpg")} alt="" width="301" height="200" style={photo} />
              </Column>
            </Row>
          </Section>

          {/* Mis geen enkele deal */}
          <Section style={{ paddingTop: "32px", textAlign: "center" }}>
            <Text style={{ margin: 0 }}>
              <span style={{ ...kop, verticalAlign: "middle" }}>Mis geen enkele deal&nbsp;&nbsp;</span>
              <span
                style={{
                  backgroundColor: newsletter.ink,
                  borderRadius: "4px",
                  color: "#FFFFFF",
                  fontFamily: font.body,
                  fontSize: "16px",
                  fontWeight: 700,
                  padding: "8px",
                  verticalAlign: "middle",
                  display: "inline-block",
                }}
              >
                Tot -65%
              </span>
            </Text>
            <Img
              src={img("hero-nature.jpg")}
              alt=""
              width="626"
              height="176"
              style={{ ...photo, border: "none", marginTop: "8px", width: "100%" }}
            />
            <Text style={{ ...body14, textAlign: "center" as const, margin: "16px 0 0" }}>
              We sturen je de beste deals voor hotelarrangementen.
              <br />
              Ook niet-hotel deals ontvangen?
            </Text>
            <Text style={{ margin: "8px 0 0" }}>
              <Img
                src={img("bell.png")}
                alt=""
                width="20"
                height="20"
                style={{ display: "inline", verticalAlign: "middle", marginRight: "8px" }}
              />
              <span
                style={{
                  fontFamily: font.body,
                  fontSize: "14px",
                  fontWeight: 700,
                  color: newsletter.ink,
                  verticalAlign: "middle",
                }}
              >
                Eén klik is genoeg!
              </span>
            </Text>
            <Button
              href="https://vialuxury.nl/deals"
              style={{
                backgroundColor: brand.ember,
                borderRadius: "6px",
                color: "#FFFFFF",
                fontFamily: font.body,
                fontSize: "16px",
                fontWeight: 700,
                padding: "8px 16px",
                textDecoration: "none",
                marginTop: "10px",
              }}
            >
              Alle ViaLuxury deals ontvangen &gt;
            </Button>
          </Section>

          {/* Thema's */}
          <Section style={{ paddingTop: "32px", textAlign: "center" }}>
            <Text style={{ ...kop, textAlign: "center" as const }}>
              Alvast dromen over een volgende keer?
            </Text>
            <Text style={{ ...body14, textAlign: "center" as const, margin: 0 }}>
              Onze selectie, van zee tot stad tot pure ontspanning
            </Text>
          </Section>
          <Section style={{ paddingTop: "16px", paddingBottom: "32px" }}>
            <Row>
              {[
                { image: "theme-sea.jpg", title: "Aan zee", href: "https://vialuxury.nl/aan-zee" },
                { image: "theme-city.jpg", title: "Stedentrip", href: "https://vialuxury.nl/stedentrip" },
                { image: "hero-nature.jpg", title: "In de natuur", href: "https://vialuxury.nl/natuur" },
              ].map((card, i) => (
                <Column
                  key={card.title}
                  style={{ width: "198px", paddingLeft: i === 0 ? 0 : "16px", verticalAlign: "top" }}
                >
                  <div
                    style={{
                      border: `1px solid ${newsletter.border}`,
                      borderRadius: "6px",
                      overflow: "hidden",
                    }}
                  >
                    <Img
                      src={img(card.image)}
                      alt={card.title}
                      width="198"
                      height="182"
                      style={{ objectFit: "cover", width: "100%", display: "block" }}
                    />
                    <div style={{ padding: "16px", textAlign: "left" }}>
                      <Text style={{ ...kop, fontSize: "18px", margin: 0 }}>{card.title}</Text>
                      <Text style={{ margin: "8px 0 0" }}>
                        <Link href={card.href} style={ctaLink}>
                          Ontdek aanbod &gt;
                        </Link>
                      </Text>
                    </div>
                  </div>
                </Column>
              ))}
            </Row>
          </Section>

          <NewsletterFooter recipientEmail={recipientEmail} />
        </Container>
      </Body>
    </Html>
  );
}

WelkomMail1A.PreviewProps = {
  recipientName: "Sanne",
  recipientEmail: "jesse@vialuxury.com",
} satisfies Props;
