"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { CheckCircle, Circle, Code, DollarSign, Droplets, Github, Twitter, Dribbble, Instagram, Linkedin, MessageSquare, Package, Share2, Sparkles, Star, TrendingUp, Users, Wind, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="animatedAurora"
      cardStyle="glass-depth"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Products", id: "products" },
            { name: "Features", id: "features" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Mentos JS"
          button={{
            text: "Try Now",
            href: "https://github.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Mentos JS"
          description="The fizzy JavaScript library that adds that refreshing Coca Cola vibe to your hookah experience"
          buttons={[
            { text: "Get Started", href: "https://github.com" },
            { text: "View Demo", href: "features" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763472473174-kxiyur9h.jpg"
          imageAlt="Mentos JS hookah background"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="The Perfect Blend"
          description="Mentos JS combines the refreshing fizz of your favorite soda with the smooth, social experience of hookah. Our JavaScript library creates bubble effects and animations that capture that perfect Coca Cola moment."
          tag="About Us"
          tagIcon={Sparkles}
          bulletPoints={[
            {
              title: "Fizzy Effects",
              description: "JavaScript animations that bubble and pop like your favorite carbonated drink",
              icon: Zap
            },
            {
              title: "Social Experience",
              description: "Built for sharing moments with friends, just like passing the hookah",
              icon: Users
            },
            {
              title: "Refreshing Code",
              description: "Clean, minty fresh JavaScript that's easy to implement and customize",
              icon: Code
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763472476266-f3xt1j7g.jpg"
          imageAlt="Coca Cola and hookah experience"
          textboxLayout="default"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="Refreshing Features"
          description="Discover what makes Mentos JS the perfect companion for your hookah sessions"
          tag="Features"
          tagIcon={Star}
          features={[
            { title: "Bubble Animations", icon: Circle },
            { title: "Fizzy Transitions", icon: Sparkles },
            { title: "Social Sharing", icon: Share2 },
            { title: "Cola Integration", icon: Droplets },
            { title: "Hookah Vibes", icon: Wind }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          showIconBoxBackground={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Hookah Collection"
          description="Premium hookahs designed for the ultimate Mentos JS experience"
          tag="Products"
          tagIcon={Package}
          products={[
            {
              id: "1",
              brand: "Mentos",
              name: "Classic Fizz Hookah",
              price: "$299.00",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763472483105-plnteivl.jpg",
              imageAlt: "Classic Fizz Hookah"
            },
            {
              id: "2",
              brand: "Mentos",
              name: "Cola Fusion Pro",
              price: "$449.00",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763472484292-o8yzzt0a.jpg",
              imageAlt: "Cola Fusion Pro Hookah"
            },
            {
              id: "3",
              brand: "Mentos",
              name: "Portable Bubble",
              price: "$199.00",
              rating: 4,
              reviewCount: "956",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763472485596-j5lyc45r.jpg",
              imageAlt: "Portable Bubble Hookah"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          textboxLayout="default"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Vibe"
          description="Select the perfect plan for your Mentos JS hookah experience"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",
              badge: "Getting Started",
              badgeIcon: Sparkles,
              price: "Free",
              subtitle: "Perfect for trying out the fizz",
              features: [
                "Basic bubble animations",
                "Cola color themes",
                "Community support",
                "5 hookah sessions/month"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$29/mo",
              subtitle: "For the serious hookah enthusiast",
              features: [
                "Advanced fizzy effects",
                "Premium Cola integration",
                "Priority support",
                "Unlimited sessions",
                "Custom bubble patterns"
              ]
            },
            {
              id: "enterprise",
              badge: "For Teams",
              badgeIcon: Users,
              price: "$99/mo",
              subtitle: "Scale your hookah lounge",
              features: [
                "Team collaboration tools",
                "API access",
                "White-label options",
                "Analytics dashboard",
                "24/7 support"
              ]
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Fizzing Numbers"
          description="See how Mentos JS is bubbling up across the hookah community"
          tag="Stats"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "Active Users",
              description: "JavaScript developers enjoying the fizz",
              icon: Users
            },
            {
              id: "2",
              value: "1M+",
              title: "Bubble Effects",
              description: "Generated across all applications",
              icon: Circle
            },
            {
              id: "3",
              value: "25K+",
              title: "Hookah Sessions",
              description: "Enhanced with Mentos JS animations",
              icon: Wind
            },
            {
              id: "4",
              value: "99.9%",
              title: "Uptime",
              description: "Refreshingly reliable performance",
              icon: CheckCircle
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="opacity"
          textboxLayout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="The Fizz Squad"
          description="Meet the team behind the refreshing Mentos JS experience"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alex Bubble",
              role: "Lead Developer",
              description: "Passionate about creating fizzy JavaScript experiences that pop. Loves combining code with cola.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763472487219-fk28imcc.jpg",
              imageAlt: "Alex Bubble",
              socialLinks: [
                { icon: Github, url: "https://github.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "Maya Fizz",
              role: "UX Designer",
              description: "Designs interfaces that bubble with personality. Expert in cola-inspired color schemes and hookah UX.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763472488794-ulpo960q.jpg",
              imageAlt: "Maya Fizz",
              socialLinks: [
                { icon: Dribbble, url: "https://dribbble.com" },
                { icon: Instagram, url: "https://instagram.com" }
              ]
            },
            {
              id: "3",
              name: "Sam Mentos",
              role: "Product Manager",
              description: "Orchestrates the perfect blend of features. Ensures every release has that refreshing Mentos kick.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763472490349-a5tujiyy.jpg",
              imageAlt: "Sam Mentos",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Users Say"
          description="Real feedback from developers who've added the fizz to their projects"
          tag="Testimonials"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Frontend Developer",
              company: "TechBubble Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763472492017-zhnkvbxb.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "2",
              name: "Mike Rodriguez",
              role: "Creative Director",
              company: "Fizzy Studios",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763472494072-kege7bkm.jpg",
              imageAlt: "Mike Rodriguez"
            },
            {
              id: "3",
              name: "Emily Zhang",
              role: "Full Stack Developer",
              company: "Cola Labs",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763472495400-f9svv2qg.jpg",
              imageAlt: "Emily Zhang"
            },
            {
              id: "4",
              name: "David Kim",
              role: "UX Engineer",
              company: "Hookah Digital",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763472497001-hiwyxfcf.jpg",
              imageAlt: "David Kim"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Ready to add some fizz to your project? Let's connect and create something refreshing together."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "company", type: "text", placeholder: "Company (Optional)", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your project and how Mentos JS can help...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763472499079-d40w15m1.jpg"
          imageAlt="Contact us background"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Documentation", href: "https://docs.example.com" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Team", href: "team" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "GitHub", href: "https://github.com" },
                { label: "Blog", href: "https://blog.example.com" },
                { label: "Community", href: "https://discord.com" }
              ]
            }
          ]}
          logoText="Mentos JS"
          copyrightText="© 2025 | Mentos JS - Adding fizz to your code"
        />
      </div>
    </ThemeProvider>
  );
}