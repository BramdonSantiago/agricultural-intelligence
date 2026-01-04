import Link from "next/link";
import { KPICard } from "./components/KPICard/KPICard"
import { NewsItem } from "./components/NewsItem/NewsItem"

export default function Home() {
  return (
    <main className="main-content py-4 px-8">
      <div className="xl:flex justify-between gap-4">
        <KPICard />
        <KPICard />
        <KPICard />
        <KPICard />
        <KPICard />
      </div>
      <div className="grid grid-cols-12 gap-8 mt-10">
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
          <div className="mt-4">
            <Link href={''}>Ver más Noticias</Link>
          </div>
        </div>
        <div className="col-span-8">
          <div className="side-power-bi">
            POWER BI
          </div>
          <div className="mt-4">
            <Link href={''}>Ver más Tableros</Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8 mt-10">
        <div className="col-span-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo iste dolores in delectus est voluptate repellendus velit deserunt. Laboriosam debitis, maiores hic exercitationem voluptates veniam omnis corrupti cum numquam nobis molestiae porro tempora corporis voluptas quia eos atque a? Sapiente distinctio ipsa consectetur, maiores corporis facilis repellat laudantium dolorum incidunt aut quibusdam consequuntur voluptatem eius perspiciatis magnam laboriosam, cumque soluta ratione quis quisquam! Nemo voluptate iste distinctio porro, expedita corrupti numquam repudiandae saepe modi omnis doloremque quis? Sequi voluptatibus a corporis, ex quos nostrum voluptatum omnis numquam placeat? Perferendis?</p>
        </div>
        <div className="col-span-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo iste dolores in delectus est voluptate repellendus velit deserunt. Laboriosam debitis, maiores hic exercitationem voluptates veniam omnis corrupti cum numquam nobis molestiae porro tempora corporis voluptas quia eos atque a? Sapiente distinctio ipsa consectetur, maiores corporis facilis repellat laudantium dolorum incidunt aut quibusdam consequuntur voluptatem eius perspiciatis magnam laboriosam, cumque soluta ratione quis quisquam! Nemo voluptate iste distinctio porro, expedita corrupti numquam repudiandae saepe modi omnis doloremque quis? Sequi voluptatibus a corporis, ex quos nostrum voluptatum omnis numquam placeat? Perferendis?</p>
        </div>
      </div>
    </main>
  );
}
