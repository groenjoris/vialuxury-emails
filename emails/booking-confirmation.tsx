import {
  Button,
  Column,
  Heading,
  Hr,
  Img,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import EmailLayout from "../components/EmailLayout";
import { brand, font } from "../components/theme";

type Props = {
  firstName: string;
  hotelName: string;
  location: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  totalPrice: string;
  bookingNumber: string;
  imageUrl: string;
};

export default function BookingConfirmation({
  firstName,
  hotelName,
  location,
  checkIn,
  checkOut,
  guests,
  roomType,
  totalPrice,
  bookingNumber,
  imageUrl,
}: Props) {
  const label = {
    color: "#6B6B6B",
    fontSize: "12px",
    lineHeight: "16px",
    margin: "0 0 2px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
  };
  const value = {
    color: brand.ink,
    fontSize: "15px",
    lineHeight: "22px",
    margin: 0,
    fontWeight: 700,
  };

  return (
    <EmailLayout preview={`Je boeking bij ${hotelName} is bevestigd`}>
      <Section style={{ backgroundColor: brand.white, padding: "32px" }}>
        <Heading
          as="h1"
          style={{
            fontFamily: font.heading,
            fontWeight: 600,
            fontSize: "26px",
            lineHeight: "34px",
            color: brand.tealDark,
            margin: "0 0 12px",
          }}
        >
          Je boeking is bevestigd, {firstName}
        </Heading>
        <Text style={{ color: brand.ink, fontSize: "15px", lineHeight: "24px", margin: "0 0 24px" }}>
          Pak je koffers maar vast — je verblijf is geregeld. Hieronder vind je
          alle details van je boeking. Boekingsnummer:{" "}
          <strong>{bookingNumber}</strong>.
        </Text>

        <Img
          src={imageUrl}
          alt={hotelName}
          width="536"
          height="260"
          style={{ borderRadius: "8px", objectFit: "cover", width: "100%" }}
        />

        <Heading
          as="h2"
          style={{
            fontFamily: font.heading,
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "28px",
            color: brand.ink,
            margin: "20px 0 2px",
          }}
        >
          {hotelName}
        </Heading>
        <Text style={{ color: "#6B6B6B", fontSize: "14px", margin: "0 0 20px" }}>{location}</Text>

        <Section style={{ backgroundColor: brand.cloud, borderRadius: "8px", padding: "20px" }}>
          <Row>
            <Column>
              <Text style={label}>Check-in</Text>
              <Text style={value}>{checkIn}</Text>
            </Column>
            <Column>
              <Text style={label}>Check-out</Text>
              <Text style={value}>{checkOut}</Text>
            </Column>
          </Row>
          <Hr style={{ borderColor: "#E3E3E3", margin: "16px 0" }} />
          <Row>
            <Column>
              <Text style={label}>Reisgezelschap</Text>
              <Text style={value}>{guests}</Text>
            </Column>
            <Column>
              <Text style={label}>Kamertype</Text>
              <Text style={value}>{roomType}</Text>
            </Column>
          </Row>
          <Hr style={{ borderColor: "#E3E3E3", margin: "16px 0" }} />
          <Row>
            <Column>
              <Text style={label}>Totaalprijs</Text>
              <Text style={{ ...value, fontSize: "20px", color: brand.tealDark }}>{totalPrice}</Text>
            </Column>
          </Row>
        </Section>

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
            display: "block",
            textAlign: "center",
            marginTop: "24px",
          }}
        >
          Bekijk mijn boeking
        </Button>

        <Text style={{ color: "#6B6B6B", fontSize: "13px", lineHeight: "20px", margin: "20px 0 0" }}>
          Vragen over je boeking? Ons team staat 7 dagen per week voor je klaar
          via reizen@vialuxury.nl.
        </Text>
      </Section>
    </EmailLayout>
  );
}

BookingConfirmation.PreviewProps = {
  firstName: "Sanne",
  hotelName: "Amara Luxury Resort & Villas",
  location: "Bodrum, Turkije",
  checkIn: "za 12 sep 2026",
  checkOut: "za 19 sep 2026",
  guests: "2 volwassenen",
  roomType: "Deluxe kamer met zeezicht",
  totalPrice: "€ 1.498",
  bookingNumber: "VL-2026-48213",
  imageUrl: "https://picsum.photos/seed/vialuxury-resort/1072/520",
} satisfies Props;
