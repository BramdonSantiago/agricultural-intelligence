'use client';

import Link from "next/link";
import { KPICard } from "./components/KPICard/KPICard"
import { NewsItem } from "./components/NewsItem/NewsItem";
import { useState, useEffect } from "react";




export default function Home() {
  const kpiData: any = [
    {
      titleKPI: "Precio promedio del huevo",
      valueKPI: "$45.00",
      unitKPI: "MXN / kg",
      indicatorKPI: "positive",
      variationKPI: 1.2,
    },
    {
      titleKPI: "Producción diaria de huevo",
      valueKPI: 120,
      unitKPI: "ton",
      indicatorKPI: "negative",
      variationKPI: 0.8,
    },
    {
      titleKPI: "Consumo per cápita anual",
      valueKPI: 24,
      unitKPI: "kg",
      indicatorKPI: "neutral",
      variationKPI: 0,
    },
    {
      titleKPI: "Volumen en mercados",
      valueKPI: 95,
      unitKPI: "ton",
      indicatorKPI: "positive",
      variationKPI: 2.3,
    },
    {
      titleKPI: "Costo de producción por kg",
      valueKPI: "$28.50",
      unitKPI: "kg",
      indicatorKPI: "negative",
      variationKPI: 1.5,
    },
  ];

  const newsData: any = [
    {
      id: 1,
      title: "Precio del huevo en México sube 19% por presiones del mercado de EE. UU.",
      date: "01/01/2026",
      image: "assets/img/news-1.jpg",
      source: "El Imparcial",
      summary: "El precio del huevo en México ha aumentado 19% debido a presiones del mercado en Estados Unidos y factores de oferta y demanda locales. La producción nacional se mantiene estable, pero la variación internacional influye en los precios locales.",
      category: "Precio",
    },
    {
      id: 2,
      title: "Precio del huevo y pollo encarece la canasta básica en México",
      date: "03/01/2026",
      image: "assets/img/news-2.jpg",
      source: "El País",
      summary: "El precio del huevo y del pollo ha encarecido la canasta básica en México debido a la gripe aviar en Estados Unidos, lo que ha aumentado costos y generado presión inflacionaria en productos esenciales.",
      category: "Precio",
    },
    {
      id: 3,
      title: "Granjas avícolas refuerzan sus propias prácticas sanitarias a nivel nacional",
      date: "05/01/2026",
      image: "assets/img/news-10.jpg",
      source: "ADN40",
      summary: "Los precios del kilo de huevo en CDMX y Estado de México se mantienen entre rangos establecidos por el SNIIM, con variaciones según los centros de distribución y mercado local.",
      category: "Sanidad",
    },
    {
      id: 4,
      title: "México mantiene estatus sanitario favorable en producción de huevo",
      date: "08/01/2026",
      image: "assets/img/news-9.jpg",
      source: "La Mejor",
      summary: "La Profeco identificó marcas de huevo que han reducido su precio recientemente, beneficiando al consumidor con opciones más accesibles sin sacrificar calidad.",
      category: "Sanidad",
    },
    {
      id: 5,
      title: "Aumenta el volumen de comercialización de huevo en el mercado nacional",
      date: "10/01/2026",
      image: "assets/img/news-5.jpg",
      source: "NMás",
      summary: "El precio de la cartera de 30 huevos alcanzó un valor histórico de 110 pesos mexicanos en Tijuana, marcado por variaciones de mercado y costos en la cadena de suministro.",
      category: "Comercio",
    },
  ];




  return (
    <main className="main-content py-6 px-6 xl:py-8 xl:px-10">
      <div className="xl:flex justify-between gap-4 mb-10">
        {kpiData.map((kpi, index) => (
          <KPICard key={index} title={kpi.titleKPI} value={kpi.valueKPI} unit={kpi.unitKPI} indicator={kpi.indicatorKPI} variation={kpi.variationKPI} />
        ))}
      </div>
      <div className="xl:grid grid-cols-12 gap-10 mb-10 news-and-embedded">
        <div className="col-span-4 col-news mb-4">
          <h2>Noticias</h2>
          <ul className="news-list">
            {newsData.map((news, index) => (
              <div key={index} className="mb-2">
                <NewsItem title={news.title} date={news.date} image={news.image} category={news.category} />
              </div>
            ))}
          </ul>
          <div className="mt-4 text-end">
            <Link href={''} className="btn btn-primary">Ver más Noticias</Link>
          </div>
        </div>
        <div className="col-span-8 mb-4">
          {/* <h2>Tablero</h2> */}
          <div className="side-power-bi">
            <div>
              <iframe src="http://www.economia.gob.mx/datamexico/en/profile/product/animal-products#product-price-by-states"></iframe>
            </div>
          </div>
          <div className="mt-4 text-end">
            <Link href={''} className="btn btn-primary">Ver más Tableros</Link>
          </div>
        </div>
      </div>
      <div className="xl:grid grid-cols-12 gap-10">
        <div className="col-span-6 mb-4">
          <div className="documentation-content">
            <h3 className="title-documentation">Análisis</h3>
            <div className="accordion">
              <details open className="accordion-item">
                <summary>Informe de producción avicola</summary>
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iste sapiente rerum ex deserunt enim dignissimos maiores quia. Dolorum, exercitationem.
                  </p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </details>
              <details className="accordion-item">
                <summary>Informe de producción avicola</summary>
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iste sapiente rerum ex deserunt enim dignissimos maiores quia. Dolorum, exercitationem.
                  </p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </details>
              <details className="accordion-item">
                <summary>Informe de producción avicola</summary>
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iste sapiente rerum ex deserunt enim dignissimos maiores quia. Dolorum, exercitationem.
                  </p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </details>
              <details className="accordion-item">
                <summary>Informe de producción avicola</summary>
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iste sapiente rerum ex deserunt enim dignissimos maiores quia. Dolorum, exercitationem.
                  </p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </details>
              <details className="accordion-item">
                <summary>Informe de producción avicola</summary>
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iste sapiente rerum ex deserunt enim dignissimos maiores quia. Dolorum, exercitationem.
                  </p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
        <div className="col-span-6 mb-4">
          <div className="documentation-content">
            <h3 className="title-documentation">Documentos</h3>
            <div className="accordion">
              <details open className="accordion-item">
                <summary>Normas sanitarias</summary>
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iste sapiente rerum ex deserunt enim dignissimos maiores quia. Dolorum, exercitationem.
                  </p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </details>
              <details className="accordion-item">
                <summary>Normas sanitarias</summary>
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iste sapiente rerum ex deserunt enim dignissimos maiores quia. Dolorum, exercitationem.
                  </p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </details>
              <details className="accordion-item">
                <summary>Normas sanitarias</summary>
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iste sapiente rerum ex deserunt enim dignissimos maiores quia. Dolorum, exercitationem.
                  </p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </details>
              <details className="accordion-item">
                <summary>Normas sanitarias</summary>
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iste sapiente rerum ex deserunt enim dignissimos maiores quia. Dolorum, exercitationem.
                  </p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </details>
              <details className="accordion-item">
                <summary>Normas sanitarias</summary>
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iste sapiente rerum ex deserunt enim dignissimos maiores quia. Dolorum, exercitationem.
                  </p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
