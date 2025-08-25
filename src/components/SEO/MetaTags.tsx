import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoData } from '../../data/seo';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title = seoData.title,
  description = seoData.description,
  image = seoData.openGraph.image,
  url = seoData.openGraph.url,
  type = seoData.openGraph.type
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <meta name="author" content="PeakMind" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={seoData.openGraph.siteName} />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={seoData.twitter.card} />
      <meta name="twitter:site" content={seoData.twitter.site} />
      <meta name="twitter:creator" content={seoData.twitter.creator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={seoData.twitter.image} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#7c3aed" />
      <meta name="msapplication-TileColor" content="#7c3aed" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Hreflang for internationalization */}
      <link rel="alternate" hrefLang="es" href="https://peakmind.com/es" />
      <link rel="alternate" hrefLang="en" href="https://peakmind.com/en" />
      <link rel="alternate" hrefLang="x-default" href="https://peakmind.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(seoData.structuredData)}
      </script>
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};