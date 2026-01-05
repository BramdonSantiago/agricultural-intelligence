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
      <div className="xl:grid grid-cols-12 gap-10 mb-10">
        <div className="col-span-4 col-news mb-4">
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
          <div className="side-power-bi">
            POWER BI
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
            <ul className="documentation-list">
              <li className="documentation-item">
                <div className="btn-documentation"><span className="documentation-item-triangle"></span>Informe de producción avicola</div>
                <div className="documentation-item-body mt-4">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi perspiciatis veritatis eaque tenetur, dignissimos exercitationem saepe inventore perferendis temporibus? Nostrum.</p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </li>
              <li className="documentation-item">
                <div className="btn-documentation"><span className="documentation-item-triangle"></span>Informe de producción avicola</div>
                <div className="documentation-item-body mt-4">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi perspiciatis veritatis eaque tenetur, dignissimos exercitationem saepe inventore perferendis temporibus? Nostrum.</p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </li>
              <li className="documentation-item">
                <div className="btn-documentation"><span className="documentation-item-triangle"></span>Informe de producción avicola</div>
                <div className="documentation-item-body mt-4">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi perspiciatis veritatis eaque tenetur, dignissimos exercitationem saepe inventore perferendis temporibus? Nostrum.</p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </li>
              <li className="documentation-item">
                <div className="btn-documentation"><span className="documentation-item-triangle"></span>Informe de producción avicola</div>
                <div className="documentation-item-body mt-4">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi perspiciatis veritatis eaque tenetur, dignissimos exercitationem saepe inventore perferendis temporibus? Nostrum.</p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </li>
              <li className="documentation-item">
                <div className="btn-documentation"><span className="documentation-item-triangle"></span>Informe de producción avicola</div>
                <div className="documentation-item-body mt-4">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi perspiciatis veritatis eaque tenetur, dignissimos exercitationem saepe inventore perferendis temporibus? Nostrum.</p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-6 mb-4">
          <div className="documentation-content">
            <h3 className="title-documentation">Documentos</h3>
            <ul className="documentation-list">
              <li className="documentation-item">
                <div className="btn-documentation"><span className="documentation-item-triangle"></span>Guía de sanidad</div>
                <div className="documentation-item-body mt-4">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi perspiciatis veritatis eaque tenetur, dignissimos exercitationem saepe inventore perferendis temporibus? Nostrum.</p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </li>
              <li className="documentation-item">
                <div className="btn-documentation"><span className="documentation-item-triangle"></span>Guía de sanidad</div>
                <div className="documentation-item-body mt-4">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi perspiciatis veritatis eaque tenetur, dignissimos exercitationem saepe inventore perferendis temporibus? Nostrum.</p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </li>
              <li className="documentation-item">
                <div className="btn-documentation"><span className="documentation-item-triangle"></span>Guía de sanidad</div>
                <div className="documentation-item-body mt-4">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi perspiciatis veritatis eaque tenetur, dignissimos exercitationem saepe inventore perferendis temporibus? Nostrum.</p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </li>
              <li className="documentation-item">
                <div className="btn-documentation"><span className="documentation-item-triangle"></span>Guía de sanidad</div>
                <div className="documentation-item-body mt-4">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi perspiciatis veritatis eaque tenetur, dignissimos exercitationem saepe inventore perferendis temporibus? Nostrum.</p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </li>
              <li className="documentation-item">
                <div className="btn-documentation"><span className="documentation-item-triangle"></span>Guía de sanidad</div>
                <div className="documentation-item-body mt-4">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi perspiciatis veritatis eaque tenetur, dignissimos exercitationem saepe inventore perferendis temporibus? Nostrum.</p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary">Descargar documento</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
