import type { NextPage } from 'next'
import Link from 'next/link'



const Home: NextPage = () => {
  return (
    <Navigate page = "Plants" />
    )
  }
  
  export default Home
  
  function Navigate(props: any) {
    return (
    <div>
      <button>
        <Link href="/plants">
          <a>Go to {props.page}</a>
        </Link>
      </button>
    </div>
    )
  }