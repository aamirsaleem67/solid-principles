export interface IPhoto {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface IExternalPhotosService {
    getPhoto(id: number): Promise<IPhoto>;
}

export class ExternalPhotosService implements IExternalPhotosService {
    async getPhoto(id: number): Promise<IPhoto> {
        console.log(`Getting photo from external api with id ${id}`);
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
        const photo = await response.json() as IPhoto;
        return photo;
    }
}

export class PhotosService {
    constructor(private externalPhotosService: IExternalPhotosService) {}

    async getPhoto(id: number): Promise<IPhoto> {
        const photo = await this.externalPhotosService.getPhoto(id);
        console.log(photo);
        return photo;
    }
}

export function run() {
    const photosService = new PhotosService(new ExternalPhotosService());
    return photosService.getPhoto(1);
}