"use client";

import React from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import Link from "next/link";

export default function DescriptionMovie() {
  return (
    <>
      <NavBar />
      <Link style={{ color: "#000" }} href="/">
        Home
      </Link>
    </>
  );
}
