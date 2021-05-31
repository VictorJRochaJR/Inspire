import { ProxyState } from "../AppState.js"
import { imageService } from "../Services/ImageService.js"




function draw() {
    console.log(ProxyState.Image, "Image controller is working");
    // let imageElem = document.getElementById("background");
    // imageElem.style.backgroundImage = `url('${ProxyState.Image}')`
    document.body.style.backgroundImage = `url(${ProxyState.Image})`;

}
export default class ImageController {
    constructor() {

        ProxyState.on("Image", draw);
        this.getImage();

    }
    getImage() {
        imageService.getImage();

    }

}