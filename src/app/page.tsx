'use client';

import Link from "next/link";
import { KPICard } from "./components/KPICard/KPICard"
import { NewsItem } from "./components/NewsItem/NewsItem";
import { useState, useEffect } from "react";




export default function Home() {
  const kpiData = [
    {
      id: 1,
      titleKPI: "Precio promedio del huevo",
      valueKPI: "$45.00",
      unitKPI: "MXN / kg",
      indicatorKPI: "positive",
      variationKPI: 1.2,
    },
    {
      id: 2,
      titleKPI: "Producción diaria de huevo",
      valueKPI: 120,
      unitKPI: "ton",
      indicatorKPI: "negative",
      variationKPI: 0.8,
    },
    {
      id: 3,
      titleKPI: "Consumo per cápita anual",
      valueKPI: 24,
      unitKPI: "kg",
      indicatorKPI: "neutral",
      variationKPI: 0,
    },
    {
      id: 4,
      titleKPI: "Volumen en mercados",
      valueKPI: 95,
      unitKPI: "ton",
      indicatorKPI: "positive",
      variationKPI: 2.3,
    },
    {
      id: 5,
      titleKPI: "Costo de producción por kg",
      valueKPI: "$28.50",
      unitKPI: "kg",
      indicatorKPI: "negative",
      variationKPI: 1.5,
    },
  ];

  const newsData = [
    {
      id: 1,
      title: "Precio del huevo en México sube 19% por presiones del mercado de EE. UU",
      date: "1/1/2026",
      image: "assets/img/news-1.jpg",
      source: "El Imparcial",
      summary: "El precio del huevo en México ha aumentado 19% debido a presiones del mercado en Estados Unidos y factores de oferta y demanda locales. La producción nacional se mantiene estable, pero la variación internacional influye en los precios locales.",
      category: "Precio",
    },
    {
      id: 2,
      title: "Precio del huevo y pollo encarece la canasta básica en México",
      date: "3/1/2026",
      image: "assets/img/news-2.jpg",
      source: "El País",
      summary: "El precio del huevo y del pollo ha encarecido la canasta básica en México debido a la gripe aviar en Estados Unidos, lo que ha aumentado costos y generado presión inflacionaria en productos esenciales.",
      category: "Precio",
    },
    {
      id: 3,
      title: "Granjas avícolas refuerzan sus propias prácticas sanitarias a nivel nacional",
      date: "5/1/2026",
      image: "assets/img/news-10.jpg",
      source: "ADN40",
      summary: "Los precios del kilo de huevo en CDMX y Estado de México se mantienen entre rangos establecidos por el SNIIM, con variaciones según los centros de distribución y mercado local.",
      category: "Sanidad",
    },
    {
      id: 4,
      title: "México mantiene estatus sanitario favorable en producción de huevo",
      date: "8/1/2026",
      image: "assets/img/news-9.jpg",
      source: "La Mejor",
      summary: "La Profeco identificó marcas de huevo que han reducido su precio recientemente, beneficiando al consumidor con opciones más accesibles sin sacrificar calidad.",
      category: "Sanidad",
    },
    {
      id: 5,
      title: "Aumenta el volumen de comercialización de huevo en el mercado nacional",
      date: "10/1/2026",
      image: "assets/img/news-5.jpg",
      source: "NMás",
      summary: "El precio de la cartera de 30 huevos alcanzó un valor histórico de 110 pesos mexicanos en Tijuana, marcado por variaciones de mercado y costos en la cadena de suministro.",
      category: "Comercio",
    },
  ];

  const poultryAnalysis = [
    {
      id: 1,
      title: "Informe de Producción Avícola",
      description:
        "Análisis detallado de la producción nacional de huevo y pollo, incluyendo volumen, crecimiento anual y distribución por región.",
      link: "https://drive.google.com/file/d/16fcSAUBtRR1ApWd3hRpDkNwcQGq9CNNq/view?usp=sharing",
    },
    {
      id: 2,
      title: "Tendencias de Consumo",
      description:
        "Estudio sobre el comportamiento del consumidor, cambios en hábitos alimenticios y demanda de productos avícolas.",
      link: "https://drive.google.com/file/d/16fcSAUBtRR1ApWd3hRpDkNwcQGq9CNNq/view?usp=sharing",
    },
    {
      id: 3,
      title: "Costos de Alimentación",
      description:
        "Evaluación de los principales insumos para la alimentación avícola, variaciones de precios y su impacto en la rentabilidad.",
      link: "https://drive.google.com/file/d/16fcSAUBtRR1ApWd3hRpDkNwcQGq9CNNq/view?usp=sharing",
    },
    {
      id: 4,
      title: "Eficiencia Productiva",
      description:
        "Indicadores clave de desempeño en granjas avícolas, eficiencia por ciclo productivo y uso de recursos.",
      link: "https://drive.google.com/file/d/16fcSAUBtRR1ApWd3hRpDkNwcQGq9CNNq/view?usp=sharing",
    },
    {
      id: 5,
      title: "Impacto de Precios al Consumidor",
      description:
        "Análisis del comportamiento de precios de huevo y pollo en el mercado interno y su relación con costos de producción.",
      link: "https://drive.google.com/file/d/16fcSAUBtRR1ApWd3hRpDkNwcQGq9CNNq/view?usp=sharing",
    },
  ];

  const poultryDocuments = [
    {
      id: 1,
      title: "Normas Sanitarias Avícolas",
      description:
        "Compendio de regulaciones y lineamientos sanitarios aplicables a la producción de huevo y pollo.",
      link: "https://drive.google.com/file/d/16fcSAUBtRR1ApWd3hRpDkNwcQGq9CNNq/view?usp=sharing",
    },
    {
      id: 2,
      title: "Reporte de Comercio Exterior",
      description:
        "Información sobre exportaciones e importaciones de productos avícolas, mercados destino y balanza comercial.",
      link: "https://drive.google.com/file/d/16fcSAUBtRR1ApWd3hRpDkNwcQGq9CNNq/view?usp=sharing",
    },
    {
      id: 3,
      title: "Estudios de Mercado",
      description:
        "Investigaciones de mercado enfocadas en competitividad, precios y oportunidades del sector avícola.",
      link: "https://drive.google.com/file/d/16fcSAUBtRR1ApWd3hRpDkNwcQGq9CNNq/view?usp=sharing",
    },
    {
      id: 4,
      title: "Lineamientos de Bienestar Animal",
      description:
        "Documentación técnica sobre prácticas recomendadas de bienestar animal en la producción avícola.",
      link: "https://drive.google.com/file/d/16fcSAUBtRR1ApWd3hRpDkNwcQGq9CNNq/view?usp=sharing",
    },
    {
      id: 5,
      title: "Guías Técnicas de Producción",
      description:
        "Manuales y guías operativas para la producción eficiente y sostenible de huevo y pollo.",
      link: "https://drive.google.com/file/d/16fcSAUBtRR1ApWd3hRpDkNwcQGq9CNNq/view?usp=sharing",
    },
  ];


  useEffect(() => {
    const accordions = document.querySelectorAll<HTMLDetailsElement>(
      ".accordion-item"
    );

    accordions.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (item.open) {
          accordions.forEach((other) => {
            if (other !== item) other.open = false;
          });
        }
      });
    });

    // cleanup (importante en React)
    return () => {
      accordions.forEach((item) => {
        item.replaceWith(item.cloneNode(true));
      });
    };
  }, []);




  return (
    <main className="main-content py-6 px-6 xl:py-8 xl:px-10">
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-4 mb-10">
        {kpiData.map((kpi) => (
          <KPICard key={kpi.id} title={kpi.titleKPI} value={kpi.valueKPI} unit={kpi.unitKPI} indicator={kpi.indicatorKPI} variation={kpi.variationKPI} />
        ))}
      </div>
      <div className="xl:grid grid-cols-12 gap-10 mb-10 news-and-embedded">
        <div className="col-span-4 col-news mb-16 xl:mb-0">
          <h2>Noticias</h2>
          <ul className="news-list">
            {newsData.map((news) => (
              <NewsItem key={news.id} title={news.title} date={news.date} image={news.image} category={news.category} />
            ))}
          </ul>
          <div className="mt-4 text-end">
            <Link href={''} className="btn btn-primary">Ver más Noticias</Link>
          </div>
        </div>
        <div className="col-span-8 ">
          {/* <h2>Tablero</h2> */}
          <div className="side-power-bi">
            <div>
              <iframe src="https://www.economia.gob.mx/datamexico/en/profile/product/animal-products#product-price-by-states"></iframe>
            </div>
          </div>
          <div className="mt-4 text-end">
            <Link href={''} className="btn btn-primary">Ver más Tableros</Link>
          </div>
        </div>
      </div>
      <div className="md:grid grid-cols-12 gap-10">
        <div className="col-span-6 mb-4">
          <div className="documentation-content">
            <h3 className="title-documentation">Análisis</h3>
            <div className="accordion">
              {poultryAnalysis.map((analysis, index) => (
                <details key={analysis.id} open={index === 0} className="accordion-item">
                  <summary>{analysis.title}</summary>
                  <div className="accordion-body">
                    <p>
                      {analysis.description}
                    </p>
                    <div className="mt-4">
                      <a href={analysis.link} target="_blank" download rel="noopener noreferrer" className="btn btn-secondary">Descargar Análisis</a>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-6 mb-4">
          <div className="documentation-content">
            <h3 className="title-documentation">Documentos</h3>
            <div className="accordion">
              {poultryDocuments.map((document) => (
                <details key={document.id} className="accordion-item">
                  <summary>{document.title}</summary>
                  <div className="accordion-body">
                    <p>
                      {document.description}
                    </p>
                    <div className="mt-4">
                      <a href={document.link} target="_blank" download rel="noopener noreferrer" className="btn btn-secondary">Descargar Documento</a>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
