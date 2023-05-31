import Image from 'next/image'
import Movie from '../assets/movie.svg'
import Book from '../assets/book.svg'
import Game from '../assets/game.svg'

export default function Home() {
  const randomImage = Math.ceil(Math.random() * 3)
  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={randomImage === 1 ? Movie : randomImage === 2 ? Book : Game}
            alt=""
            className="animate-rotate-y animate-normal animate-duration-[2000ms] animate-fill-forwards animate-once animate-ease-linear"
          />
          <div>
            <h1 className="text-5xl font-bold">
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-primary">
                  Estante Virtual
                </div>
              </div>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex gap-28">
              <button className="btn-outline btn-secondary btn">
                Fazer Login
              </button>
              <button className="btn-outline btn-info btn">Criar Conta</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
