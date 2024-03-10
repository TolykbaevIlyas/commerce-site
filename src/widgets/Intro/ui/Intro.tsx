
import { Button } from '../../../shared/ui/Button'
import s from '../assets/css/style.module.css'

const Intro = () => {
  return (
    <main className={`${s.Intro} h-screen`}>
        <div className={`${s.IntroBlock} bg-primary2 px-10 py-20`}>
            <p className={`font-bold`}>New Arrival</p>
            <h3 className={`font-bold text-5xl mt-5 ${s.IntroText}`}>Discover Our New Collection</h3>
            <p className={`mt-5 ${s.IntroDesc}`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos ipsa, minus dignissimos reprehenderit aspernatur asperiores, voluptas exercitationem vero molestias sequi officiis culpa totam quae fuga nobis delectus sunt praesentium!</p>
            <Button variant='1' className={`mt-10 text-primary2 ${s.Button}`}>Buy Now</Button>
        </div>
    </main>
  )
}

export default Intro