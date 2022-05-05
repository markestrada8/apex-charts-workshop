import * as React from "react";
import DeviceChart from "./DeviceChart";
import Layout from "./Layout";
import { name } from "../utils/generators";
import RadialChart from "./radialgradient";

export default function Home() {
  return (
    <Layout>
      <h2>{name("Daenerys", "Targaryen")}</h2>
      <DeviceChart
        options={{
          colors: ["#b52119", "#f2ebeb", "#121010"],
          // colors: ['black', 'grey', 'red'],
          labels: ["Desktop", "Mobile", "Tablet"],
        }}
      />

      <RadialChart
        options={{
          colors: ["#c00", "#3469a7", "#000000", "#234235"],
          labels: ["Smartphones", "laptops", "ipads"],
        }}
      />
    </Layout>
  );
}