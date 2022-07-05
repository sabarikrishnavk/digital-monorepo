import ThemeSelector from '../../components/ThemeSelector'; 
import { useRouter } from 'next/router'; 


export function Index({props}) { 
    const router = useRouter() 
    const { site } = router.query; 

    return (
        <>
        
        <div className="container"  >  
            <main> 
            Welcome to {site}
            <ThemeSelector site={site}/>
            </main> 
        </div>
        </>

    ); 
}
export default Index;