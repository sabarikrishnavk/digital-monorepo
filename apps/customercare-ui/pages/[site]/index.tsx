import { useRouter } from 'next/router';  
import {AppStyles} from '@digital-monorepo/ecom-ui-components';


export default function Index() { 
    const router = useRouter();
    const site= router.query.site ||[]; 
    // const site = sites[0];
    console.log("Index Router path : "+ site);

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