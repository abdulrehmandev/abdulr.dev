"use client";

import React from "react";
import Input from "./Input";
import ReactTextareaAutosize from "react-textarea-autosize";

const ContactForm = () => {
  return (
    <div className="mx-auto max-w-sm flex flex-col justify-center text-center gap-3 w-full">
      <p className="text-3xl text-neutral-700 font-primary mb-4">
        Write me a message.
      </p>
      <Input placeholder="Your full name?" />
      <Input placeholder="and email?" />
      <ReactTextareaAutosize
        minRows={3}
        // maxRows={5}
        onResize={() => {}}
        spellCheck
        placeholder="now write your message..."
        className="bg-neutral-50 border border-neutral-200 placeholder:text-neutral-400 rounded-lg py-2 px-4 text-neutral-700 focus:outline-orange-500 font-medium scrollbar"
      />
      <button className="w-fit mx-auto hover:bg-black/80 transition-all mt-3 rounded-full bg-black text-white font-medium text-lg py-2 px-6">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
