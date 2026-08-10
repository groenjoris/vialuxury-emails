import {
  Button,
  Column,
  Heading,
  Img,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import EmailLayout from "../components/EmailLayout";
import { brand, font } from "../components/theme";

type Props = {
  dealTitle: string;
  location: string;
  stars: string;
  description: string;
  oldPrice: string;
  newPrice: string;
  priceSuffix: string;
  perks: string[];
  imageUrl: string;
};

export default function DealAlert({
  dealTitle,
  location,
  stars,
  description,
  oldPrice,
  newPrice,
  priceSuffix,
  perks,
  imageUrl,
}: Props) {
  return (
    <EmailLayout preview={`${dealTitle} — nu vanaf ${newPrice} ${priceSuffix}`}>
      <Section style={{ backgroundColor: brand.white }}>
        <Img
          src={imageUrl}
          alt={dealTitle}
          width="600"
          height="300"
          style={{ objectFit: "cover", width: "100%" }}
        />
      </Section>

      <Section style={{ backgroundColor: brand.white, padding: "28px 32px 32px" }}>
        <Text
          style={{
            color: brand.tealDark,
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
            margin: "0 0 8px",
          }}
        >
          Deal van de week · {stars}
        </Text>
        <Heading
          as="h1"
          style={{
            fontFamily: font.heading,
            fontWeight: 600,
            fontSize: "26px",
            lineHeight: "34px",
            color: brand.ink,
            margin: "0 0 4px",
          }}
        >
          {dealTitle}
        </Heading>
        <Text style={{ color: "#6B6B6B", fontSize: "14px", margin: "0 0 16px" }}>{location}</Text>

        <Text style={{ color: brand.ink, fontSize: "15px", lineHeight: "24px", margin: "0 0 20px" }}>
          {description}
        </Text>

        <Section style={{ backgroundColor: brand.cloud, borderRadius: "8px", padding: "16px 20px" }}>
          {perks.map((perk) => (
            <Text
              key={perk}
              style={{ color: brand.ink, fontSize: "14px", lineHeight: "24px", margin: 0 }}
            >
              ✓&nbsp;&nbsp;{perk}
            </Text>
          ))}
        </Section>

        <Row style={{ marginTop: "24px" }}>
          <Column>
            <Text
              style={{
                color: brand.ember,
                fontSize: "15px",
                textDecoration: "line-through",
                margin: 0,
              }}
            >
              {oldPrice}
            </Text>
            <Text
              style={{
                fontFamily: font.heading,
                fontWeight: 600,
                color: brand.tealDark,
                fontSize: "30px",
                lineHeight: "36px",
                margin: 0,
              }}
            >
              {newPrice}
              <span style={{ fontSize: "14px", color: "#6B6B6B", fontFamily: font.body, fontWeight: 400 }}>
                {" "}
                {priceSuffix}
              </span>
            </Text>
          </Column>
          <Column align="right" style={{ verticalAlign: "bottom" }}>
            <Button
              href="https://vialuxury.nl"
              style={{
                backgroundColor: brand.ember,
                borderRadius: "8px",
                color: brand.white,
                fontSize: "16px",
                fontWeight: 700,
                padding: "14px 28px",
                textDecoration: "none",
              }}
            >
              Bekijk deze deal
            </Button>
          </Column>
        </Row>
      </Section>
    </EmailLayout>
  );
}

DealAlert.PreviewProps = {
  dealTitle: "Amara Luxury Resort & Villas",
  location: "Bodrum, Turkije",
  stars: "5 sterren",
  description:
    "Wit design-resort direct aan de Egeïsche Zee, met privéstrand, drie infinity pools en een spa van 2.000 m². Nu tijdelijk met meer dan 40% korting op basis van halfpension.",
  oldPrice: "€ 1.279",
  newPrice: "€ 749",
  priceSuffix: "p.p. · 7 nachten",
  perks: [
    "Halfpension inbegrepen",
    "Gratis upgrade naar zeezicht (o.b.v. beschikbaarheid)",
    "Transfer van en naar de luchthaven",
    "Gratis annuleren tot 14 dagen voor vertrek",
  ],
  imageUrl: "https://picsum.photos/seed/vialuxury-deal/1200/600",
} satisfies Props;
