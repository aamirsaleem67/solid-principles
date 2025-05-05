import { ExternalPhotosService, IExternalPhotosService, IPhoto, PhotosService } from "./photos";

export class MockExternalPhotosService implements IExternalPhotosService {
    async getPhoto(id: number): Promise<IPhoto> {
        return { id, title: "Test Photo", url: "https://test.com/photo.jpg", thumbnailUrl: "https://test.com/thumbnail.jpg" };
    }
}

describe("PhotosService", () => {
    it("should get a photo", async () => {
        // const mockExternalPhotosService = new MockExternalPhotosService();
        const photosService = new PhotosService(new ExternalPhotosService());
        const photo = await photosService.getPhoto(1);
        expect(photo).toBeDefined();
    });
});