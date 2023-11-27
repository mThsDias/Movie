import { ImageComponent } from "@/components/Image";
import React from "react";

interface ProductionCompaniesProps {
  production_companies: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
}

export const ProductionCompanies = ({
  production_companies,
}: ProductionCompaniesProps) => {
  return (
    <>
      {production_companies?.map((company, index) => (
        <section key={index}>
          <ImageComponent img={company.logo_path} w={100} h={100} />
        </section>
      ))}
    </>
  );
};
