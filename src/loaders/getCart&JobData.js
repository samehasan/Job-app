import { getStoredCart } from "../utils/fakeDB"


         export const jobsAndCartData=async()=>{
            const jobsData=await fetch('/jobs.json')
            const jobs=await jobsData.json()
            const savedcart= getStoredCart()
            let cartArray=[]
            for (const id in savedcart ){
                const foundjob=jobs.find(job=>job.id===id)
                if(foundjob){
                    foundjob.quantity=savedcart[id]
                    // cartD.push(foundjob)
                   cartArray.push(foundjob)
                    
                } 
             }
             return {cartArray,jobs}
        }
      