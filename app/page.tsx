// https://kestino.vercel.app/
// index.tsx for nextjs 12
import Contact from './(contact)/Contact';
import Main from './(main)/Main';
// import styles from './page.module.css'

function Home() {
  return (
    <div className='hs ws scrollBar rela text-white ofxh ofys snapy snapmand z20'>   {/* ws */}
      <Main />
      <Contact />
    </div>
  )
}

export default Home;