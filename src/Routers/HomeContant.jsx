import { Link, useNavigation } from 'react-router-dom';
import images from './images/wave.svg'
import Loader from './Srorege/Loader/Loader';
const HomeContant = () => {
    let nav = useNavigation()
    if(nav.state === 'loading') return <Loader></Loader>
    return (
        <div>
          <div className="hero  h-[100vh]  md:h-[83vh] bg-cover bg-center relative" style={{backgroundImage: `url(${images})` }}>
       <div className="hero-content relative z-10 text-center">
         <div className=" w-full md:max-w-[70%]">
           <h1 className="text-5xl font-bold text-gray-700">Welcome to  <span className=" bg-gradient-to-r from-cyan-500 via-purple-400  to-purple-500 text-transparent bg-clip-text bg-300% animate-gradient">ByteBlaze</span>
           </h1>
           <p className="py-6 text-gray-500">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
           <Link to="/blogs"><button className="btn btn-outline mr-6 border-purple-500 border-2 text-gray-600 rounded-[30px] px-6">Read blogs</button></Link>
           <Link to="/bookmark"><button className="btn btn-outline border-purple-500 border-2 text-gray-600 rounded-[30px] px-6">Bookmarks</button></Link>


         </div>
       </div>
     </div>
        </div>
    );
};

export default HomeContant;