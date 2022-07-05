import { useRouter } from 'next/router';  
import AppStyles from '../../components/AppStyles';


export function Index({props}) { 
    const router = useRouter();
    console.log("Router path : "+ router.query.site);
    const site= router.query.site; 

    return (
        <> 
        <AppStyles site= {site}/>
        <div className="container"  >  
            <main> 
            Welcome to {site} index page
            </main> 
        </div>
        </>

    ); 
}
export default Index;