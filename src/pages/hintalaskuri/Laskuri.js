import React, { useState } from "react";
import { SectionColumn } from "../../components/Section";
import "../../infrastructure/styles/slider.css";
import styled from "styled-components";
import Slider from "../../components/Slider";
export default function Laskuri() {
  const [kesto, setKesto] = useState(50);
  const [kerrat, setKerrat] = useState(50);

  return (
    <SectionColumn>
      <Slider
        title='Kuinka monta kertaa viikossa haluat harjoitella?'
        unit='kertaa'
        value={kerrat}
        setValue={setKerrat}
        min={20}
        max={80}
      />
    </SectionColumn>
  );
}
