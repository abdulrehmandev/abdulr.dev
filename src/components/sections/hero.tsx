import React from "react";
import { Container } from "../layout";
import { buttonVariants, H1, Icon, P, Highlight, Tooltip } from "../ui";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib";
import { ConsultationLink, DayIStarted, SocialLinks } from "@/data";

const Hero = () => {
  const totalDays = React.useMemo(() => {
    const startDate = new Date(DayIStarted);
    const currentDate = new Date();

    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  }, []);

  return (
    <section>
      <Container className="pt-24 pb-24">
        <div className="grid md:grid-cols-2 gap-20 md:gap-0 place-items-center">
          <div>
            <p className="block w-fit text-xl md:text-3xl font-bold tracking-tight md:tracking-tighter mb-4 md:mb-6 text-primary">
              Software Engineer
            </p>
            <H1 className="mb-4">Hey, this is Abdul Rehman</H1>
            <P className="mb-4">
              I am from a small and beautiful city{" "}
              <Tooltip side="top" content="Check out my city on Google Maps">
                <Link href="https://www.google.com/maps/place/Gujrat,+Punjab/@32.5822315,73.9881378,25099m/data=!3m1!1e3!4m6!3m5!1s0x391f1b031e43442d:0x870fd23543d684c!8m2!3d32.5730725!4d74.1005044!16zL20vMDIwbnF3?entry=ttu">
                  <Highlight>Gujrat</Highlight>
                </Link>
              </Tooltip>
              , Pakistan. I am a self-taught developer and have been working in
              the industry for past 3+ years.
            </P>
            <ul className="flex items-center gap-2">
              {SocialLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    className={cn(
                      buttonVariants({
                        variant: "icon",
                        size: "icon-sm",
                      })
                    )}
                    href={item.href}
                    title={item.label}
                  >
                    <Icon name={item.icon} size={18} />
                  </Link>
                </li>
              ))}
              <li>
                <Tooltip content="Total number of days since I started coding">
                  <span
                    className={cn(
                      buttonVariants({
                        variant: "icon",
                      })
                    )}
                  >
                    {totalDays} days
                  </span>
                </Tooltip>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-8">
              <Link
                href={ConsultationLink}
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "lg",
                  })
                )}
              >
                Book a Call
              </Link>
            </div>
          </div>
          <div className="relative w-full aspect-square max-w-xs md:max-w-md">
            <Image
              src="/static/images/personal-photo.png"
              alt="Abdul Rehman"
              className="object-contain"
              fill
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
