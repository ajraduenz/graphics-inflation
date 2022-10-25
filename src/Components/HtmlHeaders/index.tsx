import Head from "next/head";
import Script from "next/script";
import React from "react";

type Props = {};

const HtmlHeaders = (props: Props) => {
  return (
    <>
      <Head key={1}>
        <link rel="icon" href="/saving-money.svg" />
        <title>Calcular Juros Compostos</title>
        <meta
          name="description"
          content="Calculadora de juros compostos, calcule e veja a evolução do seu patrimônio com gráfico, simulador grátis online"
        />
      </Head>
      <Script id="google-tag-manager" async src="https://www.googletagmanager.com/gtag/js?id=G-8RJMTV7YRX"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
     function gtag() { dataLayer.push(arguments); }
     gtag('js', new Date());
     gtag('config', 'G-8RJMTV7YRX');`}
      </Script>
      <Script
        async
        id="google-ads"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8222444604241668"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
};

export default HtmlHeaders;
