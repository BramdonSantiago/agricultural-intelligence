import Link from "next/link";
import { KPICard } from "./components/KPICard/KPICard"
import { NewsItem } from "./components/NewsItem/NewsItem"

export default function Home() {
  return (
    <main className="main-content py-6 px-6 xl:py-8 xl:px-10">
      <div className="xl:flex justify-between gap-4 mb-10">
        <KPICard />
        <KPICard />
        <KPICard />
        <KPICard />
        <KPICard />
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
