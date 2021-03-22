const axios = require('axios').default;
import { Icategory } from '../interfaces/category.interface';

export class ChuckNorisService {

    private baseUrl: string = 'https://api.chucknorris.io';

    constructor() {}

    async getCatagories(): Promise<any> {
        try {
            const response = await axios.get(`${this.baseUrl}/jokes/categories`);
            return response.data;
        } catch (error) {
            console.error(error);
            return error
        }
    }

    async getCategory(catagory: string): Promise<Icategory> {
        try {
            const response = await axios.get(`${this.baseUrl}/jokes/random?category=${catagory}`);
            return response.data;
        } catch (error) {
            console.error(error);
            return error
        }
    }
}