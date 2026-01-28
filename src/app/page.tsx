"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Music, Sparkles, CalendarDays, Star, Zap, Heart, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="mediumLargeSizeLargeTitles"
      background="floatingGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Music", id: "music" },
            { name: "About", id: "about" },
            { name: "Events", id: "events" },
            { name: "Contact", id: "contact" },
            { name: "Press", id: "press" }
          ]}
          brandName="Bibito"
          bottomLeftText="Music Artist"
          bottomRightText="booking@bibito.music"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Bibito"
          description="Award-winning music artist crafting bold, innovative sounds that resonate globally. Discover the latest releases, live performances, and exclusive content."
          background={{ variant: "sparkles-gradient" }}
          tag="Artist Portfolio"
          tagIcon={Music}
          buttons={[
            { text: "Listen Now", href: "#music" },
            { text: "Tour Dates", href: "#events" }
          ]}
          mediaItems={[
            { imageSrc: "https://img.b2bpic.net/free-photo/vintage-dressed-rocker-playing-electric-guitar_23-2148328610.jpg", imageAlt: "Bibito - Music Artist" },
            { imageSrc: "https://img.b2bpic.net/free-photo/mixing-engineer-pressing-sliders-control-desk-balance-tracks_482257-122057.jpg", imageAlt: "Music Studio Session" },
            { imageSrc: "https://img.b2bpic.net/free-photo/rear-view-carefree-fans-having-fun-music-festival-front-illuminated-stage-night_637285-615.jpg", imageAlt: "Live Performance" },
            { imageSrc: "https://img.b2bpic.net/free-vector/gradient-album-cover-template_52683-124652.jpg", imageAlt: "Album Artwork" },
            { imageSrc: "https://img.b2bpic.net/free-vector/gradient-album-cover-template_52683-124660.jpg", imageAlt: "Album Release" },
            { imageSrc: "https://img.b2bpic.net/free-vector/gradient-album-cover-template_23-2150574681.jpg", imageAlt: "Latest Project" }
          ]}
        />
      </div>

      <div id="music" data-section="music">
        <ProductCardTwo
          title="Featured Tracks"
          description="Explore Bibito's most popular and latest releases across all major streaming platforms."
          tag="New Releases"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",              brand: "Bibito",              name: "Midnight Dreams",              price: "2.8M streams",              rating: 5,
              reviewCount: "48.5k",              imageSrc: "https://img.b2bpic.net/free-vector/gradient-album-cover-template_52683-124652.jpg",              imageAlt: "Midnight Dreams Album"
            },
            {
              id: "2",              brand: "Bibito",              name: "Electric Horizon",              price: "1.9M streams",              rating: 5,
              reviewCount: "32.1k",              imageSrc: "https://img.b2bpic.net/free-vector/gradient-album-cover-template_52683-124660.jpg",              imageAlt: "Electric Horizon Track"
            },
            {
              id: "3",              brand: "Bibito",              name: "Echoes of Tomorrow",              price: "1.5M streams",              rating: 5,
              reviewCount: "25.7k",              imageSrc: "https://img.b2bpic.net/free-vector/gradient-album-cover-template_23-2150574681.jpg",              imageAlt: "Echoes of Tomorrow"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="discography" data-section="discography">
        <FeatureCardTwentyThree
          title="Complete Discography"
          description="Full collection of albums, EPs, and singles showcasing Bibito's artistic evolution"
          tag="Albums & EPs"
          tagIcon={Music}
          features={[
            {
              id: "1",              title: "Nocturne Sessions",              tags: ["Album", "2024"],
              imageSrc: "https://img.b2bpic.net/free-vector/gradient-album-cover-template_52683-124652.jpg",              imageAlt: "Nocturne Sessions Album"
            },
            {
              id: "2",              title: "Velocity - The Remix Project",              tags: ["EP", "2023"],
              imageSrc: "https://img.b2bpic.net/free-vector/gradient-album-cover-template_52683-124660.jpg",              imageAlt: "Velocity Remix Project"
            },
            {
              id: "3",              title: "Ethereal Frequencies",              tags: ["Album", "2023"],
              imageSrc: "https://img.b2bpic.net/free-vector/gradient-album-cover-template_23-2150574681.jpg",              imageAlt: "Ethereal Frequencies Album"
            },
            {
              id: "4",              title: "Pulse",              tags: ["Single", "2024"],
              imageSrc: "https://img.b2bpic.net/free-photo/mixing-engineer-pressing-sliders-control-desk-balance-tracks_482257-122057.jpg",              imageAlt: "Pulse Single"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="events" data-section="events">
        <MetricCardTen
          title="Live Events & Performances"
          description="Upcoming tour dates and live performances. Join Bibito on stage for unforgettable musical experiences."
          tag="Tour Dates"
          tagIcon={CalendarDays}
          metrics={[
            {
              id: "1",              title: "Urban Music Festival",              subtitle: "New York, NY · Main Stage · 8:00 PM",              category: "Festival",              value: "Apr 15",              buttons: [
                { text: "Get Tickets", href: "https://example.com/tickets" }
              ]
            },
            {
              id: "2",              title: "Electric Nights Concert",              subtitle: "Los Angeles, CA · Staples Center · 7:30 PM",              category: "Concert",              value: "May 3",              buttons: [
                { text: "Book Now", href: "https://example.com/tickets" }
              ]
            },
            {
              id: "3",              title: "Summer Beats Tour",              subtitle: "Chicago, IL · United Center · 8:00 PM",              category: "Tour Stop",              value: "Jun 12",              buttons: [
                { text: "Get Tickets", href: "https://example.com/tickets" }
              ]
            },
            {
              id: "4",              title: "Rhythm & Soul Night",              subtitle: "Miami, FL · American Airlines Arena · 9:00 PM",              category: "Special Event",              value: "Jul 8",              buttons: [
                { text: "Reserve Seats", href: "https://example.com/tickets" }
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="About The Artist"
          tagIcon={Star}
          title="Bibito is a visionary music producer and artist pushing the boundaries of contemporary sound design and electronic music innovation."
          description="Creative Powerhouse"
          subdescription="Crafting music that transcends genres and inspires millions globally"
          icon={Zap}
          imageSrc="https://img.b2bpic.net/free-photo/vintage-dressed-rocker-playing-electric-guitar_23-2148328610.jpg"
          imageAlt="Bibito Artist Portrait"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              imageSrc: "https://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg",              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",              name: "Marcus Chen",              imageSrc: "https://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              imageAlt: "Marcus Chen"
            },
            {
              id: "3",              name: "Emma Rodriguez",              imageSrc: "https://img.b2bpic.net/free-photo/closeup-happy-middle-aged-business-leader_1262-4823.jpg",              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",              name: "Alex Thompson",              imageSrc: "https://img.b2bpic.net/free-photo/portrait-young-confident-businessman-wearing-glasses_158595-5360.jpg",              imageAlt: "Alex Thompson"
            },
            {
              id: "5",              name: "Jessica Lee",              imageSrc: "https://img.b2bpic.net/free-photo/happy-elegant-joyful-guy-grey-jacket-shirt-wears-glasses-gray_291650-1303.jpg",              imageAlt: "Jessica Lee"
            },
            {
              id: "6",              name: "David Kim",              imageSrc: "https://img.b2bpic.net/free-photo/closeup-portrait-caucasian-happy-teacher-glasses_74855-9736.jpg",              imageAlt: "David Kim"
            }
          ]}
          cardTitle="Trusted by over 5 million music fans worldwide"
          cardTag="Join the Community"
          cardTagIcon={Heart}
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Connected"
          description="Subscribe to get exclusive behind-the-scenes content, new release announcements, and VIP event invitations directly in your inbox."
          useInvertedBackground="noInvert"
          imageSrc="https://img.b2bpic.net/free-photo/rear-view-carefree-fans-having-fun-music-festival-front-illuminated-stage-night_637285-615.jpg"
          imageAlt="Live Performance"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Bibito"
          columns={[
            {
              title: "Music",              items: [
                { label: "Spotify", href: "https://spotify.com" },
                { label: "Apple Music", href: "https://music.apple.com" },
                { label: "YouTube Music", href: "https://music.youtube.com" }
              ]
            },
            {
              title: "Community",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "Discord", href: "https://discord.com" }
              ]
            },
            {
              title: "About",              items: [
                { label: "Biography", href: "#about" },
                { label: "Press Kit", href: "#press" },
                { label: "Contact", href: "#contact" }
              ]
            }
          ]}
          copyrightText="© 2025 Bibito. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}