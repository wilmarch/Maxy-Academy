import AnimeList from '@/app/components/AnimeList'

const Home = async () => {

const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
const anime = await response.json()

  return (
<div>
  <div className='p-4'>
    <h1 className='text-2xl font-bold'>List Anime memakai jikan API</h1>
    </div>
    <div className="grid md:grid-cols-5 sm:grrid-cols-3 grid-cols-2 gap-4 px-4">
    {anime.data.map(data =>{
     return (
      <div key={data.mal_id} className="shadow-xl">
     <AnimeList title={data.title} images={data.images.webp.image_url} id= {data.mal_id}/>
      </div>
      )
    } )}
    </div>
</div>
  )
}

export default Home;