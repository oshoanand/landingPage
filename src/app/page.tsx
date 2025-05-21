import Image from "next/image";
//  import { Mail, Twitter, Github, Linkedin, Sparkles } from 'lucide-react';
import AnimatedBackground from "@/components/animated-background";
// import CountdownTimer from '@/components/countdown-timer';
// import SubscriptionForm from '@/components/subscription-form';
// import TaglineGenerator from '@/components/tagline-generator';
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4 md:p-8 overflow-x-hidden">
        <div className="w-full max-w-3xl space-y-10 md:space-y-12 text-center bg-card/80 dark:bg-card/60 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-2xl">
          <header className="space-y-3">
            <div className="inline-flex items-center justify-center">
              {/* <Sparkles className="h-12 w-12 text-primary mr-3" /> */}
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-pink-500">
                {siteConfig.name}
              </h1>
            </div>
            <p className="text-2xl md:text-3xl font-light text-muted-foreground">
              Скоро!
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium">Чего ожидать</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl mx-auto">
              {siteConfig.websiteTeaser}
            </p>
          </section>

          {/* <CountdownTimer launchDate={siteConfig.launchDate} /> */}

          {/* <Separator className="my-8 bg-border/50" /> */}

          {/* <SubscriptionForm /> */}

          {/* <Separator className="my-8 bg-border/50" /> */}

          {/* <TaglineGenerator /> */}

          <footer className="mt-10 pt-8 border-t border-border/50">
            {/* <p className="text-sm text-muted-foreground mb-4">
              Connect with us:
            </p> */}
            {/* <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" asChild>
                <Link href={`mailto:${siteConfig.contact.email}`} aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={siteConfig.contact.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={siteConfig.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div> */}
            <p className="mt-8 text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
