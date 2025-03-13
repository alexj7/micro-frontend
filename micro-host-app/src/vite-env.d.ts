/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PUBLIC_URL: string;
    readonly VITE_MICRO_1_URL: string;
    readonly VITE_MICRO_2_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }