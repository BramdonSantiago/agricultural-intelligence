import Link from "next/link";
import { KPICard } from "./components/KPICard/KPICard"
import { NewsItem } from "./components/NewsItem/NewsItem"

export default function Home() {
  return (
    <main className="main-content py-8 px-10">
      <div className="xl:flex justify-between gap-4 mb-10">
        <KPICard />
        <KPICard />
        <KPICard />
        <KPICard />
        <KPICard />
      </div>
      <div className="grid grid-cols-12 gap-10 mb-10">
        <div className="col-span-4 col-news">
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
        <div className="col-span-8">
          <div className="side-power-bi">
            POWER BI
          </div>
          <div className="mt-4 text-end">
            <Link href={''} className="btn btn-primary">Ver más Tableros</Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-6">
          <div className="documentation-content">
            <h3 className="title-documentation">Análisis</h3>
            <ul className="documentation-list">
              <li className="documentation-item">Informe de producción avicola</li>
              <li className="documentation-item">Informe de producción avicola</li>
              <li className="documentation-item">Informe de producción avicola</li>
              <li className="documentation-item">Informe de producción avicola</li>
              <li className="documentation-item">Informe de producción avicola</li>
            </ul>
          </div>
        </div>
        <div className="col-span-6">
          <div className="documentation-content">
              <h3 className="title-documentation">Documentos</h3>
              <ul className="documentation-list">
                <li className="documentation-item">Normas sanitarias</li>
                <li className="documentation-item">Normas sanitarias</li>
                <li className="documentation-item">Normas sanitarias</li>
                <li className="documentation-item">Normas sanitarias</li>
                <li className="documentation-item">Normas sanitarias</li>
              </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
