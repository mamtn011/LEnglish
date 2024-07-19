"use client";
import BeVerb from "@/components/starting/BeVerb";
import HaveVerb from "@/components/starting/HaveVerb";
import UseOfThere from "@/components/starting/UseOfThere";
import React from "react";

const page = () => {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-xl font-bold mb-6">1. Basic</h3>
        <BeVerb />
        <HaveVerb />
        <UseOfThere />
      </div>
    </section>
  );
};

export default page;
