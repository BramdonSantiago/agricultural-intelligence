'use client';

import Link from "next/link";
import { KPICard } from "./components/KPICard/KPICard"
import { NewsItem } from "./components/NewsItem/NewsItem";
import { useState, useEffect } from "react";

export default function Home() {
  const kpiData = [
    {
      titleKPI: "Precio promedio del huevo",
      valueKPI: "$45.00",
      unitKPI: "kg",
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

  // function getRandomVariation() {
  //   // Simula cambio diario entre -1% y +1%
  //   return parseFloat((Math.random() * 2 - 1).toFixed(2));
  // }

  // function getIndicator(variation) {
  //   if (variation > 0) return "positive";
  //   if (variation < 0) return "negative";
  //   return "neutral";
  // }


  // const [kpis, setKpis] = useState(kpiData);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setKpis((prevKpis) =>
  //       prevKpis.map((kpi) => {
  //         if (kpi.titleKPI.includes("Precio promedio del huevo")) {
  //           const variation = getRandomVariation();
  //           const indicator = getIndicator(variation);
  //           const newValue = parseFloat(
  //             (kpi.valueKPI * (1 + variation / 100)).toFixed(2)
  //           );
  //           return {
  //             ...kpi,
  //             valueKPI: newValue,
  //             variationKPI: Math.abs(variation),
  //             indicatorKPI: indicator,
  //           };
  //         }
  //         return kpi; // resto no cambia
  //       })
  //     );
  //   }, 3000); // cada 3 segundos
  //   return () => clearInterval(interval);
  // }, []);

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
            <div className="mb-2">
              <NewsItem />
            </div>
            <div className="mb-2">
              <NewsItem />
            </div>
            <div className="mb-2">
              <NewsItem />
            </div>
            <div className="mb-2">
              <NewsItem />
            </div>
            <div className="mb-2">
              <NewsItem />
            </div>
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
