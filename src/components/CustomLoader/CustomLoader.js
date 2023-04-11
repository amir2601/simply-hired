import { getShoppingCart } from "../../Utils/fakedb"


const customLoader = async () => {
    const loaderData = await fetch("/featuredJob.json")
    const data = await loaderData.json()
    let savedCart = []

    const storedCart = getShoppingCart()
    if (storedCart) {
        for(const id in storedCart) {
            const exixtingJob = data.find(job => job.id == id)
            if (exixtingJob) {
                savedCart.push(exixtingJob)
            }
        }
    }

    return savedCart    

}

export {customLoader}