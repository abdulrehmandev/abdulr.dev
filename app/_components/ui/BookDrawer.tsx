"use client";

import React from "react";
import { Drawer } from "vaul";

import ContactForm from "./ContactForm";
import Link from "next/link";

const BookDrawer = () => {
  return (
    <Drawer.Portal>
      <Drawer.Overlay className="bg-dot-neutral-100/50 fixed inset-0 bg-black/20 backdrop-blur-sm z-[5000]" />
      <Drawer.Content className="z-[5001] bg-neutral-50 flex flex-col rounded-t-3xl h-full mt-24 max-h-[85%] fixed bottom-0 inset-x-0 overflow-hidden">
        <div className="flex flex-col overflow-auto scrollbar">
          <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-neutral-500" />
          <div className="pt-14 pb-8 px-4 flex-1 text-center">
            <Drawer.Title className="text-4xl text-neutral-700 font-primary">
              Let&apos;s Talk
            </Drawer.Title>
            <Drawer.Description className="text-neutral-500 mt-2">
              Send in a message or book a call with us. We&apos;re always happy
              to help.
            </Drawer.Description>
            <div className="my-20 gap-20 md:gap-20 grid grid-cols-1 md:grid-cols-2 justify-center md:max-w-[70%] mx-auto">
              <div className="md:mt-20">
                <h2 className="text-3xl text-neutral-700 font-primary">
                  Perfer to talk directly?
                  <br />
                  Schedule a call
                </h2>
                <Link
                  href="https://cal.com/abdulrdev/consultations"
                  target="_blank"
                  className="block w-fit mx-auto hover:scale-105 transition-all rounded-full mt-4 bg-black text-white font-semibold text-lg py-4 px-8"
                >
                  Book a call 🗓️
                </Link>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  );
};

export default BookDrawer;
