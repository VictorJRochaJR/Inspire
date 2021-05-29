import { ProxyState } from "../AppState.js"



const backgroundApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/images"
})


class ImageService {
    async getImage() {
        try {
            let res = await backgroundApi.get()
            console.log(res.data.url)
            ProxyState.Image = res.data.url
            // document.body.style.backgroundImage = `"url('${res.data.url}')"`

        } catch (error) {
            console.log(error)

        }



    }

}

export const imageService = new ImageService()