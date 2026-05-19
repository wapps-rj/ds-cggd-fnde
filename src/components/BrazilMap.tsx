import React from "react";
interface BrazilMapProps {
  data?: { id: string; value: number; color: string }[];
  onStateClick?: (stateId: string) => void;
  className?: string;
}
const BRAZIL_PATHS = [
